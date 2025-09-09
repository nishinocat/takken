// アプリケーションの状態管理
const app = {
    currentMode: 'random',
    currentQuestion: null,
    currentQuestionIndex: 0,
    categoryQuestions: [],
    reviewQuestions: [],
    isAnswered: false,
    startTime: Date.now(),
    sessionStartTime: Date.now(),
    
    // ローカルストレージのキー
    STORAGE_KEYS: {
        HISTORY: 'takken_history',
        STATS: 'takken_stats',
        REVIEW: 'takken_review',
        TOTAL_TIME: 'takken_total_time',
        DAILY_STATS: 'takken_daily_stats',
        ACHIEVEMENTS: 'takken_achievements',
        USER_LEVEL: 'takken_user_level',
        STREAK_DATA: 'takken_streak_data',
        LAST_ACCESS: 'takken_last_access'
    },
    
    // 学習履歴
    history: [],
    stats: {
        total: 0,
        correct: 0,
        categories: {
            rights: { total: 0, correct: 0 },
            law: { total: 0, correct: 0 },
            tax: { total: 0, correct: 0 },
            business: { total: 0, correct: 0 }
        }
    },
    
    // ゲーミフィケーション
    dailyStats: {
        date: new Date().toDateString(),
        questionsAnswered: 0,
        correctAnswers: 0
    },
    streak: 0,  // 初期値は0だが、loadData()で上書きされる
    maxStreak: 0,
    achievements: {
        firstQuestion: false,
        tenQuestions: false,
        perfectStreak: false
    },
    userLevel: 1,
    userExp: 0
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    // グローバル関数を先に公開
    window.showStartScreen = showStartScreen;
    window.showStatInfo = showStatInfo;
    window.closeStatPopup = closeStatPopup;
    window.resetAllData = resetAllData;
    window.confirmDataReset = confirmDataReset;
    
    loadData();
    initEventListeners();
    updateStats();
    updateExamCountdown();
    updateDashboard();
    showAnalysisSidebar();
    updateGamification();
    initPWA(); // PWA機能の初期化
    
    // ストリークの初期状態を確認
    console.log('App initialized. Initial streak:', app.streak);
    
    // レベルペナルティの通知があれば表示
    const penaltyMessage = localStorage.getItem('takken_level_penalty');
    if (penaltyMessage) {
        setTimeout(() => {
            alert(`⚠️ ${penaltyMessage}\n\n毎日1問でも解いて学習を継続しましょう！`);
            localStorage.removeItem('takken_level_penalty');
        }, 1000);
    }
    
    // 初回起動時にポイントシステムの説明を表示
    const hasSeenPointInfo = localStorage.getItem('takken_point_info_seen');
    if (!hasSeenPointInfo) {
        showPointSystemInfo();
        localStorage.setItem('takken_point_info_seen', 'true');
    }
    
    // スタート画面を表示
    showStartScreen();
    
    // 定期的にデータを自動保存
    setInterval(() => {
        saveData();
        updateHeaderStats();
    }, 5000); // 5秒ごとに自動保存
});

// データの読み込み
function loadData() {
    const history = localStorage.getItem(app.STORAGE_KEYS.HISTORY);
    const stats = localStorage.getItem(app.STORAGE_KEYS.STATS);
    const review = localStorage.getItem(app.STORAGE_KEYS.REVIEW);
    const totalTime = localStorage.getItem(app.STORAGE_KEYS.TOTAL_TIME);
    const dailyStats = localStorage.getItem(app.STORAGE_KEYS.DAILY_STATS);
    const achievements = localStorage.getItem(app.STORAGE_KEYS.ACHIEVEMENTS);
    const userLevel = localStorage.getItem(app.STORAGE_KEYS.USER_LEVEL);
    const streakData = localStorage.getItem(app.STORAGE_KEYS.STREAK_DATA);
    
    if (history) app.history = JSON.parse(history);
    if (stats) {
        app.stats = JSON.parse(stats);
        // カテゴリが存在しない場合は初期化
        if (!app.stats.categories) {
            app.stats.categories = {
                rights: { correct: 0, total: 0 },
                law: { correct: 0, total: 0 },
                tax: { correct: 0, total: 0 },
                business: { correct: 0, total: 0 }
            };
        }
    }
    if (review) app.reviewQuestions = JSON.parse(review);
    
    // 最後のアクセス日をチェック
    const lastAccess = localStorage.getItem(app.STORAGE_KEYS.LAST_ACCESS);
    const today = new Date().toDateString();
    
    // 日次統計とレベルペナルティのチェック
    if (lastAccess && lastAccess !== today) {
        // 日付が変わった
        const lastAccessDate = new Date(lastAccess);
        const todayDate = new Date(today);
        const diffDays = Math.floor((todayDate - lastAccessDate) / (1000 * 60 * 60 * 24));
        
        // 前日の学習記録をチェック
        if (dailyStats) {
            const saved = JSON.parse(dailyStats);
            
            // 1日以上空いていて、最後にアクセスした日に問題を解いていない場合
            if (diffDays >= 1 && saved.date === lastAccess && saved.questionsAnswered === 0) {
                // レベルペナルティ（-3レベル）
                const currentLevel = app.userLevel || 1;
                if (currentLevel > 1) {
                    const penaltyLevels = 3;
                    const newLevel = Math.max(1, currentLevel - penaltyLevels);
                    const levelDiff = currentLevel - newLevel;
                    
                    app.userLevel = newLevel;
                    // 経験値も調整（レベルに合わせて）
                    app.userExp = Math.max(0, (app.userExp || 0) - (levelDiff * 100));
                    
                    // ペナルティ通知を保存
                    localStorage.setItem('takken_level_penalty', `${levelDiff}レベル下がりました（昨日学習しなかったため）`);
                }
            }
        }
    }
    
    // 日次統計を更新
    if (dailyStats) {
        const saved = JSON.parse(dailyStats);
        
        if (saved.date === today) {
            // 今日のデータ
            app.dailyStats = saved;
        } else {
            // 新しい日のデータに初期化
            app.dailyStats = {
                date: today,
                questionsAnswered: 0,
                correctAnswers: 0
            };
        }
    } else {
        // 初回起動
        app.dailyStats = {
            date: today,
            questionsAnswered: 0,
            correctAnswers: 0
        };
    }
    
    // 今日の日付を最後のアクセス日として保存
    localStorage.setItem(app.STORAGE_KEYS.LAST_ACCESS, today);
    
    if (achievements) app.achievements = JSON.parse(achievements);
    if (userLevel) {
        const levelData = JSON.parse(userLevel);
        // ペナルティ後のレベルを保持しない限り、保存されたレベルを使用
        if (!app.userLevel || app.userLevel === 1) {
            app.userLevel = levelData.level || 1;
            app.userExp = levelData.exp || 0;
        }
    }
    
    // ストリークデータの読み込み（重要：先にuserLevelをロードしてから）
    if (streakData) {
        const saved = JSON.parse(streakData);
        app.streak = saved.streak || 0;
        app.maxStreak = saved.maxStreak || 0;
        console.log('Loaded streak from storage:', app.streak, 'max:', app.maxStreak);
    } else {
        // 初回起動時
        app.streak = 0;
        app.maxStreak = 0;
        console.log('No streak data found, initializing to 0');
    }
    if (totalTime) {
        const savedTime = parseInt(totalTime);
        document.getElementById('totalTimeDisplay').textContent = Math.floor(savedTime / 60);
    }
}

