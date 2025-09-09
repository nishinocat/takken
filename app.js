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
        TOTAL_TIME: 'takken_total_time'
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
    }
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initEventListeners();
    updateStats();
    updateExamCountdown();
    updateDashboard();
    showAnalysisSidebar();
    // スタート画面を表示
    showStartScreen();
    
    // 定期的にデータを自動保存
    setInterval(() => {
        saveData();
    }, 5000); // 5秒ごとに自動保存
});

// データの読み込み
function loadData() {
    const history = localStorage.getItem(app.STORAGE_KEYS.HISTORY);
    const stats = localStorage.getItem(app.STORAGE_KEYS.STATS);
    const review = localStorage.getItem(app.STORAGE_KEYS.REVIEW);
    const totalTime = localStorage.getItem(app.STORAGE_KEYS.TOTAL_TIME);
    
    if (history) app.history = JSON.parse(history);
    if (stats) app.stats = JSON.parse(stats);
    if (review) app.reviewQuestions = JSON.parse(review);
    if (totalTime) {
        const savedTime = parseInt(totalTime);
        document.getElementById('totalTime').textContent = `学習時間: ${Math.floor(savedTime / 60)}分`;
    }
}

// データの保存
function saveData() {
    localStorage.setItem(app.STORAGE_KEYS.HISTORY, JSON.stringify(app.history));
    localStorage.setItem(app.STORAGE_KEYS.STATS, JSON.stringify(app.stats));
    localStorage.setItem(app.STORAGE_KEYS.REVIEW, JSON.stringify(app.reviewQuestions));
    
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
                checkAnswer(e.target.dataset.answer === 'true');
            }
        });
    });
    
    // 次の問題ボタン
    document.getElementById('nextBtn').addEventListener('click', showQuestion);
    
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
        const mode = document.querySelector('input[name="categoryMode"]:checked').value;
        if (mode === 'random') {
            question = app.categoryQuestions[Math.floor(Math.random() * app.categoryQuestions.length)];
        } else {
            question = app.categoryQuestions[app.currentQuestionIndex % app.categoryQuestions.length];
            app.currentQuestionIndex++;
        }
    } else if (app.currentMode === 'review' && app.reviewQuestions.length > 0) {
        const reviewId = app.reviewQuestions[0];
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
        resultDiv.textContent = '正解！';
        resultDiv.classList.add('correct');
        app.stats.correct++;
        app.stats.categories[app.currentQuestion.category].correct++;
    } else {
        resultDiv.textContent = '不正解';
        resultDiv.classList.add('incorrect');
        
        // 復習リストに追加
        if (!app.reviewQuestions.includes(app.currentQuestion.id)) {
            app.reviewQuestions.push(app.currentQuestion.id);
        }
    }
    
    // 統計更新
    app.stats.total++;
    app.stats.categories[app.currentQuestion.category].total++;
    
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
    
    // 復習モードの場合、正解したら復習リストから削除
    if (app.currentMode === 'review' && isCorrect) {
        app.reviewQuestions = app.reviewQuestions.filter(id => id !== app.currentQuestion.id);
        updateReviewArea();
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

// グローバル関数として公開
window.showStartScreen = showStartScreen;

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
    // 2025年の宅建試験日（通常10月第3日曜日）
    const examDate = new Date('2025-10-19'); // 2025年10月19日（仮）
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const daysLeftElement = document.getElementById('daysLeft');
    if (daysLeftElement) {
        if (diffDays > 0) {
            daysLeftElement.textContent = diffDays;
            daysLeftElement.style.color = diffDays <= 30 ? '#e74c3c' : '#fff';
        } else if (diffDays === 0) {
            daysLeftElement.textContent = '今日';
            daysLeftElement.style.color = '#ffc107';
        } else {
            daysLeftElement.textContent = '終了';
        }
    }
}

// 習熟度計算
function calculateMastery() {
    const categories = [
        { key: 'rights', name: '権利関係', total: 65 },
        { key: 'law', name: '法令上の制限', total: 65 },
        { key: 'tax', name: '税・その他', total: 60 },
        { key: 'business', name: '宅建業法', total: 60 }
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