// データの保存
function saveData() {
    localStorage.setItem(app.STORAGE_KEYS.HISTORY, JSON.stringify(app.history));
    localStorage.setItem(app.STORAGE_KEYS.STATS, JSON.stringify(app.stats));
    localStorage.setItem(app.STORAGE_KEYS.REVIEW, JSON.stringify(app.reviewQuestions));
    localStorage.setItem(app.STORAGE_KEYS.DAILY_STATS, JSON.stringify(app.dailyStats));
    localStorage.setItem(app.STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(app.achievements));
    localStorage.setItem(app.STORAGE_KEYS.USER_LEVEL, JSON.stringify({
        level: app.userLevel,
        exp: app.userExp
    }));
    localStorage.setItem(app.STORAGE_KEYS.STREAK_DATA, JSON.stringify({
        streak: app.streak,
        maxStreak: app.maxStreak
    }));
    
    const currentTotalTime = parseInt(localStorage.getItem(app.STORAGE_KEYS.TOTAL_TIME) || 0);
    const sessionTime = Math.floor((Date.now() - app.sessionStartTime) / 1000);
    localStorage.setItem(app.STORAGE_KEYS.TOTAL_TIME, currentTotalTime + sessionTime);
    app.sessionStartTime = Date.now();
}

// イベントリスナーの初期化
function initEventListeners() {
    // スタートボタン
    document.querySelectorAll('.start-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const mode = e.target.dataset.mode;
            startMode(mode);
        });
    });
    
    // 回答ボタン
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (!app.isAnswered) {
                // クリックした要素から最も近い.answer-btnを取得
                const answerBtn = e.target.closest('.answer-btn');
                if (answerBtn) {
                    // data-answer属性の値を取得（'true' または 'false' の文字列）
                    const answerValue = answerBtn.dataset.answer === 'true';
                    checkAnswer(answerValue);
                }
            }
        });
    });
    
    // 次の問題ボタン
    document.getElementById('nextBtn').addEventListener('click', showQuestion);
    
    // 復習開始ボタン
    document.getElementById('startReviewBtn')?.addEventListener('click', () => {
        app.currentMode = 'review';
        startReview();
    });
    
    // カテゴリ選択
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            selectCategory(e.target.dataset.category);
        });
    });
    
    // 復習開始
    const reviewBtn = document.getElementById('startReviewBtn');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', startReview);
    }
}

// ポイントシステムの説明を表示
function showPointSystemInfo() {
    alert(`🎯 新ポイントシステムのご案内\n\n` +
          `正解でポイントを獲得！\n` +
          `• 1問正解 = 1ポイント\n` +
          `• 2 COMBO!! = 2ポイント\n` +
          `• 3 COMBO!! = 4ポイント\n` +
          `• 4 COMBO!! = 8ポイント（最大）\n\n` +
          `100ポイントでレベルアップ！\n` +
          `レベル100到達で試験合格確実！\n\n` +
          `🔥 連続正解でCOMBOを決めよう！`);
}

// スタート画面表示
function showStartScreen() {
    // 全エリアを非表示
    document.getElementById('startScreen').classList.remove('hidden');
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('categoryArea').classList.add('hidden');
    document.getElementById('reviewArea').classList.add('hidden');
}

// モード開始
function startMode(mode) {
    app.currentMode = mode;
    // ストリークは継続する（リセットしない）
    console.log('Starting mode:', mode, 'Current streak:', app.streak);
    
    // スタート画面を非表示
    document.getElementById('startScreen').classList.add('hidden');
    document.getElementById('questionArea').classList.add('hidden');
    document.getElementById('categoryArea').classList.add('hidden');
    document.getElementById('reviewArea').classList.add('hidden');
    
    switch(mode) {
        case 'random':
            document.getElementById('questionArea').classList.remove('hidden');
            showQuestion();
            break;
        case 'category':
            document.getElementById('categoryArea').classList.remove('hidden');
            break;
        case 'review':
            document.getElementById('reviewArea').classList.remove('hidden');
            updateReviewArea();
            // 復習問題がある場合は自動で開始
            if (app.reviewQuestions.length > 0) {
                const reviewBtn = document.getElementById('startReviewBtn');
                reviewBtn.disabled = false;
            } else {
                const reviewBtn = document.getElementById('startReviewBtn');
                reviewBtn.disabled = true;
                reviewBtn.textContent = '復習する問題がありません';
            }
            break;
    }
}

// 問題表示
function showQuestion() {
    app.isAnswered = false;
    app.startTime = Date.now();
    
    // UI初期化
    document.getElementById('result').classList.add('hidden');
    document.getElementById('explanation').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = false;
        btn.style.opacity = '1';
    });
    
    // 問題選択
    let question;
    if (app.currentMode === 'random') {
        question = questions[Math.floor(Math.random() * questions.length)];
    } else if (app.currentMode === 'category' && app.categoryQuestions.length > 0) {
        // 分野別では常にランダムに出題
        question = app.categoryQuestions[Math.floor(Math.random() * app.categoryQuestions.length)];
    } else if (app.currentMode === 'review' && app.reviewQuestions.length > 0) {
        // 復習リストからランダムに選択（同じ問題の繰り返しを避ける）
        const randomIndex = Math.floor(Math.random() * app.reviewQuestions.length);
        const reviewId = app.reviewQuestions[randomIndex];
        question = questions.find(q => q.id === reviewId);
    } else {
        question = questions[Math.floor(Math.random() * questions.length)];
    }
    
    app.currentQuestion = question;
    
    // 問題表示
    document.getElementById('categoryLabel').textContent = question.categoryName;
    document.getElementById('questionNumber').textContent = `問題 #${question.id}`;
    document.getElementById('questionText').textContent = question.question;
}

// 回答チェック
function checkAnswer(userAnswer) {
    app.isAnswered = true;
    const isCorrect = userAnswer === app.currentQuestion.answer;
    
    // 結果表示
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden', 'correct', 'incorrect');
    
    if (isCorrect) {
        // ストリーク更新
        app.streak++;
        
        
        // ヘッダーのストリーク表示を更新（最大99）
        document.getElementById('streakDisplay').textContent = Math.min(app.streak, 99);
        
        if (app.streak > app.maxStreak) {
            app.maxStreak = app.streak;
        }
        
        // ポイント計算（連続正解でボーナス、最大4連続まで）
        let points = 1;
        if (app.streak > 1) {
            const effectiveStreak = Math.min(app.streak, 4);
            points = Math.pow(2, effectiveStreak - 1);
        }
        
        // 結果表示
        resultDiv.classList.add('correct');
        
        // COMBO表示（最大99まで表示）
        const displayStreak = Math.min(app.streak, 99);
        
        // HTML形式で確実に表示（スマホ対応）
        if (app.streak > 1) {
            // COMBOを目立つように別要素で表示
            const comboHtml = `
                <div style="font-size: 1em; margin-bottom: 5px; color: white;">🎉 正解！</div>
                <div style="font-size: 1.4em; color: #ffeb3b; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.3); line-height: 1.2;">
                    🔥 ${displayStreak} COMBO!!
                </div>
                <div style="font-size: 1em; margin-top: 5px; color: white;">+${points}ポイント獲得！</div>
            `;
            resultDiv.innerHTML = comboHtml;
        } else {
            const normalHtml = `
                <div style="font-size: 1.1em; color: white;">🎉 正解！</div>
                <div style="font-size: 1em; margin-top: 5px; color: white;">+1ポイント獲得</div>
            `;
            resultDiv.innerHTML = normalHtml;
        }
        
        app.stats.correct++;
        app.stats.categories[app.currentQuestion.category].correct++;
        
        // 経験値獲得
        app.userExp += points;
    } else {
        resultDiv.textContent = '❌ 不正解';
        resultDiv.classList.add('incorrect');
        
        // ストリークリセット
        app.streak = 0;
        document.getElementById('streakDisplay').textContent = Math.min(app.streak, 99);
        
        // 復習リストに追加
        if (!app.reviewQuestions.includes(app.currentQuestion.id)) {
            app.reviewQuestions.push(app.currentQuestion.id);
        }
    }
    
    // 統計更新
    app.stats.total++;
    app.stats.categories[app.currentQuestion.category].total++;
    
    // 日次統計更新
    app.dailyStats.questionsAnswered++;
    if (isCorrect) {
        app.dailyStats.correctAnswers++;
    }
    
    // 履歴追加
    app.history.push({
        questionId: app.currentQuestion.id,
        isCorrect: isCorrect,
        timestamp: Date.now(),
        responseTime: Date.now() - app.startTime
    });
    
    // 解説表示
    document.getElementById('explanation').textContent = app.currentQuestion.explanation;
    document.getElementById('explanation').classList.remove('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    
    // ボタン無効化
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });
    
    // ゲーミフィケーション更新
    updateGamification();
    checkAchievements();
    saveData();
    
    // 復習モードの場合、正解したら復習リストから削除
    if (app.currentMode === 'review' && isCorrect) {
        app.reviewQuestions = app.reviewQuestions.filter(id => id !== app.currentQuestion.id);
        updateReviewArea();
        
        // 復習問題がなくなったら通知
        if (app.reviewQuestions.length === 0) {
            setTimeout(() => {
                alert('🎉 復習完了！全ての問題をマスターしました！');
                showScreen('start');
            }, 1500);
        }
    }
    
    // データ保存と統計更新
    saveData();
    updateStats();
    updateDashboard();
}

// カテゴリ選択
function selectCategory(category) {
    app.categoryQuestions = questions.filter(q => q.category === category);
    app.currentQuestionIndex = 0;
    app.currentMode = 'category'; // モードを設定
    
    document.getElementById('categoryArea').classList.add('hidden');
    document.getElementById('questionArea').classList.remove('hidden');
    showQuestion();
}

// 復習開始
function startReview() {
    if (app.reviewQuestions.length === 0) {
        alert('復習する問題がありません。');
        return;
    }
    
    app.currentMode = 'review';
    document.getElementById('reviewArea').classList.add('hidden');
    document.getElementById('questionArea').classList.remove('hidden');
    showQuestion();
}

// グローバル関数として公開（DOMContentLoadedで既に設定済み）

// 復習エリア更新
function updateReviewArea() {
    document.getElementById('reviewCount').textContent = `復習対象: ${app.reviewQuestions.length}問`;
    
    const reviewBtn = document.getElementById('startReviewBtn');
    if (reviewBtn) {
        if (app.reviewQuestions.length === 0) {
            reviewBtn.disabled = true;
            reviewBtn.textContent = '復習する問題がありません';
        } else {
            reviewBtn.disabled = false;
            reviewBtn.textContent = '復習を開始';
        }
    }
}

// 統計更新
function updateStats() {
    const correctRate = app.stats.total > 0 
        ? Math.round((app.stats.correct / app.stats.total) * 100) 
        : 0;
    
    // サイドバーの分析を更新
    showAnalysisSidebar();
}

// ダッシュボード更新
function updateDashboard() {
    // 学習時間
    const totalTime = parseInt(localStorage.getItem(app.STORAGE_KEYS.TOTAL_TIME) || 0);
    const sessionTime = Math.floor((Date.now() - app.sessionStartTime) / 1000);
    const displayTime = Math.floor((totalTime + sessionTime) / 60);
    document.getElementById('totalTimeDisplay').textContent = displayTime;
    
    // 延べ問題数
    document.getElementById('totalQuestionsDisplay').textContent = app.stats.total;
    
    // 正答率
    const correctRate = app.stats.total > 0 
        ? Math.round((app.stats.correct / app.stats.total) * 100) 
        : 0;
    document.getElementById('correctRateDisplay').textContent = correctRate;
    
    // 今日の問題数
    const today = new Date().toDateString();
    const todayQuestions = app.history.filter(h => 
        new Date(h.timestamp).toDateString() === today
    ).length;
    document.getElementById('todayQuestionsDisplay').textContent = todayQuestions;
}

// サイドバー分析表示
function showAnalysisSidebar() {
    const masteryStats = calculateMastery();
    const masteryDiv = document.getElementById('masteryStats');
    if (!masteryDiv) return;
    masteryDiv.innerHTML = '';
    
    Object.values(masteryStats).forEach(stat => {
        const item = document.createElement('div');
        item.className = 'mastery-item';
        
        item.innerHTML = `
            <div class="mastery-label">${stat.name}</div>
            <div class="mastery-bar">
                <div class="mastery-fill" style="width: ${stat.percentage}%"></div>
            </div>
            <div class="mastery-percentage">${stat.percentage}%</div>
        `;
        masteryDiv.appendChild(item);
    });
    
    // 推奨表示
    const recommendationDiv = document.getElementById('recommendationText');
    const weakest = Object.values(masteryStats)
        .sort((a, b) => a.percentage - b.percentage)[0];
    
    if (weakest && weakest.percentage < 70) {
        recommendationDiv.innerHTML = `
            <strong>重点学習</strong><br>
            ${weakest.name}（${weakest.percentage}%）
        `;
    } else {
        recommendationDiv.innerHTML = '<strong>素晴らしい！</strong><br>すべて順調です';
    }
}

// 本試験までのカウントダウン
function updateExamCountdown() {
    // 令和7年（2025年）宅建士試験日
    const examDate = new Date('2025-10-19'); // 令和7年10月19日（日）
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const daysLeftElement = document.getElementById('daysLeft');
    if (daysLeftElement) {
        console.log('Days calculation:', { examDate, today, diffTime, diffDays }); // デバッグ用
        if (diffDays > 0) {
            daysLeftElement.textContent = diffDays;
            daysLeftElement.style.color = diffDays <= 30 ? '#ff3b30' : '#fff';
        } else if (diffDays === 0) {
            daysLeftElement.textContent = '今日';
            daysLeftElement.style.color = '#ffc107';
        } else {
            daysLeftElement.textContent = '終了';
            daysLeftElement.style.color = '#ff3b30';
        }
    }
}

// 習熟度計算
function calculateMastery() {
    const categories = [
        { key: 'rights', name: '権利関係', total: 82 },
        { key: 'law', name: '法令上の制限', total: 57 },
        { key: 'tax', name: '税・その他', total: 52 },
        { key: 'business', name: '宅建業法', total: 59 }
    ];
    
    const mastery = {};
    
    categories.forEach(cat => {
        // その分野の問題で正解した問題のユニーク数を計算
        const categoryQuestions = questions.filter(q => q.category === cat.key);
        const answeredCorrectly = new Set();
        
        app.history.forEach(h => {
            const question = questions.find(q => q.id === h.questionId);
            if (question && question.category === cat.key && h.isCorrect) {
                answeredCorrectly.add(h.questionId);
            }
        });
        
        // 習熟度 = (正解した問題数 / 全問題数) * 100
        const masteryPercentage = Math.round((answeredCorrectly.size / cat.total) * 100);
        
        mastery[cat.key] = {
            name: cat.name,
            correct: answeredCorrectly.size,
            total: cat.total,
            percentage: masteryPercentage
        };
    });
    
    return mastery;
}

// 新しいゲーミフィケーション機能

// ヘッダー統計の更新
function updateHeaderStats() {
    const totalTime = parseInt(localStorage.getItem(app.STORAGE_KEYS.TOTAL_TIME) || 0);
    document.getElementById('totalTimeDisplay').textContent = Math.floor(totalTime / 60);
    
    // 今日の問題数を表示
    document.getElementById('dailyQuestionsDisplay').textContent = app.dailyStats.questionsAnswered;
    
    const correctRate = app.stats.total > 0 ? Math.round((app.stats.correct / app.stats.total) * 100) : 0;
    document.getElementById('correctRateDisplay').textContent = correctRate;
    
    document.getElementById('streakDisplay').textContent = Math.min(app.streak, 99);
    
    // レベル表示を更新
    document.getElementById('currentLevel').textContent = app.userLevel;
}

// 日次目標の更新
function updateDailyGoal() {
    const dailyTarget = 50;
    const progress = Math.min((app.dailyStats.questionsAnswered / dailyTarget) * 100, 100);
    
    document.getElementById('dailyProgress').style.width = `${progress}%`;
    document.getElementById('dailyCount').textContent = app.dailyStats.questionsAnswered;
    
    if (progress >= 100) {
        document.getElementById('dailyProgress').textContent = '完了！';
    }
}

// 実績システム
function checkAchievements() {
    let newAchievements = [];
    
    // 初心者実績
    if (!app.achievements.firstQuestion && app.stats.total >= 1) {
        app.achievements.firstQuestion = true;
        newAchievements.push('初心者');
        document.getElementById('ach1')?.classList.add('unlocked');
        document.getElementById('achMini1')?.classList.add('unlocked');
    }
    
    // 30問達成
    if (!app.achievements.tenQuestions && app.stats.total >= 30) {
        app.achievements.tenQuestions = true;
        newAchievements.push('30問達成');
        document.getElementById('ach2')?.classList.add('unlocked');
        document.getElementById('achMini2')?.classList.add('unlocked');
    }
    
    // 連続正解
    if (!app.achievements.perfectStreak && app.streak >= 5) {
        app.achievements.perfectStreak = true;
        newAchievements.push('連続正解');
        document.getElementById('ach3')?.classList.add('unlocked');
        document.getElementById('achMini3')?.classList.add('unlocked');
    }
    
    // 実績通知（簡易版）
    newAchievements.forEach(achievement => {
        setTimeout(() => {
            if (confirm(`🎉 実績解除: ${achievement}！`)) {
                // 実績詳細を表示する場合の処理
            }
        }, 500);
    });
}

// レベルシステム
function updateLevel() {
    const expPerLevel = 100;
    const newLevel = Math.floor(app.userExp / expPerLevel) + 1;
    
    if (newLevel > app.userLevel) {
        app.userLevel = newLevel;
        setTimeout(() => {
            if (confirm(`🎊 レベルアップ！レベル${app.userLevel}になりました！`)) {
                // レベルアップボーナスなど
            }
        }, 1000);
    }
    
    const currentLevelExp = app.userExp % expPerLevel;
    const levelProgress = (currentLevelExp / expPerLevel) * 100;
    
    // PC版の表示更新
    document.getElementById('userLevel').textContent = app.userLevel;
    document.getElementById('levelProgress').style.width = `${levelProgress}%`;
    document.getElementById('expText').textContent = `${currentLevelExp} / ${expPerLevel} EXP`;
    
    // モバイル版の表示更新
    const mobileLevel = document.getElementById('mobileLevel');
    const mobileExp = document.getElementById('mobileExp');
    if (mobileLevel) mobileLevel.textContent = app.userLevel;
    if (mobileExp) mobileExp.textContent = `${currentLevelExp}/100 EXP`;
}

// レベルリセット確認
function resetLevelConfirm() {
    if (confirm('レベルをリセットしますか？\n（経験値が0に戻ります）')) {
        app.userExp = 0;
        app.userLevel = 1;
        localStorage.setItem(app.STORAGE_KEYS.USER_EXP, '0');
        updateLevel();
        alert('レベルがリセットされました');
    }
}

// 習熟度コンパクト表示
function updateMasteryCompact() {
    const masteryDiv = document.getElementById('masteryCompact');
    if (!masteryDiv) return;
    
    const categories = [
        { key: 'rights', name: '権利関係', total: 82 },
        { key: 'law', name: '法令制限', total: 57 },
        { key: 'tax', name: '税・その他', total: 52 },
        { key: 'business', name: '宅建業法', total: 59 }
    ];
    
    masteryDiv.innerHTML = '';
    
    categories.forEach(cat => {
        // カテゴリの統計を取得
        const categoryStats = app.stats.categories[cat.key] || { correct: 0, total: 0 };
        const correct = categoryStats.correct || 0;
        const total = categoryStats.total || 0;
        
        // 回答済み問題数に基づく習熟度計算
        let percentage = 0;
        if (total > 0) {
            // 正答率ベース
            percentage = Math.round((correct / total) * 100);
        }
        
        const item = document.createElement('div');
        item.className = 'mastery-item-compact';
        item.innerHTML = `
            <span class="mastery-label-compact">${cat.name}</span>
            <div class="mastery-bar-compact">
                <div class="mastery-fill-compact" style="width: ${percentage}%"></div>
            </div>
            <span class="mastery-percent-compact">${percentage}%</span>
        `;
        masteryDiv.appendChild(item);
    });
}

// 励ましメッセージの更新
function updateMotivationalText() {
    const messages = [
        '今日も頑張ろう！',
        '合格に向けて前進中！',
        'コツコツが勝つコツ！',
        '努力は必ず報われる！',
        '夢は叶えるもの！'
    ];
    
    const correctRate = app.stats.total > 0 ? (app.stats.correct / app.stats.total) * 100 : 0;
    let message = messages[0];
    
    if (correctRate >= 80) {
        message = '素晴らしい成績です！';
    } else if (correctRate >= 60) {
        message = '順調に成長中！';
    } else if (app.streak >= 3) {
        message = '調子が上がってきた！';
    }
    
    const msgElement = document.getElementById('motivationalText');
    if (msgElement) {
        msgElement.textContent = message;
    }
}

// 復習問題数の更新
function updateReviewBadge() {
    const reviewCountElement = document.getElementById('reviewBadge');
    if (reviewCountElement) {
        reviewCountElement.textContent = `${app.reviewQuestions.length}問`;
    }
    
    const reviewCount = document.getElementById('reviewCount');
    if (reviewCount) {
        reviewCount.textContent = app.reviewQuestions.length;
    }
}

// 全ゲーミフィケーション要素の更新
function updateGamification() {
    updateHeaderStats();
    updateDailyGoal();
    updateMasteryCompact();
    updateMotivationalText();
    updateReviewBadge();
    updateLevel();
    updateMobileStatus();
    
    // 実績の表示状態を復元
    if (app.achievements.firstQuestion) {
        document.getElementById('ach1')?.classList.add('unlocked');
        document.getElementById('achMini1')?.classList.add('unlocked');
        document.getElementById('mobileAch1')?.classList.add('unlocked');
    }
    if (app.achievements.tenQuestions) {
        document.getElementById('ach2')?.classList.add('unlocked');
        document.getElementById('achMini2')?.classList.add('unlocked');
        document.getElementById('mobileAch2')?.classList.add('unlocked');
    }
    if (app.achievements.perfectStreak) {
        document.getElementById('ach3')?.classList.add('unlocked');
        document.getElementById('achMini3')?.classList.add('unlocked');
        document.getElementById('mobileAch3')?.classList.add('unlocked');
    }
}

// モバイル用ステータス更新
function updateMobileStatus() {
    // 今日の学習数
    const today = new Date().toDateString();
    const todayQuestions = app.history.filter(h => 
        new Date(h.timestamp).toDateString() === today
    ).length;
    const mobileTodayCount = document.getElementById('mobileTodayCount');
    if (mobileTodayCount) mobileTodayCount.textContent = todayQuestions;
    
    // 習熟度更新
    const mobileMastery = document.getElementById('mobileMastery');
    if (!mobileMastery) return;
    
    const categories = [
        { key: 'rights', name: '権利', total: 82 },
        { key: 'law', name: '法令', total: 78 },
        { key: 'tax', name: '税', total: 60 },
        { key: 'business', name: '宅建', total: 60 }
    ];
    
    mobileMastery.innerHTML = '';
    categories.forEach(cat => {
        // カテゴリの統計を取得
        const categoryStats = app.stats.categories[cat.key] || { correct: 0, total: 0 };
        const correct = categoryStats.correct || 0;
        const total = categoryStats.total || 0;
        
        // 回答済み問題数に基づく習熟度計算
        let percentage = 0;
        if (total > 0) {
            // 正答率ベース（回答した問題の正答率）
            percentage = Math.round((correct / total) * 100);
        } else {
            // まだ解いていない場合は0%
            percentage = 0;
        }
        
        const item = document.createElement('div');
        item.className = 'mobile-mastery-item';
        item.innerHTML = `
            <div class="mobile-mastery-label">${cat.name}</div>
            <div class="mobile-mastery-bar">
                <div class="mobile-mastery-fill" style="width: ${percentage}%"></div>
            </div>
            <div class="mobile-mastery-percent">${percentage}%</div>
        `;
        mobileMastery.appendChild(item);
    });
    
    console.log('Mobile mastery updated:', app.stats.categories); // デバッグ用
}

// PWA（Progressive Web App）機能
let deferredPrompt;
let installBtn;

function initPWA() {
    installBtn = document.getElementById('installBtn');
    
    // 基本的にボタンを表示（デバッグ用）
    if (installBtn) {
        installBtn.style.display = 'block';
        installBtn.classList.remove('hidden');
    }
    
    // iOS Safari用の処理
    if (isIOS() && !window.navigator.standalone) {
        if (installBtn) {
            installBtn.innerHTML = '🍎';
            installBtn.title = 'ホーム画面に追加 (iOS)';
            installBtn.style.background = '#007aff';
            installBtn.addEventListener('click', showIOSInstallInstructions);
        }
        return;
    }
    
    // 既にスタンドアローンモードで実行中の場合
    if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
        if (installBtn) {
            installBtn.innerHTML = '✅';
            installBtn.title = '既にインストール済み';
            installBtn.style.background = '#34c759';
            installBtn.style.animation = 'none';
            installBtn.addEventListener('click', showAlreadyInstalledMessage);
        }
        return;
    }
    
    // PWAインストールプロンプトのイベントリスナー
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        if (installBtn) {
            installBtn.innerHTML = '📱';
            installBtn.title = 'ホーム画面に追加';
            installBtn.style.background = '#007aff';
            installBtn.addEventListener('click', installApp);
        }
    });
    
    // アプリがインストールされた時の処理
    window.addEventListener('appinstalled', (e) => {
        console.log('PWAがインストールされました');
        if (installBtn) {
            installBtn.innerHTML = '✅';
            installBtn.title = '既にインストール済み';
            installBtn.style.background = '#34c759';
            installBtn.style.animation = 'none';
        }
        deferredPrompt = null;
        
        // インストール成功メッセージ
        setTimeout(() => {
            alert('🎉 宅建マスターがホーム画面に追加されました！\\n\\nアプリのような使い心地で学習できます。');
        }, 1000);
    });
    
    // デフォルトのフォールバック（Android Chrome等）
    if (installBtn && !installBtn.onclick) {
        installBtn.innerHTML = '📱';
        installBtn.title = 'ホーム画面に追加';
        installBtn.style.background = '#007aff';
        installBtn.addEventListener('click', () => {
            if (deferredPrompt) {
                installApp();
            } else if (isIOS()) {
                showIOSInstallInstructions();
            } else {
                alert('📱 ホーム画面に追加する方法:\\n\\nブラウザのメニューから「ホーム画面に追加」を選択してください。');
            }
        });
    }
}

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('ユーザーがインストールを受け入れました');
            } else {
                console.log('ユーザーがインストールを拒否しました');
            }
            deferredPrompt = null;
        });
    }
}

function showAlreadyInstalledMessage() {
    alert('✅ 宅建マスターは既にインストール済みです！\\n\\nホーム画面からアプリとして起動できます。\\n\\n📱 ホーム画面の「宅建マスター」アイコンをタップしてください。');
}

function showIOSInstallInstructions() {
    alert('📱 iPhoneでホーム画面に追加する方法:\\n\\n' +
          '1️⃣ 画面下部の共有ボタン (□↗) をタップ\\n' +
          '2️⃣ 「ホーム画面に追加」をタップ\\n' +
          '3️⃣ 「追加」をタップ\\n\\n' +
          '🎉 ホーム画面にアイコンが追加され、アプリのように使えます！');
}

function isIOS() {
    return [
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
    ].includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}

// Service Worker登録（オフライン対応）
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((registration) => {
                console.log('Service Worker登録成功:', registration.scope);
            })
            .catch((error) => {
                console.log('Service Worker登録失敗:', error);
            });
    });
}

// 統計情報ポップアップ表示
function showStatInfo(type) {
    console.log('showStatInfo called with type:', type);
    
    const popup = document.getElementById('statPopup');
    const title = document.getElementById('popupTitle');
    const description = document.getElementById('popupDescription');
    const details = document.getElementById('popupDetails');
    
    if (!popup || !title || !description || !details) {
        console.error('Popup elements not found');
        return;
    }
    
    popup.classList.remove('hidden');
    
    switch(type) {
        case 'daily':
            title.textContent = '📅 今日の学習';
            description.textContent = '本日の学習進捗状況です。毎日コツコツ続けることが合格への近道！';
            details.innerHTML = `
                <div>✅ 今日の解答数: <strong>${app.dailyStats.questionsAnswered}問</strong></div>
                <div>🎯 今日の正解数: <strong>${app.dailyStats.correctAnswers}問</strong></div>
                <div>📊 今日の正答率: <strong>${app.dailyStats.questionsAnswered > 0 ? Math.round((app.dailyStats.correctAnswers / app.dailyStats.questionsAnswered) * 100) : 0}%</strong></div>
                <div>🎯 目標達成率: <strong>${Math.round((app.dailyStats.questionsAnswered / 50) * 100)}%</strong></div>
            `;
            break;
            
        case 'time':
            const totalMinutes = Math.floor(parseInt(localStorage.getItem(app.STORAGE_KEYS.TOTAL_TIME) || 0) / 60);
            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            title.textContent = '⏱ 累計学習時間';
            description.textContent = '継続は力なり！積み重ねた時間があなたの実力になります。';
            details.innerHTML = `
                <div>📚 総学習時間: <strong>${hours}時間${minutes}分</strong></div>
                <div>📅 1日平均: <strong>${Math.round(totalMinutes / 30)}分</strong>（30日換算）</div>
                <div>💡 ヒント: 1日30分の学習で合格率UP！</div>
            `;
            break;
            
        case 'accuracy':
            const rate = app.stats.total > 0 ? Math.round((app.stats.correct / app.stats.total) * 100) : 0;
            title.textContent = '🎯 正答率';
            description.textContent = '正確な理解が合格への鍵。間違えた問題は復習モードで完璧に！';
            details.innerHTML = `
                <div>✅ 総正解数: <strong>${app.stats.correct}問</strong></div>
                <div>📝 総解答数: <strong>${app.stats.total}問</strong></div>
                <div>🎯 正答率: <strong>${rate}%</strong></div>
                <div>${rate >= 70 ? '🏆 合格圏内です！' : '📚 復習を重ねて70%以上を目指そう！'}</div>
            `;
            break;
            
        case 'streak':
            title.textContent = '🔥 連続正解';
            description.textContent = '連続正解でボーナスポイント獲得！集中力を保って記録更新を目指そう。';
            details.innerHTML = `
                <div>🔥 現在の連続正解: <strong>${app.streak}問</strong></div>
                <div>🏆 最高記録: <strong>${app.maxStreak}問</strong></div>
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                    <strong>💰 COMBOボーナス：</strong><br>
                    1問正解 = 1ポイント<br>
                    2 COMBO = 2ポイント<br>
                    3 COMBO = 4ポイント<br>
                    4 COMBO以上 = 8ポイント（最大）<br>
                    <small>※間違えるとCOMBOリセット</small>
                </div>
            `;
            break;
            
        case 'level':
            const expPercent = app.userExp % 100;
            title.textContent = '📊 レベルシステム';
            description.textContent = 'レベル100で合格確実！連続正解でCOMBOボーナス！';
            details.innerHTML = `
                <div>📊 現在のレベル: <strong>Lv.${app.userLevel}</strong></div>
                <div>✨ 経験値: <strong>${expPercent}/100</strong></div>
                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                    <strong>🔥 COMBOシステム：</strong><br>
                    1問正解 = 1ポイント<br>
                    2 COMBO = 2ポイント<br>
                    3 COMBO = 4ポイント<br>
                    4 COMBO以上 = 8ポイント（最大）<br>
                    <small>※5連続、6連続...も8ポイント</small><br>
                    <small>※100ポイントで1レベルアップ</small><br>
                    <small>※レベル100到達で合格確実！</small>
                </div>
                <div>🎯 レベル100まで: <strong>あと${100 - app.userLevel}レベル</strong></div>
                <div>💡 COMBOを繋いで効率的にレベルアップ！</div>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #ddd;">
                    <button onclick="confirmDataReset()" style="
                        background: #ff3b30;
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 6px;
                        font-size: 14px;
                        cursor: pointer;
                        width: 100%;
                    ">
                        🗑️ 全データをリセット
                    </button>
                    <small style="display: block; margin-top: 5px; color: #666;">
                        ※レベル、統計、履歴など全てが削除されます
                    </small>
                </div>
            `;
            break;
            
        case 'achievements':
            title.textContent = '🏆 実績';
            description.textContent = '学習の節目ごとに実績を解除！全実績コンプリートを目指そう。';
            details.innerHTML = `
                <div>${app.achievements.firstQuestion ? '✅' : '❌'} 🌟 初心者: 初めての問題に挑戦</div>
                <div>${app.achievements.tenQuestions ? '✅' : '❌'} ⭐ 30問達成: 30問解答完了</div>
                <div>${app.achievements.perfectStreak ? '✅' : '❌'} 💫 連続正解: 5問連続正解</div>
                <div>解除率: <strong>${[app.achievements.firstQuestion, app.achievements.tenQuestions, app.achievements.perfectStreak].filter(a => a).length}/3</strong></div>
            `;
            break;
    }
}

// ポップアップを閉じる
function closeStatPopup() {
    document.getElementById('statPopup').classList.add('hidden');
}

// 全データをリセット
function resetAllData() {
    if (confirm('本当に全ての学習データをリセットしますか？\nこの操作は取り消せません。')) {
        // LocalStorageの全データをクリア
        Object.values(app.STORAGE_KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        
        // 初回起動フラグもリセット
        localStorage.removeItem('takken_point_info_seen');
        
        // アプリの状態を初期化
        app.history = [];
        app.stats = {
            total: 0,
            correct: 0,
            categories: {
                rights: { total: 0, correct: 0 },
                law: { total: 0, correct: 0 },
                tax: { total: 0, correct: 0 },
                business: { total: 0, correct: 0 }
            }
        };
        app.reviewQuestions = [];
        app.dailyStats = {
            date: new Date().toDateString(),
            questionsAnswered: 0,
            correctAnswers: 0
        };
        app.streak = 0;
        app.maxStreak = 0;
        app.achievements = {
            firstQuestion: false,
            tenQuestions: false,
            perfectStreak: false
        };
        app.userLevel = 1;
        app.userExp = 0;
        
        // ページをリロード
        location.reload();
    }
}

// リセット確認（ポップアップから呼ばれる）
function confirmDataReset() {
    // まずポップアップを閉じる
    closeStatPopup();
    
    // 少し遅延してから確認ダイアログを表示
    setTimeout(() => {
        if (confirm('⚠️ 警告\n\n本当に全ての学習データをリセットしますか？\n\n削除されるデータ：\n• レベルと経験値\n• 学習履歴と統計\n• 実績とストリーク\n• 復習リスト\n\nこの操作は取り消せません。')) {
            if (confirm('最終確認\n\n本当によろしいですか？')) {
                resetAllData();
            }
        }
    }, 100);
}

// 分析表示
function showAnalysis() {
    // 習熟度表示
    const masteryStats = calculateMastery();
    const masteryDiv = document.getElementById('masteryStats');
    masteryDiv.innerHTML = '';
    
    Object.values(masteryStats).forEach(stat => {
        const item = document.createElement('div');
        item.className = 'mastery-item';
        
        const fillWidth = stat.percentage;
        const barColor = stat.percentage >= 80 ? '#2ecc71' : 
                        stat.percentage >= 60 ? '#3498db' : 
                        stat.percentage >= 40 ? '#f39c12' : '#e74c3c';
        
        item.innerHTML = `
            <div class="mastery-label">${stat.name}</div>
            <div class="mastery-bar">
                <div class="mastery-fill" style="width: ${fillWidth}%; background: ${barColor};">
                    ${stat.correct}/${stat.total}問
                </div>
            </div>
            <div class="mastery-percentage">${stat.percentage}%</div>
        `;
        masteryDiv.appendChild(item);
    });
    
    // カテゴリ別統計
    const categoryStatsDiv = document.getElementById('categoryStats');
    categoryStatsDiv.innerHTML = '';
    
    const categories = [
        { key: 'rights', name: '権利関係' },
        { key: 'law', name: '法令上の制限' },
        { key: 'tax', name: '税・その他' },
        { key: 'business', name: '宅建業法' }
    ];
    
    categories.forEach(cat => {
        const stats = app.stats.categories[cat.key];
        const rate = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
        
        const bar = document.createElement('div');
        bar.className = 'stat-bar';
        bar.innerHTML = `
            <span class="stat-label">${cat.name}</span>
            <div class="stat-progress">
                <div class="stat-fill" style="width: ${rate}%"></div>
            </div>
            <span class="stat-value">${rate}%</span>
        `;
        categoryStatsDiv.appendChild(bar);
    });
    
    // 重点学習推奨
    const recommendationDiv = document.getElementById('recommendationText');
    const weakCategories = categories
        .map(cat => {
            const stats = app.stats.categories[cat.key];
            const rate = stats.total > 0 ? (stats.correct / stats.total) * 100 : 100;
            return { name: cat.name, rate: rate, total: stats.total };
        })
        .filter(cat => cat.total > 0)
        .sort((a, b) => a.rate - b.rate);
    
    if (weakCategories.length > 0 && weakCategories[0].rate < 70) {
        recommendationDiv.innerHTML = `
            <p>以下の分野の強化をお勧めします：</p>
            <ul>
                ${weakCategories.slice(0, 2).map(cat => 
                    `<li>${cat.name}（正答率: ${Math.round(cat.rate)}%）</li>`
                ).join('')}
            </ul>
        `;
    } else if (app.stats.total === 0) {
        recommendationDiv.innerHTML = '<p>まずは問題を解いてみましょう！</p>';
    } else {
        recommendationDiv.innerHTML = '<p>素晴らしい成績です！この調子で頑張りましょう。</p>';
    }
    
    // 進捗状況
    const progressDiv = document.getElementById('progressStats');
    const totalQuestions = questions.length;
    const answeredQuestions = new Set(app.history.map(h => h.questionId)).size;
    const progressRate = Math.round((answeredQuestions / totalQuestions) * 100);
    
    progressDiv.innerHTML = `
        <p>全${totalQuestions}問中 ${answeredQuestions}問に挑戦済み（${progressRate}%）</p>
        <p>総回答数: ${app.stats.total}問</p>
        <p>正解数: ${app.stats.correct}問</p>
        <p>復習リスト: ${app.reviewQuestions.length}問</p>
    `;
}

// 定期的に学習時間とカウントダウンを更新
setInterval(() => {
    updateDashboard();
    updateExamCountdown();
}, 30000); // 30秒ごとに更新

// ページ読み込み時にモバイルステータスも更新
document.addEventListener('DOMContentLoaded', () => {
    // データ読み込み後に更新
    loadData();
    updateGamification();
    updateMobileStatus();
});