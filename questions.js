const questions = [
    // ========== 権利関係（125問） ==========
    // 民法総則
    {
        id: 1,
        category: "rights",
        categoryName: "権利関係",
        question: "未成年者が法定代理人の同意を得ずに行った法律行為は、原則として取り消すことができる。",
        answer: true,
        explanation: "民法第5条により、未成年者が法定代理人の同意を得ずに行った法律行為は取り消すことができます。ただし、単に権利を得、または義務を免れる法律行為は除きます。"
    },
    {
        id: 2,
        category: "rights",
        categoryName: "権利関係",
        question: "成年被後見人が日用品の購入その他日常生活に関する行為を行った場合、後見人はこれを取り消すことができる。",
        answer: false,
        explanation: "民法第9条により、成年被後見人の日常生活に関する行為は取り消すことができません。本人の日常生活の自由を保護するためです。"
    },
    {
        id: 3,
        category: "rights",
        categoryName: "権利関係",
        question: "意思表示が詐欺による場合、善意の第三者に対しても取消しを対抗することができる。",
        answer: false,
        explanation: "民法第96条第3項により、詐欺による意思表示の取消しは、善意の第三者に対抗することができません。第三者の取引の安全を保護するためです。"
    },
    {
        id: 4,
        category: "rights",
        categoryName: "権利関係",
        question: "時効の援用は、時効によって直接利益を受ける者のみが行うことができる。",
        answer: true,
        explanation: "民法第145条により、時効は当事者が援用しなければ効力を生じません。援用権者は時効により直接利益を受ける者に限られます。"
    },
    {
        id: 5,
        category: "rights",
        categoryName: "権利関係",
        question: "債権の消滅時効期間は、原則として債権者が権利を行使することができることを知った時から5年である。",
        answer: true,
        explanation: "民法第166条により、債権は債権者が権利を行使することができることを知った時から5年、権利を行使することができる時から10年で時効消滅します。"
    },
    {
        id: 6,
        category: "rights",
        categoryName: "権利関係",
        question: "連帯債務者の一人に対する履行の請求は、他の連帯債務者に対しても効力を生じる。",
        answer: false,
        explanation: "改正民法第441条により、連帯債務者の一人に対する履行の請求は、原則として他の連帯債務者に対して効力を生じません（相対的効力の原則）。"
    },
    {
        id: 7,
        category: "rights",
        categoryName: "権利関係",
        question: "賃貸借契約において、賃借人が賃料を支払わない場合、賃貸人は催告なしに直ちに契約を解除できる。",
        answer: false,
        explanation: "民法第541条により、債務不履行による解除は原則として催告が必要です。ただし、催告をしても契約の目的を達することができないことが明らかな場合は除きます。"
    },
    {
        id: 8,
        category: "rights",
        categoryName: "権利関係",
        question: "抵当権は、債務者または第三者が占有を移転しないで債務の担保に供した不動産について設定される。",
        answer: true,
        explanation: "民法第369条により、抵当権は債務者または第三者がその占有を移転しないで債務の担保に供した不動産について設定されます。"
    },
    
    // 法令上の制限
    {
        id: 9,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街化区域内において1,000㎡の開発行為を行う場合、都道府県知事の許可が必要である。",
        answer: true,
        explanation: "都市計画法第29条により、市街化区域内における1,000㎡以上の開発行為は都道府県知事の許可が必要です。"
    },
    {
        id: 10,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街化調整区域内では、原則として開発行為および建築行為が禁止されている。",
        answer: true,
        explanation: "都市計画法により、市街化調整区域は市街化を抑制すべき区域とされ、原則として開発行為や建築行為が制限されます。"
    },
    {
        id: 11,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築基準法上、建築確認が必要なのは、都市計画区域内の建築物に限られる。",
        answer: false,
        explanation: "建築基準法第6条により、都市計画区域外でも一定規模以上の建築物には建築確認が必要です。"
    },
    {
        id: 12,
        category: "law",
        categoryName: "法令上の制限",
        question: "第一種低層住居専用地域内では、建築物の高さは10mまたは12mのうち都市計画で定められた限度を超えてはならない。",
        answer: true,
        explanation: "建築基準法第55条により、第一種低層住居専用地域および第二種低層住居専用地域内の建築物の高さは、10mまたは12mのうち都市計画で定める限度を超えてはなりません。"
    },
    {
        id: 13,
        category: "law",
        categoryName: "法令上の制限",
        question: "建ぺい率の制限は、防火地域内の耐火建築物には適用されない。",
        answer: true,
        explanation: "建築基準法第53条により、防火地域内の耐火建築物等については建ぺい率の制限が緩和され、実質的に適用されない場合があります。"
    },
    {
        id: 14,
        category: "law",
        categoryName: "法令上の制限",
        question: "農地を農地以外のものにする場合、農地法第4条の許可が必要である。",
        answer: true,
        explanation: "農地法第4条により、農地を農地以外のものにする場合（転用）には、原則として都道府県知事等の許可が必要です。"
    },
    {
        id: 15,
        category: "law",
        categoryName: "法令上の制限",
        question: "宅地造成工事規制区域内で切土により2mの崖を生じる造成工事を行う場合、都道府県知事の許可は不要である。",
        answer: false,
        explanation: "宅地造成等規制法により、宅地造成工事規制区域内で2m超の切土または1m超の盛土を行う場合は、都道府県知事の許可が必要です。"
    },
    {
        id: 16,
        category: "law",
        categoryName: "法令上の制限",
        question: "土地区画整理事業の施行地区内において、建築物の新築を行う場合は、都道府県知事の許可が必要である。",
        answer: true,
        explanation: "土地区画整理法第76条により、土地区画整理事業の施行地区内での建築物の新築等は、都道府県知事等の許可が必要です。"
    },
    
    // 税・その他
    {
        id: 17,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産取得税は、相続により不動産を取得した場合にも課税される。",
        answer: false,
        explanation: "地方税法により、相続による不動産の取得については不動産取得税は非課税とされています。"
    },
    {
        id: 18,
        category: "tax",
        categoryName: "税・その他",
        question: "固定資産税の納税義務者は、毎年1月1日現在の固定資産の所有者である。",
        answer: true,
        explanation: "地方税法により、固定資産税は毎年1月1日（賦課期日）現在の土地、家屋等の所有者に課税されます。"
    },
    {
        id: 19,
        category: "tax",
        categoryName: "税・その他",
        question: "印紙税は、契約書の作成者が納税義務を負う。",
        answer: true,
        explanation: "印紙税法により、課税文書の作成者が印紙税の納税義務者となります。契約書の場合、通常は契約当事者が共同で作成者となります。"
    },
    {
        id: 20,
        category: "tax",
        categoryName: "税・その他",
        question: "登録免許税は、不動産の所有権移転登記の場合、原則として固定資産税評価額の2％である。",
        answer: true,
        explanation: "登録免許税法により、売買による所有権移転登記の登録免許税は、原則として固定資産税評価額の1000分の20（2％）です。"
    },
    {
        id: 21,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産の譲渡所得の計算において、取得費が不明な場合は、譲渡価額の5％を取得費とすることができる。",
        answer: true,
        explanation: "所得税法により、取得費が不明な場合は、譲渡価額の5％相当額を概算取得費として計算することができます。"
    },
    {
        id: 22,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅ローン控除は、中古住宅の取得には適用されない。",
        answer: false,
        explanation: "一定の要件を満たす中古住宅の取得についても、住宅ローン控除（住宅借入金等特別控除）の適用を受けることができます。"
    },
    {
        id: 23,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産の鑑定評価において、原価法は主に土地の評価に用いられる。",
        answer: false,
        explanation: "原価法は主に建物等の評価に用いられます。土地の評価には主に取引事例比較法が用いられます。"
    },
    {
        id: 24,
        category: "tax",
        categoryName: "税・その他",
        question: "地価公示価格は、毎年1月1日時点の標準地の正常な価格として公示される。",
        answer: true,
        explanation: "地価公示法により、国土交通省は毎年1月1日時点の標準地の正常な価格を3月に公示します。"
    },
    
    // 宅建業法
    {
        id: 25,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引業の免許は、5年ごとに更新する必要がある。",
        answer: true,
        explanation: "宅建業法第3条により、宅地建物取引業の免許の有効期間は5年で、更新が必要です。"
    },
    {
        id: 26,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引業者は、事務所ごとに専任の宅地建物取引士を設置しなければならない。",
        answer: true,
        explanation: "宅建業法第31条の3により、宅建業者は事務所ごとに、業務に従事する者5人に1人以上の割合で専任の宅地建物取引士を設置する必要があります。"
    },
    {
        id: 27,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引業者は、自ら売主となる場合、買主から手付金として代金の20％を超える額を受領することができる。",
        answer: false,
        explanation: "宅建業法第39条により、宅建業者が自ら売主となる場合、買主から受領する手付金は代金の20％を超えてはなりません。"
    },
    {
        id: 28,
        category: "business",
        categoryName: "宅建業法",
        question: "重要事項説明は、宅地建物取引士でなければ行うことができない。",
        answer: true,
        explanation: "宅建業法第35条により、重要事項の説明は宅地建物取引士が行わなければなりません。"
    },
    {
        id: 29,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引業者は、媒介契約を締結したときは、遅滞なく媒介契約書を作成し、依頼者に交付しなければならない。",
        answer: true,
        explanation: "宅建業法第34条の2により、媒介契約を締結したときは、遅滞なく一定の事項を記載した書面を作成し、記名押印して依頼者に交付する必要があります。"
    },
    {
        id: 30,
        category: "business",
        categoryName: "宅建業法",
        question: "専任媒介契約の有効期間は、3か月を超えることができない。",
        answer: true,
        explanation: "宅建業法により、専任媒介契約および専属専任媒介契約の有効期間は3か月を超えることができません。"
    },
    {
        id: 31,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引業者が受け取ることのできる報酬の額は、国土交通大臣が定める。",
        answer: true,
        explanation: "宅建業法第46条により、宅建業者が受け取ることのできる報酬の額は、国土交通大臣が定めています。"
    },
    {
        id: 32,
        category: "business",
        categoryName: "宅建業法",
        question: "クーリング・オフは、事務所で買受けの申込みをした場合でも適用される。",
        answer: false,
        explanation: "宅建業法第37条の2により、クーリング・オフは事務所等以外の場所で買受けの申込み等をした場合に適用されます。事務所での申込みには適用されません。"
    },
    {
        id: 33,
        category: "business",
        categoryName: "宅建業法",
        question: "営業保証金は、主たる事務所の最寄りの供託所に供託する。",
        answer: true,
        explanation: "宅建業法第25条により、営業保証金は主たる事務所の最寄りの供託所に供託します。"
    },
    {
        id: 34,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引業者は、従業者名簿を事務所ごとに備え、10年間保存しなければならない。",
        answer: false,
        explanation: "宅建業法第48条により、従業者名簿は最終の記載をした日から10年間保存する必要がありますが、退職した従業者については退職後10年間です。"
    },
    {
        id: 35,
        category: "business",
        categoryName: "宅建業法",
        question: "37条書面（契約書面）は、契約成立前に交付しなければならない。",
        answer: false,
        explanation: "宅建業法第37条により、37条書面は契約成立後遅滞なく交付する必要があります。契約成立前に交付するのは35条書面（重要事項説明書）です。"
    },
    {
        id: 36,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引士証の有効期間は、5年である。",
        answer: true,
        explanation: "宅建業法により、宅地建物取引士証の有効期間は5年で、更新するには法定講習を受講する必要があります。"
    },
    
    // 追加問題（権利関係）
    {
        id: 37,
        category: "rights",
        categoryName: "権利関係",
        question: "代理人が本人のためにすることを示さないでした意思表示は、代理人自身のためにしたものとみなされる。",
        answer: true,
        explanation: "民法第100条により、代理人が本人のためにすることを示さないでした意思表示は、自己のためにしたものとみなされます（顕名主義）。"
    },
    {
        id: 38,
        category: "rights",
        categoryName: "権利関係",
        question: "表見代理が成立する場合、本人は無権代理人の行為について責任を負わない。",
        answer: false,
        explanation: "表見代理が成立する場合、本人は無権代理人の行為について責任を負います。相手方の信頼を保護するための制度です。"
    },
    {
        id: 39,
        category: "rights",
        categoryName: "権利関係",
        question: "同時履行の抗弁権は、双務契約においてのみ認められる。",
        answer: true,
        explanation: "民法第533条により、同時履行の抗弁権は双務契約から生じる対価的な債務について認められます。"
    },
    {
        id: 40,
        category: "rights",
        categoryName: "権利関係",
        question: "危険負担において、特定物の売買では、目的物の滅失の危険は債権者（買主）が負担する。",
        answer: true,
        explanation: "民法第536条により、特定物に関する物権の設定又は移転を目的とする双務契約では、債権者主義が適用されます。"
    },
    
    // 追加問題（法令上の制限）
    {
        id: 41,
        category: "law",
        categoryName: "法令上の制限",
        question: "準都市計画区域内では、用途地域を定めることができない。",
        answer: false,
        explanation: "都市計画法により、準都市計画区域内でも用途地域を定めることができます。"
    },
    {
        id: 42,
        category: "law",
        categoryName: "法令上の制限",
        question: "特定用途制限地域は、用途地域が定められていない土地の区域内において定めることができる。",
        answer: true,
        explanation: "都市計画法により、特定用途制限地域は用途地域が定められていない土地の区域（市街化調整区域を除く）内において定めることができます。"
    },
    {
        id: 43,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築協定は、土地の所有者全員の合意がなければ締結できない。",
        answer: false,
        explanation: "建築基準法により、建築協定は土地所有者等の全員の合意により締結できますが、一人協定制度もあります。"
    },
    {
        id: 44,
        category: "law",
        categoryName: "法令上の制限",
        question: "景観地区内では、建築物の形態意匠について市町村長の認定を受ける必要がある。",
        answer: true,
        explanation: "景観法により、景観地区内で建築物の建築等をする場合は、形態意匠について市町村長の認定を受ける必要があります。"
    },
    
    // 追加問題（税・その他）
    {
        id: 45,
        category: "tax",
        categoryName: "税・その他",
        question: "消費税の課税事業者は、前々年の課税売上高が1,000万円を超える事業者である。",
        answer: true,
        explanation: "消費税法により、基準期間（前々年）の課税売上高が1,000万円を超える事業者は課税事業者となります。"
    },
    {
        id: 46,
        category: "tax",
        categoryName: "税・その他",
        question: "居住用財産の譲渡所得の3,000万円特別控除は、所有期間に関係なく適用できる。",
        answer: true,
        explanation: "居住用財産の譲渡所得の3,000万円特別控除は、所有期間の長短に関係なく、一定の要件を満たせば適用できます。"
    },
    {
        id: 47,
        category: "tax",
        categoryName: "税・その他",
        question: "相続税の基礎控除額は、3,000万円＋600万円×法定相続人の数である。",
        answer: true,
        explanation: "相続税法により、相続税の基礎控除額は「3,000万円＋600万円×法定相続人の数」で計算されます。"
    },
    {
        id: 48,
        category: "tax",
        categoryName: "税・その他",
        question: "贈与税の基礎控除額は、年間110万円である。",
        answer: true,
        explanation: "贈与税の暦年課税における基礎控除額は、受贈者1人につき年間110万円です。"
    },
    
    // 追加問題（宅建業法）
    {
        id: 49,
        category: "business",
        categoryName: "宅建業法",
        question: "宅地建物取引業者は、宅地の売買の媒介において、売主と買主の双方から報酬を受け取ることができる。",
        answer: true,
        explanation: "宅建業法により、媒介の場合は売主と買主の双方から報酬を受け取ることができますが、合計額は規定の上限を超えてはなりません。"
    },
    {
        id: 50,
        category: "business",
        categoryName: "宅建業法",
        question: "手付金等の保全措置は、完成物件の場合、代金の10％または1,000万円を超える場合に必要である。",
        answer: true,
        explanation: "宅建業法第41条により、完成物件の場合、手付金等が代金の10％または1,000万円を超える場合に保全措置が必要です。"
    },

    // 追加問題 51-500
    // 権利関係（51-175）
    {
        id: 51,
        category: "rights",
        categoryName: "権利関係",
        question: "制限行為能力者が単独で行った法律行為であっても、日用品の購入は取り消すことができない。",
        answer: true,
        explanation: "民法により、制限行為能力者であっても日常生活に必要な範囲の行為は有効とされ、取り消すことができません。"
    },
    {
        id: 52,
        category: "rights",
        categoryName: "権利関係",
        question: "虚偽表示による意思表示は、善意の第三者に対抗することができる。",
        answer: false,
        explanation: "民法第94条第2項により、虚偽表示の無効は善意の第三者に対抗することができません。"
    },
    {
        id: 53,
        category: "rights",
        categoryName: "権利関係",
        question: "錯誤による意思表示は、重要な部分に錯誤がある場合に限り取り消すことができる。",
        answer: true,
        explanation: "民法第95条により、法律行為の目的及び取引上の社会通念に照らして重要な部分に錯誤がある場合に取消しができます。"
    },
    {
        id: 54,
        category: "rights",
        categoryName: "権利関係",
        question: "強迫による意思表示の取消しは、善意の第三者にも対抗できる。",
        answer: true,
        explanation: "民法第96条により、強迫による意思表示の取消しは、詐欺と異なり善意の第三者にも対抗できます。"
    },
    {
        id: 55,
        category: "rights",
        categoryName: "権利関係",
        question: "代理人は、本人の許諾がなくても復代理人を選任することができる。",
        answer: false,
        explanation: "民法第104条により、任意代理人は本人の許諾を得た場合またはやむを得ない事由がある場合にのみ復代理人を選任できます。"
    },
    {
        id: 56,
        category: "rights",
        categoryName: "権利関係",
        question: "無権代理行為は、本人が追認すれば初めから有効な行為となる。",
        answer: true,
        explanation: "民法第116条により、無権代理行為の追認は遡及効があり、初めから有効な代理行為となります。"
    },
    {
        id: 57,
        category: "rights",
        categoryName: "権利関係",
        question: "条件が成就することによって不利益を受ける当事者が、故意に条件の成就を妨げた場合、条件は成就したものとみなされる。",
        answer: true,
        explanation: "民法第130条により、条件の成就によって不利益を受ける当事者が故意にその成就を妨げたときは、相手方は条件が成就したものとみなすことができます。"
    },
    {
        id: 58,
        category: "rights",
        categoryName: "権利関係",
        question: "期限の利益は、債務者のために定められたものと推定される。",
        answer: true,
        explanation: "民法第136条により、期限の利益は債務者のために定めたものと推定されます。"
    },
    {
        id: 59,
        category: "rights",
        categoryName: "権利関係",
        question: "取得時効の完成には、所有の意思をもって平穏かつ公然と占有することが必要である。",
        answer: true,
        explanation: "民法第162条により、取得時効の要件として所有の意思をもった平穏・公然の占有が必要です。"
    },
    {
        id: 60,
        category: "rights",
        categoryName: "権利関係",
        question: "占有の承継人は、前占有者の占有期間を合算して時効を主張できる。",
        answer: true,
        explanation: "民法第187条により、占有の承継人は前占有者の占有を併せて主張することができます。"
    },
    
    // 権利関係続き（61-125）
    {
        id: 61,
        category: "rights",
        categoryName: "権利関係",
        question: "物権は、法律に定めのあるもののほか、慣習によっても創設することができる。",
        answer: false,
        explanation: "民法第175条により、物権は法律の定めによるもののほか創設することができません（物権法定主義）。"
    },
    {
        id: 62,
        category: "rights",
        categoryName: "権利関係",
        question: "不動産の物権変動は、登記をしなければ第三者に対抗することができない。",
        answer: true,
        explanation: "民法第177条により、不動産に関する物権の得喪・変更は登記をしなければ第三者に対抗することができません。"
    },
    {
        id: 63,
        category: "rights",
        categoryName: "権利関係",
        question: "動産の即時取得は、無過失でなければ成立しない。",
        answer: true,
        explanation: "民法第192条により、取引行為によって平穏・公然・善意・無過失で動産の占有を始めた者は即時にその動産について行使する権利を取得します。"
    },
    {
        id: 64,
        category: "rights",
        categoryName: "権利関係",
        question: "共有物の管理に関する事項は、各共有者の持分の価格に従い、その過半数で決する。",
        answer: true,
        explanation: "民法第252条により、共有物の管理に関する事項は各共有者の持分の価格に従い、その過半数で決します。"
    },
    {
        id: 65,
        category: "rights",
        categoryName: "権利関係",
        question: "共有物の分割請求は、5年を超えない期間内であれば特約により禁止できる。",
        answer: true,
        explanation: "民法第256条により、共有物の分割請求は5年を超えない期間内で不分割の特約をすることができます。"
    },
    {
        id: 66,
        category: "rights",
        categoryName: "権利関係",
        question: "地上権は、土地の所有者の承諾なしに譲渡することができる。",
        answer: true,
        explanation: "地上権は物権であり、土地所有者の承諾なしに自由に譲渡・転貸することができます。"
    },
    {
        id: 67,
        category: "rights",
        categoryName: "権利関係",
        question: "永小作権の存続期間は、50年を超えることができない。",
        answer: true,
        explanation: "民法第278条により、永小作権の存続期間は20年以上50年以下とされています。"
    },
    {
        id: 68,
        category: "rights",
        categoryName: "権利関係",
        question: "地役権は、要役地から分離して譲渡することができる。",
        answer: false,
        explanation: "民法第281条により、地役権は要役地から分離して譲渡することができません。"
    },
    {
        id: 69,
        category: "rights",
        categoryName: "権利関係",
        question: "留置権者は、留置物から生じる果実を収取することができる。",
        answer: true,
        explanation: "民法第297条により、留置権者は留置物から生ずる果実を収取し、他の債権者に先立って債権の弁済に充当することができます。"
    },
    {
        id: 70,
        category: "rights",
        categoryName: "権利関係",
        question: "先取特権は、債務者の特定の動産について成立する。",
        answer: false,
        explanation: "先取特権には一般の先取特権と特別の先取特権があり、一般の先取特権は債務者の総財産について成立します。"
    },
    {
        id: 71,
        category: "rights",
        categoryName: "権利関係",
        question: "質権者は、質物を使用することができない。",
        answer: true,
        explanation: "民法第350条により、質権者は質権設定者の承諾を得なければ質物を使用・賃貸することができません。"
    },
    {
        id: 72,
        category: "rights",
        categoryName: "権利関係",
        question: "抵当権の効力は、抵当不動産の従物にも及ぶ。",
        answer: true,
        explanation: "民法第370条により、抵当権は抵当地の上に存する建物を除き、その目的である不動産に付加して一体となっている物に及びます。"
    },
    {
        id: 73,
        category: "rights",
        categoryName: "権利関係",
        question: "根抵当権の極度額は、いつでも変更することができる。",
        answer: false,
        explanation: "民法第398条の5により、根抵当権の極度額の変更は利害関係人の承諾を得なければすることができません。"
    },
    {
        id: 74,
        category: "rights",
        categoryName: "権利関係",
        question: "債権者は、債務者に対して履行を請求することによって時効を中断できる。",
        answer: false,
        explanation: "改正民法では時効の中断は「更新」となり、裁判上の請求等が必要です。単なる催告は時効の完成猶予事由となります。"
    },
    {
        id: 75,
        category: "rights",
        categoryName: "権利関係",
        question: "特定物売買において、目的物が契約締結時に既に滅失していた場合、契約は無効となる。",
        answer: false,
        explanation: "改正民法により、原始的不能の契約も有効とされ、債務不履行の問題として処理されます。"
    },
    
    // 法令上の制限（126-175）
    {
        id: 76,
        category: "law",
        categoryName: "法令上の制限",
        question: "都市計画区域外では、開発許可は一切不要である。",
        answer: false,
        explanation: "都市計画区域外でも1ヘクタール以上の開発行為には開発許可が必要です。"
    },
    {
        id: 77,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街化区域内の農地転用には、農地法第4条の許可は不要である。",
        answer: false,
        explanation: "市街化区域内の農地転用でも農業委員会への届出が必要です。許可は不要ですが、届出は必要です。"
    },
    {
        id: 78,
        category: "law",
        categoryName: "法令上の制限",
        question: "防火地域内では、3階建て以上の建築物は必ず耐火建築物としなければならない。",
        answer: true,
        explanation: "建築基準法により、防火地域内の3階建て以上または延べ面積100㎡超の建築物は耐火建築物とする必要があります。"
    },
    {
        id: 79,
        category: "law",
        categoryName: "法令上の制限",
        question: "容積率は、前面道路の幅員により制限を受けることがある。",
        answer: true,
        explanation: "建築基準法第52条により、前面道路の幅員が12m未満の場合、道路幅員による容積率の制限を受けます。"
    },
    {
        id: 80,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築基準法上の道路は、原則として幅員4m以上でなければならない。",
        answer: true,
        explanation: "建築基準法第42条により、道路は原則として幅員4m以上が必要です。"
    },
    {
        id: 81,
        category: "law",
        categoryName: "法令上の制限",
        question: "2項道路に接する敷地では、道路中心線から2m後退した線が道路境界線とみなされる。",
        answer: true,
        explanation: "建築基準法第42条第2項により、2項道路では道路中心線から2m後退した線が道路境界線とみなされます。"
    },
    {
        id: 82,
        category: "law",
        categoryName: "法令上の制限",
        question: "第一種住居地域では、床面積3,000㎡を超える店舗は建築できない。",
        answer: true,
        explanation: "用途地域の制限により、第一種住居地域では床面積3,000㎡を超える店舗等は建築できません。"
    },
    {
        id: 83,
        category: "law",
        categoryName: "法令上の制限",
        question: "工業専用地域では、住宅を建築することができない。",
        answer: true,
        explanation: "工業専用地域は工業の利便を増進するため定める地域で、住宅の建築は禁止されています。"
    },
    {
        id: 84,
        category: "law",
        categoryName: "法令上の制限",
        question: "都市計画事業の認可の告示があった後は、事業地内での建築には都道府県知事の許可が必要である。",
        answer: true,
        explanation: "都市計画法第65条により、都市計画事業の認可等の告示後は、事業地内での建築等に許可が必要です。"
    },
    {
        id: 85,
        category: "law",
        categoryName: "法令上の制限",
        question: "生産緑地地区内では、農業以外の行為は一切禁止されている。",
        answer: false,
        explanation: "生産緑地地区内でも、市町村長の許可を受ければ一定の行為は可能です。"
    },
    
    // 税・その他（176-200）
    {
        id: 86,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産取得税の標準税率は4％である。",
        answer: false,
        explanation: "不動産取得税の標準税率は4％ですが、土地・住宅については当分の間3％に軽減されています。"
    },
    {
        id: 87,
        category: "tax",
        categoryName: "税・その他",
        question: "固定資産税の課税標準は、固定資産税評価額である。",
        answer: true,
        explanation: "固定資産税の課税標準は原則として固定資産税評価額です。ただし、住宅用地には特例があります。"
    },
    {
        id: 88,
        category: "tax",
        categoryName: "税・その他",
        question: "都市計画税は、市街化調整区域内の土地には課税されない。",
        answer: true,
        explanation: "都市計画税は原則として市街化区域内の土地・家屋に課税され、市街化調整区域には課税されません。"
    },
    {
        id: 89,
        category: "tax",
        categoryName: "税・その他",
        question: "長期譲渡所得の税率は、短期譲渡所得の税率より低い。",
        answer: true,
        explanation: "長期譲渡所得（所有期間5年超）の税率は20％、短期譲渡所得は39％で、長期の方が優遇されています。"
    },
    {
        id: 90,
        category: "tax",
        categoryName: "税・その他",
        question: "事業用資産の買換え特例は、個人にのみ適用される。",
        answer: false,
        explanation: "事業用資産の買換え特例は、個人だけでなく法人にも適用されます。"
    },
    
    // 宅建業法（201-250）
    {
        id: 91,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業の免許を受けずに、自己所有の不動産を反復継続して売却することは違法である。",
        answer: false,
        explanation: "自己所有物件の売却は宅建業に該当しないため、免許は不要です。"
    },
    {
        id: 92,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、事務所以外の場所に案内所を設置する場合、その場所に宅建士を置かなければならない。",
        answer: true,
        explanation: "契約締結等を行う案内所には、専任の宅建士の設置が必要です。"
    },
    {
        id: 93,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士証の更新を受けるためには、法定講習を受講しなければならない。",
        answer: true,
        explanation: "宅建士証の更新（5年ごと）には、更新前6か月以内に法定講習の受講が必要です。"
    },
    {
        id: 94,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、媒介契約書に報酬額を記載しなければならない。",
        answer: true,
        explanation: "宅建業法第34条の2により、媒介契約書には報酬に関する事項の記載が必要です。"
    },
    {
        id: 95,
        category: "business",
        categoryName: "宅建業法",
        question: "一般媒介契約の有効期間に制限はない。",
        answer: true,
        explanation: "一般媒介契約には法律上の有効期間の制限はありません。専任媒介契約は3か月以内です。"
    },
    {
        id: 96,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、重要事項説明を契約締結の1週間前までに行わなければならない。",
        answer: false,
        explanation: "重要事項説明は契約締結前に行う必要がありますが、具体的な期限の定めはありません。"
    },
    {
        id: 97,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者が売主の場合、瑕疵担保責任の期間を引渡しから1年とする特約は有効である。",
        answer: false,
        explanation: "宅建業者が売主の場合、瑕疵担保責任期間は引渡しから2年以上とする必要があります。"
    },
    {
        id: 98,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、買主から手付金を受領する際、必ず保全措置を講じなければならない。",
        answer: false,
        explanation: "保全措置は、完成物件で代金の10％超かつ1,000万円超、未完成物件で代金の5％超かつ1,000万円超の場合に必要です。"
    },
    {
        id: 99,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、自ら売主となる場合、買主に不利な特約をすべて無効とされる。",
        answer: false,
        explanation: "8種制限により一定の不利な特約は無効ですが、すべての不利な特約が無効になるわけではありません。"
    },
    {
        id: 100,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、守秘義務違反をした場合、刑事罰の対象となる。",
        answer: true,
        explanation: "宅建業法第75条により、秘密を守る義務違反には罰則（1年以下の懲役または50万円以下の罰金）があります。"
    },
    
    // さらに追加（101-250）
    {
        id: 101,
        category: "rights",
        categoryName: "権利関係",
        question: "売買契約において、売主は目的物の瑕疵について無過失責任を負う。",
        answer: false,
        explanation: "改正民法では瑕疵担保責任は契約不適合責任となり、債務不履行責任として過失責任主義が適用されます。"
    },
    {
        id: 102,
        category: "rights",
        categoryName: "権利関係",
        question: "賃貸借契約は、当事者の一方が死亡しても終了しない。",
        answer: true,
        explanation: "賃貸借契約は当事者の死亡によって終了せず、相続人に承継されます。"
    },
    {
        id: 103,
        category: "rights",
        categoryName: "権利関係",
        question: "建物賃貸借契約において、賃借人は賃貸人の承諾なく転貸することができない。",
        answer: true,
        explanation: "民法第612条により、賃借人は賃貸人の承諾を得なければ転貸することができません。"
    },
    {
        id: 104,
        category: "rights",
        categoryName: "権利関係",
        question: "借地権の存続期間は、最短で30年である。",
        answer: true,
        explanation: "借地借家法により、普通借地権の存続期間は30年以上とされています。"
    },
    {
        id: 105,
        category: "rights",
        categoryName: "権利関係",
        question: "定期建物賃貸借契約は、必ず公正証書で締結しなければならない。",
        answer: false,
        explanation: "定期建物賃貸借契約は書面による必要がありますが、公正証書である必要はありません。"
    },
    {
        id: 106,
        category: "rights",
        categoryName: "権利関係",
        question: "請負人は、仕事の目的物に瑕疵がある場合、注文者の指図によるものでも責任を負う。",
        answer: false,
        explanation: "民法第636条により、仕事の目的物の瑕疵が注文者の指図によって生じたときは、請負人は責任を負いません。"
    },
    {
        id: 107,
        category: "rights",
        categoryName: "権利関係",
        question: "委任契約は、原則として無償である。",
        answer: true,
        explanation: "民法第648条により、委任は原則として無償ですが、特約により有償とすることができます。"
    },
    {
        id: 108,
        category: "rights",
        categoryName: "権利関係",
        question: "不法行為による損害賠償請求権の時効期間は、損害及び加害者を知った時から3年である。",
        answer: true,
        explanation: "民法第724条により、不法行為による損害賠償請求権は損害及び加害者を知った時から3年で時効消滅します。"
    },
    {
        id: 109,
        category: "rights",
        categoryName: "権利関係",
        question: "使用者責任において、使用者は被用者の選任・監督に過失がなければ責任を免れる。",
        answer: true,
        explanation: "民法第715条により、使用者は選任及び監督について相当の注意をしたとき、または相当の注意をしても損害が生ずべきであったときは責任を免れます。"
    },
    {
        id: 110,
        category: "rights",
        categoryName: "権利関係",
        question: "相続人が相続放棄をした場合、その子は代襲相続することができる。",
        answer: false,
        explanation: "相続放棄をした場合、初めから相続人とならなかったものとみなされるため、代襲相続は発生しません。"
    },
    {
        id: 111,
        category: "rights",
        categoryName: "権利関係",
        question: "遺留分は、兄弟姉妹にも認められる。",
        answer: false,
        explanation: "民法第1042条により、遺留分は配偶者、子、直系尊属に認められ、兄弟姉妹には認められません。"
    },
    {
        id: 112,
        category: "rights",
        categoryName: "権利関係",
        question: "遺言は、15歳に達すれば単独で行うことができる。",
        answer: true,
        explanation: "民法第961条により、15歳に達した者は遺言をすることができます。"
    },
    {
        id: 113,
        category: "rights",
        categoryName: "権利関係",
        question: "自筆証書遺言は、全文を自書しなければならない。",
        answer: false,
        explanation: "改正により、自筆証書遺言の財産目録はパソコン等で作成可能となりました。"
    },
    {
        id: 114,
        category: "rights",
        categoryName: "権利関係",
        question: "配偶者居住権は、登記をしなくても第三者に対抗できる。",
        answer: false,
        explanation: "配偶者居住権は登記をしなければ第三者に対抗することができません。"
    },
    {
        id: 115,
        category: "rights",
        categoryName: "権利関係",
        question: "特別受益は、相続分の算定において考慮される。",
        answer: true,
        explanation: "民法第903条により、特別受益は相続分の算定において持戻し計算の対象となります。"
    },
    {
        id: 116,
        category: "law",
        categoryName: "法令上の制限",
        question: "国土利用計画法による事後届出は、契約締結後2週間以内に行う必要がある。",
        answer: true,
        explanation: "国土利用計画法により、一定面積以上の土地取引は契約締結後2週間以内に届出が必要です。"
    },
    {
        id: 117,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街地再開発事業の施行地区内では、建築行為等に知事の許可が必要である。",
        answer: true,
        explanation: "都市再開発法により、市街地再開発事業の施行地区内での建築等には許可が必要です。"
    },
    {
        id: 118,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築物の敷地は、原則として建築基準法上の道路に2m以上接しなければならない。",
        answer: true,
        explanation: "建築基準法第43条により、建築物の敷地は道路に2m以上接する必要があります（接道義務）。"
    },
    {
        id: 119,
        category: "law",
        categoryName: "法令上の制限",
        question: "日影規制は、商業地域にも適用される。",
        answer: false,
        explanation: "日影規制は商業地域、工業地域、工業専用地域には適用されません。"
    },
    {
        id: 120,
        category: "law",
        categoryName: "法令上の制限",
        question: "準防火地域内の木造建築物は、すべて準耐火建築物としなければならない。",
        answer: false,
        explanation: "準防火地域内でも、延べ面積や階数により規制が異なり、すべてが準耐火建築物である必要はありません。"
    },
    {
        id: 121,
        category: "tax",
        categoryName: "税・その他",
        question: "小規模住宅用地の固定資産税の課税標準は、評価額の6分の1になる。",
        answer: true,
        explanation: "住宅用地の特例により、200㎡以下の小規模住宅用地は固定資産税評価額の6分の1が課税標準となります。"
    },
    {
        id: 122,
        category: "tax",
        categoryName: "税・その他",
        question: "贈与税の配偶者控除は、婚姻期間が20年以上の夫婦間で適用される。",
        answer: true,
        explanation: "贈与税の配偶者控除（2,000万円）は、婚姻期間20年以上の夫婦間の居住用不動産の贈与に適用されます。"
    },
    {
        id: 123,
        category: "tax",
        categoryName: "税・その他",
        question: "相続時精算課税制度を選択すると、暦年課税に戻すことはできない。",
        answer: true,
        explanation: "相続時精算課税制度を一度選択すると、その贈与者からの贈与について暦年課税に戻すことはできません。"
    },
    {
        id: 124,
        category: "tax",
        categoryName: "税・その他",
        question: "所得税の住宅ローン控除の適用を受けるには、所得が3,000万円以下である必要がある。",
        answer: true,
        explanation: "住宅ローン控除の適用要件として、その年の合計所得金額が3,000万円以下である必要があります。"
    },
    {
        id: 125,
        category: "tax",
        categoryName: "税・その他",
        question: "路線価は、相続税評価額の基準となる。",
        answer: true,
        explanation: "路線価は相続税・贈与税の土地評価の基準となり、公示価格の約80％の水準です。"
    },
    
    // 宅建業法続き（126-250）
    {
        id: 126,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、専任媒介契約を締結した場合、7日以内に指定流通機構に登録しなければならない。",
        answer: true,
        explanation: "専任媒介契約の場合、契約締結日から7日以内（専属専任は5日以内）に指定流通機構への登録が必要です。"
    },
    {
        id: 127,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、賃貸の媒介において、貸主と借主の双方から合計で賃料の1か月分を超える報酬を受領できない。",
        answer: true,
        explanation: "居住用建物の賃貸の媒介では、貸主・借主双方から受け取る報酬の合計は賃料の1か月分以内です。"
    },
    {
        id: 128,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、広告を行う場合、取引態様を明示しなければならない。",
        answer: true,
        explanation: "宅建業法第34条により、広告をするときは取引態様（売主・代理・媒介）の明示が必要です。"
    },
    {
        id: 129,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業保証協会の社員は、営業保証金を供託する必要がない。",
        answer: true,
        explanation: "宅建業保証協会の社員は、弁済業務保証金分担金を納付することで営業保証金の供託が免除されます。"
    },
    {
        id: 130,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、契約が成立しなかった場合でも、依頼者から実費を請求できる。",
        answer: false,
        explanation: "宅建業法により、媒介契約において契約が成立しなかった場合、原則として報酬や実費を請求できません。"
    },
    {
        id: 131,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、事務所の移転をした場合、30日以内に免許権者に届け出なければならない。",
        answer: true,
        explanation: "事務所の所在地変更は、30日以内に免許権者への届出が必要です。"
    },
    {
        id: 132,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、帳簿を各事業年度末に閉鎖し、5年間保存しなければならない。",
        answer: false,
        explanation: "宅建業法により、帳簿は各事業年度末に閉鎖し、10年間保存する必要があります。"
    },
    {
        id: 133,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、未完成物件の売買において、手付金等の額が代金の5％以下であれば保全措置は不要である。",
        answer: false,
        explanation: "未完成物件では、手付金等が代金の5％超または1,000万円超の場合に保全措置が必要です。5％以下でも1,000万円を超えれば必要です。"
    },
    {
        id: 134,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、割賦販売契約において、賦払金の支払いがない場合、30日以上の期間を定めて催告しなければ契約解除できない。",
        answer: true,
        explanation: "宅建業法により、割賦販売では30日以上の相当期間を定めて書面で催告後でなければ契約解除できません。"
    },
    {
        id: 135,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、クーリング・オフによる契約解除があった場合、速やかに受領済みの金銭を返還しなければならない。",
        answer: true,
        explanation: "クーリング・オフによる解除の場合、宅建業者は速やかに受領済みの手付金等を返還する義務があります。"
    },
    {
        id: 136,
        category: "rights",
        categoryName: "権利関係",
        question: "連帯保証人は、催告の抗弁権を有しない。",
        answer: true,
        explanation: "民法により、連帯保証人は催告の抗弁権・検索の抗弁権を有しません。"
    },
    {
        id: 137,
        category: "rights",
        categoryName: "権利関係",
        question: "根保証契約は、極度額を定めなければ効力を生じない。",
        answer: true,
        explanation: "改正民法により、個人根保証契約は極度額を定めなければ効力を生じません。"
    },
    {
        id: 138,
        category: "rights",
        categoryName: "権利関係",
        question: "事務管理において、管理者は本人の意思に反することが明らかでも管理を継続できる。",
        answer: false,
        explanation: "民法第700条により、本人の意思に反することが明らかになったときは、原則として事務管理を継続できません。"
    },
    {
        id: 139,
        category: "rights",
        categoryName: "権利関係",
        question: "不当利得の返還義務者が善意の場合、現存利益の限度で返還すれば足りる。",
        answer: true,
        explanation: "民法第703条により、善意の受益者は現に利益が存する限度で返還義務を負います。"
    },
    {
        id: 140,
        category: "rights",
        categoryName: "権利関係",
        question: "組合契約において、組合員は組合財産の持分を処分することができる。",
        answer: false,
        explanation: "民法第676条により、組合員は組合財産についてその持分を処分することができません。"
    },
    {
        id: 141,
        category: "law",
        categoryName: "法令上の制限",
        question: "開発許可を受けた土地では、工事完了公告前でも建築確認を受けることができる。",
        answer: true,
        explanation: "建築確認の申請は可能ですが、工事完了公告前は原則として建築行為はできません。"
    },
    {
        id: 142,
        category: "law",
        categoryName: "法令上の制限",
        question: "風致地区内での建築には、都道府県知事の許可が必要である。",
        answer: false,
        explanation: "風致地区内での建築等は、条例により市町村長等の許可が必要となる場合があります。"
    },
    {
        id: 143,
        category: "law",
        categoryName: "法令上の制限",
        question: "伝統的建造物群保存地区内では、現状変更行為に市町村教育委員会の許可が必要である。",
        answer: true,
        explanation: "文化財保護法により、伝統的建造物群保存地区内での現状変更には許可が必要です。"
    },
    {
        id: 144,
        category: "law",
        categoryName: "法令上の制限",
        question: "自然公園法の特別地域内では、建築物の新築に環境大臣の許可が必要である。",
        answer: true,
        explanation: "国立公園の特別地域内での建築物の新築等には環境大臣（国定公園は都道府県知事）の許可が必要です。"
    },
    {
        id: 145,
        category: "law",
        categoryName: "法令上の制限",
        question: "急傾斜地崩壊危険区域内では、切土・盛土に都道府県知事の許可が必要である。",
        answer: true,
        explanation: "急傾斜地法により、急傾斜地崩壊危険区域内での一定の行為には都道府県知事の許可が必要です。"
    },
    {
        id: 146,
        category: "tax",
        categoryName: "税・その他",
        question: "新築住宅の固定資産税は、3年間2分の1に減額される。",
        answer: true,
        explanation: "一定の要件を満たす新築住宅は、固定資産税が3年間（マンションは5年間）2分の1に減額されます。"
    },
    {
        id: 147,
        category: "tax",
        categoryName: "税・その他",
        question: "認定長期優良住宅の登録免許税は、一般住宅より軽減される。",
        answer: true,
        explanation: "認定長期優良住宅は、所有権保存登記や移転登記の登録免許税が軽減されます。"
    },
    {
        id: 148,
        category: "tax",
        categoryName: "税・その他",
        question: "特定の事業用資産の買換え特例では、譲渡益の80％まで課税を繰り延べできる。",
        answer: true,
        explanation: "特定事業用資産の買換え特例により、譲渡益の80％まで課税の繰り延べが可能です。"
    },
    {
        id: 149,
        category: "tax",
        categoryName: "税・その他",
        question: "空き家に係る譲渡所得の特別控除は、相続開始から3年後の年末までに譲渡する必要がある。",
        answer: true,
        explanation: "空き家の3,000万円特別控除は、相続開始から3年を経過する日の属する年の12月31日までの譲渡が要件です。"
    },
    {
        id: 150,
        category: "tax",
        categoryName: "税・その他",
        question: "収益価格の算定において、直接還元法とDCF法がある。",
        answer: true,
        explanation: "不動産鑑定評価において、収益価格は直接還元法またはDCF法により算定されます。"
    },
    {
        id: 151,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者でない者が、反復継続して宅地の売買の媒介を行うことは違法である。",
        answer: true,
        explanation: "宅建業法により、宅建業（宅地建物の売買・交換・媒介等を業として行うこと）は免許が必要です。"
    },
    {
        id: 152,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、免許の更新を忘れた場合でも、6か月間は営業を継続できる。",
        answer: false,
        explanation: "免許の有効期間満了により免許は失効し、営業を継続することはできません。"
    },
    {
        id: 153,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士は、重要事項説明の際、必ず宅建士証を提示しなければならない。",
        answer: true,
        explanation: "宅建業法第35条により、重要事項説明の際は宅建士証の提示が義務付けられています。"
    },
    {
        id: 154,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、売買契約が成立した場合、必ず37条書面を交付しなければならない。",
        answer: true,
        explanation: "宅建業法第37条により、契約成立後遅滞なく37条書面の交付が必要です。"
    },
    {
        id: 155,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、自己の所有に属しない物件について、売買契約を締結することができる。",
        answer: false,
        explanation: "宅建業法第33条の2により、自己の所有に属しない物件の売買契約締結は原則として禁止されています。"
    },
    {
        id: 156,
        category: "rights",
        categoryName: "権利関係",
        question: "弁済の提供は、債務の本旨に従って現実にしなければならない。",
        answer: true,
        explanation: "民法第493条により、弁済の提供は債務の本旨に従って現実にしなければなりません。"
    },
    {
        id: 157,
        category: "rights",
        categoryName: "権利関係",
        question: "第三者弁済は、債務者の意思に反してもすることができる。",
        answer: false,
        explanation: "民法第474条により、債務者の意思に反する第三者弁済は原則として認められません。"
    },
    {
        id: 158,
        category: "rights",
        categoryName: "権利関係",
        question: "相殺は、双方の債務が同種の目的を有する場合にのみ可能である。",
        answer: true,
        explanation: "民法第505条により、相殺は双方が同種の目的を有する債務を負担する場合に可能です。"
    },
    {
        id: 159,
        category: "rights",
        categoryName: "権利関係",
        question: "更改により、旧債務に付随していた担保は新債務に移転する。",
        answer: false,
        explanation: "更改により旧債務は消滅するため、担保も原則として消滅し、新債務には移転しません。"
    },
    {
        id: 160,
        category: "rights",
        categoryName: "権利関係",
        question: "免除は、債権者の一方的意思表示により効力を生じる。",
        answer: true,
        explanation: "民法第519条により、債権者が債務者に対して債務を免除する意思を表示したときは、その債権は消滅します。"
    },
    {
        id: 161,
        category: "law",
        categoryName: "法令上の制限",
        question: "地区計画区域内では、建築等の行為に市町村長への届出が必要である。",
        answer: true,
        explanation: "都市計画法により、地区計画区域内での建築等の行為は市町村長への届出が必要です。"
    },
    {
        id: 162,
        category: "law",
        categoryName: "法令上の制限",
        question: "高度地区は、建築物の最高限度または最低限度を定める地区である。",
        answer: true,
        explanation: "都市計画法により、高度地区は建築物の高さの最高限度または最低限度を定める地区です。"
    },
    {
        id: 163,
        category: "law",
        categoryName: "法令上の制限",
        question: "高度利用地区内では、建築物の容積率の最低限度が定められる。",
        answer: true,
        explanation: "高度利用地区では、容積率の最高限度及び最低限度、建ぺい率の最高限度等が定められます。"
    },
    {
        id: 164,
        category: "law",
        categoryName: "法令上の制限",
        question: "特定街区内では、一般の建築基準法の制限がすべて適用される。",
        answer: false,
        explanation: "特定街区内では、容積率、高さ制限等について特別の定めがあり、一般の制限の一部が適用除外となります。"
    },
    {
        id: 165,
        category: "law",
        categoryName: "法令上の制限",
        question: "防災街区整備地区計画は、密集市街地の防災機能の確保を目的とする。",
        answer: true,
        explanation: "防災街区整備地区計画は、密集市街地における防災街区の整備の促進を図ることを目的とします。"
    },
    {
        id: 166,
        category: "tax",
        categoryName: "税・その他",
        question: "土地の売買による所有権移転登記の登録免許税は、固定資産税評価額の1.5％である。",
        answer: false,
        explanation: "土地の売買による所有権移転登記の登録免許税は、原則として固定資産税評価額の2％です（令和5年3月31日まで1.5％の軽減税率）。"
    },
    {
        id: 167,
        category: "tax",
        categoryName: "税・その他",
        question: "抵当権設定登記の登録免許税は、債権額の0.4％である。",
        answer: true,
        explanation: "抵当権設定登記の登録免許税は、債権額（極度額）の0.4％です。"
    },
    {
        id: 168,
        category: "tax",
        categoryName: "税・その他",
        question: "建物の新築による所有権保存登記の登録免許税は、固定資産税評価額の0.4％である。",
        answer: true,
        explanation: "所有権保存登記の登録免許税は、原則として固定資産税評価額の0.4％です。"
    },
    {
        id: 169,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産取得税は、登記の有無にかかわらず課税される。",
        answer: true,
        explanation: "不動産取得税は、不動産の取得の事実に基づいて課税され、登記の有無は関係ありません。"
    },
    {
        id: 170,
        category: "tax",
        categoryName: "税・その他",
        question: "都市計画税の税率は、0.3％を超えることができない。",
        answer: true,
        explanation: "都市計画税の制限税率は0.3％で、これを超えることはできません。"
    },
    {
        id: 171,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、誇大広告をした場合、業務停止処分を受けることがある。",
        answer: true,
        explanation: "宅建業法第32条違反（誇大広告の禁止）により、業務停止等の監督処分の対象となります。"
    },
    {
        id: 172,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、取引の相手方から宅建士証の提示を求められたときは、必ず提示しなければならない。",
        answer: true,
        explanation: "宅建業法により、取引の関係者から請求があったときは宅建士証を提示する義務があります。"
    },
    {
        id: 173,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、従業者証明書を携帯していない従業者を業務に従事させることができる。",
        answer: false,
        explanation: "宅建業法第48条により、従業者は従業者証明書を携帯しなければ業務に従事できません。"
    },
    {
        id: 174,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、報酬額表を事務所の見やすい場所に掲示しなければならない。",
        answer: true,
        explanation: "宅建業法第46条により、報酬額表を事務所ごとに掲示する義務があります。"
    },
    {
        id: 175,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、37条書面に宅建士の記名押印がなくても交付できる。",
        answer: false,
        explanation: "37条書面には宅建士の記名押印が必要です（電子書面の場合は電子署名）。"
    },
    {
        id: 176,
        category: "rights",
        categoryName: "権利関係",
        question: "養子縁組は、家庭裁判所の許可がなければ成立しない。",
        answer: false,
        explanation: "普通養子縁組は当事者の合意と届出により成立し、家庭裁判所の許可は不要です（特別養子縁組は家裁の審判が必要）。"
    },
    {
        id: 177,
        category: "rights",
        categoryName: "権利関係",
        question: "親権者は、子の財産を自由に処分することができる。",
        answer: false,
        explanation: "親権者は子の財産を管理する権限を有しますが、子の利益のために行使する必要があり、自由な処分はできません。"
    },
    {
        id: 178,
        category: "rights",
        categoryName: "権利関係",
        question: "失踪宣告を受けた者は、死亡したものとみなされる。",
        answer: true,
        explanation: "民法第31条により、失踪宣告を受けた者は死亡したものとみなされます。"
    },
    {
        id: 179,
        category: "rights",
        categoryName: "権利関係",
        question: "法人は、定款で定めた目的の範囲内でのみ権利能力を有する。",
        answer: false,
        explanation: "判例により、法人の権利能力は定款の目的により制限されないとされています。"
    },
    {
        id: 180,
        category: "rights",
        categoryName: "権利関係",
        question: "一般社団法人は、営利事業を行うことができない。",
        answer: false,
        explanation: "一般社団法人も事業を行うことができ、営利事業も可能ですが、利益を社員に分配することはできません。"
    },
    {
        id: 181,
        category: "law",
        categoryName: "法令上の制限",
        question: "道路位置指定を受けた道路は、建築基準法上の道路となる。",
        answer: true,
        explanation: "建築基準法第42条第1項第5号により、位置指定道路は建築基準法上の道路となります。"
    },
    {
        id: 182,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築物の床面積は、壁その他の区画の中心線で囲まれた部分の水平投影面積による。",
        answer: true,
        explanation: "建築基準法により、床面積は壁その他の区画の中心線で囲まれた部分の水平投影面積で算定します。"
    },
    {
        id: 183,
        category: "law",
        categoryName: "法令上の制限",
        question: "延べ面積には、自動車車庫の床面積は算入されない。",
        answer: false,
        explanation: "自動車車庫も延べ面積に算入されますが、一定の条件下で容積率算定時には一部不算入となります。"
    },
    {
        id: 184,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築確認を受けた建築物でも、完了検査を受けなければ使用できない。",
        answer: false,
        explanation: "原則として完了検査済証の交付を受けるまで使用できませんが、仮使用承認を受ければ使用可能です。"
    },
    {
        id: 185,
        category: "law",
        categoryName: "法令上の制限",
        question: "違反建築物に対して、特定行政庁は除却命令を出すことができる。",
        answer: true,
        explanation: "建築基準法第9条により、特定行政庁は違反建築物に対して除却等の命令を出すことができます。"
    },
    {
        id: 186,
        category: "tax",
        categoryName: "税・その他",
        question: "固定資産税の納税通知書は、毎年4月に送付される。",
        answer: true,
        explanation: "固定資産税の納税通知書は、通常4月から5月頃に送付されます。"
    },
    {
        id: 187,
        category: "tax",
        categoryName: "税・その他",
        question: "償却資産も固定資産税の課税対象となる。",
        answer: true,
        explanation: "土地・家屋のほか、事業用の償却資産も固定資産税の課税対象です。"
    },
    {
        id: 188,
        category: "tax",
        categoryName: "税・その他",
        question: "固定資産税評価額は、3年ごとに評価替えが行われる。",
        answer: true,
        explanation: "固定資産税評価額は、原則として3年ごとに評価替え（基準年度）が行われます。"
    },
    {
        id: 189,
        category: "tax",
        categoryName: "税・その他",
        question: "相続税の申告期限は、相続開始を知った日から10か月以内である。",
        answer: true,
        explanation: "相続税の申告期限は、相続の開始があったことを知った日の翌日から10か月以内です。"
    },
    {
        id: 190,
        category: "tax",
        categoryName: "税・その他",
        question: "配偶者の税額軽減により、配偶者は相続財産の2分の1まで相続税がかからない。",
        answer: false,
        explanation: "配偶者の税額軽減は、法定相続分または1億6,000万円のいずれか多い金額まで相続税がかかりません。"
    },
    {
        id: 191,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、守秘義務に違反した場合、罰金刑のみが科される。",
        answer: false,
        explanation: "守秘義務違反には1年以下の懲役または50万円以下の罰金が科され、懲役刑もあり得ます。"
    },
    {
        id: 192,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、不当な履行遅延をした場合、監督処分の対象となる。",
        answer: true,
        explanation: "宅建業法第44条（不当な履行遅延の禁止）違反により、監督処分の対象となります。"
    },
    {
        id: 193,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、手付金について解約手付とする旨の定めをすることができない。",
        answer: false,
        explanation: "手付金は解約手付と推定され、特約で解約手付とすることも可能です。"
    },
    {
        id: 194,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者が自ら売主となる場合、損害賠償額の予定を代金の30％とすることができる。",
        answer: false,
        explanation: "宅建業法第38条により、損害賠償額の予定は代金の20％を超えることができません。"
    },
    {
        id: 195,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、申込証拠金を受領した場合、契約が成立しなければ返還する必要がない。",
        answer: false,
        explanation: "申込証拠金は、契約が成立しなかった場合には返還しなければなりません。"
    },
    {
        id: 196,
        category: "rights",
        categoryName: "権利関係",
        question: "民法上の組合の債務は、組合員全員が連帯して負担する。",
        answer: false,
        explanation: "組合の債務は、原則として組合財産をもって弁済し、不足があれば各組合員が損失分担の割合に応じて負担します。"
    },
    {
        id: 197,
        category: "rights",
        categoryName: "権利関係",
        question: "終身定期金契約は、死亡によって終了する。",
        answer: true,
        explanation: "終身定期金契約は、終身定期金債権者の死亡によって終了します。"
    },
    {
        id: 198,
        category: "rights",
        categoryName: "権利関係",
        question: "和解契約により、当事者は和解前の権利関係について争うことができなくなる。",
        answer: true,
        explanation: "民法第696条により、和解により当事者間に存することと定められた権利関係について、後日争うことはできません。"
    },
    {
        id: 199,
        category: "rights",
        categoryName: "権利関係",
        question: "準委任契約も、委任契約と同様の規定が適用される。",
        answer: true,
        explanation: "民法第656条により、準委任には委任の規定が準用されます。"
    },
    {
        id: 200,
        category: "rights",
        categoryName: "権利関係",
        question: "寄託契約は、原則として有償である。",
        answer: false,
        explanation: "寄託契約は原則として無償ですが、特約により有償とすることができます。"
    },
    {
        id: 201,
        category: "law",
        categoryName: "法令上の制限",
        question: "都市再生特別地区内では、容積率の最高限度を定めることができる。",
        answer: true,
        explanation: "都市再生特別地区では、建築物の容積率の最高限度及び最低限度等を定めます。"
    },
    {
        id: 202,
        category: "law",
        categoryName: "法令上の制限",
        question: "居住調整地域は、市街化調整区域内に定められる。",
        answer: false,
        explanation: "居住調整地域は、市街化区域と市街化調整区域の区分のない都市計画区域に定められます。"
    },
    {
        id: 203,
        category: "law",
        categoryName: "法令上の制限",
        question: "田園住居地域では、農業用施設の建築が可能である。",
        answer: true,
        explanation: "田園住居地域は、農業と調和した低層住宅の環境を保護する地域で、農業用施設も建築可能です。"
    },
    {
        id: 204,
        category: "law",
        categoryName: "法令上の制限",
        question: "準住居地域は、道路の沿道としての地域特性にふさわしい業務の利便を図る地域である。",
        answer: true,
        explanation: "準住居地域は、道路の沿道としての地域特性にふさわしい業務の利便の増進を図りつつ、住居の環境を保護する地域です。"
    },
    {
        id: 205,
        category: "law",
        categoryName: "法令上の制限",
        question: "近隣商業地域では、キャバレーを建築することができる。",
        answer: false,
        explanation: "キャバレーは商業地域でのみ建築可能で、近隣商業地域では建築できません。"
    },
    {
        id: 206,
        category: "tax",
        categoryName: "税・その他",
        question: "消費税の納税義務者は、前々年の課税売上高で判定される。",
        answer: true,
        explanation: "消費税の納税義務は、原則として基準期間（前々年）の課税売上高が1,000万円を超えるかで判定されます。"
    },
    {
        id: 207,
        category: "tax",
        categoryName: "税・その他",
        question: "土地の譲渡には消費税が課税される。",
        answer: false,
        explanation: "土地の譲渡は消費税の非課税取引です。建物の譲渡には消費税が課税されます。"
    },
    {
        id: 208,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅の貸付けは、原則として消費税が非課税である。",
        answer: true,
        explanation: "住宅の貸付け（居住用）は原則として消費税が非課税ですが、1か月未満の貸付けは課税されます。"
    },
    {
        id: 209,
        category: "tax",
        categoryName: "税・その他",
        question: "印紙税の課税文書に印紙を貼らなかった場合、過怠税が課される。",
        answer: true,
        explanation: "印紙を貼らなかった場合、本来の印紙税額の3倍（自主的に申し出た場合は1.1倍）の過怠税が課されます。"
    },
    {
        id: 210,
        category: "tax",
        categoryName: "税・その他",
        question: "電子契約には印紙税が課税されない。",
        answer: true,
        explanation: "電子契約は印紙税法上の課税文書に該当しないため、印紙税は課税されません。"
    },
    {
        id: 211,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、契約締結の勧誘において、相手方を威迫してはならない。",
        answer: true,
        explanation: "宅建業法第47条の2により、契約締結の勧誘において威迫する行為は禁止されています。"
    },
    {
        id: 212,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、断定的判断を提供して勧誘することができる。",
        answer: false,
        explanation: "宅建業法により、断定的判断の提供による勧誘は禁止されています。"
    },
    {
        id: 213,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、将来の環境について誤解させるような断定的判断を提供してはならない。",
        answer: true,
        explanation: "将来の環境や交通等の利便について誤解させるような断定的判断の提供は禁止されています。"
    },
    {
        id: 214,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、正当な理由なく契約を拒むことはできない。",
        answer: false,
        explanation: "宅建業者も契約自由の原則により、正当な理由があれば契約を拒むことができます。"
    },
    {
        id: 215,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、重要事項説明書を交付すれば、説明を省略できる。",
        answer: false,
        explanation: "重要事項は、宅建士が書面を交付して説明する必要があり、交付だけでは不十分です。"
    },
    {
        id: 216,
        category: "rights",
        categoryName: "権利関係",
        question: "建物買取請求権は、借地権者から土地所有者に対して行使される。",
        answer: true,
        explanation: "借地借家法により、借地権消滅時に借地権者は土地所有者に対して建物買取請求権を行使できます。"
    },
    {
        id: 217,
        category: "rights",
        categoryName: "権利関係",
        question: "造作買取請求権は、賃貸人の同意なく設置した造作についても行使できる。",
        answer: false,
        explanation: "造作買取請求権は、賃貸人の同意を得て設置した造作について行使できます。"
    },
    {
        id: 218,
        category: "rights",
        categoryName: "権利関係",
        question: "借家契約において、賃料増減請求権を排除する特約は有効である。",
        answer: false,
        explanation: "賃料増減請求権を排除する特約は無効ですが、一定期間増額しない特約は有効です。"
    },
    {
        id: 219,
        category: "rights",
        categoryName: "権利関係",
        question: "サブリース契約でも、借地借家法の適用がある。",
        answer: true,
        explanation: "サブリース契約も建物賃貸借契約として借地借家法の適用を受けます。"
    },
    {
        id: 220,
        category: "rights",
        categoryName: "権利関係",
        question: "事業用定期借地権の存続期間は、10年以上50年未満である。",
        answer: false,
        explanation: "事業用定期借地権の存続期間は、10年以上30年未満または30年以上50年未満です。"
    },
    {
        id: 221,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築物エネルギー消費性能適合性判定は、一定規模以上の非住宅建築物に必要である。",
        answer: true,
        explanation: "建築物省エネ法により、一定規模以上の非住宅建築物は適合性判定が必要です。"
    },
    {
        id: 222,
        category: "law",
        categoryName: "法令上の制限",
        question: "長期優良住宅の認定を受けるには、都道府県知事の認定が必要である。",
        answer: false,
        explanation: "長期優良住宅の認定は、所管行政庁（市町村長または都道府県知事）が行います。"
    },
    {
        id: 223,
        category: "law",
        categoryName: "法令上の制限",
        question: "マンション建替えには、区分所有者の5分の4以上の賛成が必要である。",
        answer: true,
        explanation: "区分所有法により、マンション建替え決議には区分所有者の5分の4以上の賛成が必要です。"
    },
    {
        id: 224,
        category: "law",
        categoryName: "法令上の制限",
        question: "マンションの規約変更には、区分所有者の4分の3以上の賛成が必要である。",
        answer: true,
        explanation: "区分所有法により、規約の設定・変更・廃止は区分所有者の4分の3以上の賛成が必要です。"
    },
    {
        id: 225,
        category: "law",
        categoryName: "法令上の制限",
        question: "共用部分の重大変更には、区分所有者全員の同意が必要である。",
        answer: false,
        explanation: "共用部分の重大変更は、区分所有者の4分の3以上の賛成で決議できます。"
    },
    {
        id: 226,
        category: "tax",
        categoryName: "税・その他",
        question: "取引事例比較法は、主に土地の評価に用いられる。",
        answer: true,
        explanation: "不動産鑑定評価において、取引事例比較法は主に土地の評価に適用されます。"
    },
    {
        id: 227,
        category: "tax",
        categoryName: "税・その他",
        question: "収益還元法は、賃貸用不動産の評価に適している。",
        answer: true,
        explanation: "収益還元法は、賃料収入が得られる不動産の評価に適した手法です。"
    },
    {
        id: 228,
        category: "tax",
        categoryName: "税・その他",
        question: "原価法では、再調達原価から減価修正を行う。",
        answer: true,
        explanation: "原価法は、再調達原価を求め、減価修正を行って評価額を算定します。"
    },
    {
        id: 229,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産鑑定評価基準は、国土交通省が定めている。",
        answer: true,
        explanation: "不動産鑑定評価基準は、国土交通省が定めた統一的な評価基準です。"
    },
    {
        id: 230,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産鑑定士でなければ、不動産の鑑定評価を業として行うことはできない。",
        answer: true,
        explanation: "不動産の鑑定評価に関する法律により、鑑定評価を業として行えるのは不動産鑑定士のみです。"
    },
    {
        id: 231,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、供託所等に関する説明を重要事項説明で行う必要がある。",
        answer: true,
        explanation: "営業保証金を供託した供託所等に関する説明は、重要事項説明の内容に含まれます。"
    },
    {
        id: 232,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、建物状況調査の結果について説明する必要がある。",
        answer: true,
        explanation: "建物状況調査（インスペクション）を実施している場合、その結果の概要を重要事項として説明する必要があります。"
    },
    {
        id: 233,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、水害ハザードマップについて説明する必要がある。",
        answer: true,
        explanation: "令和2年8月より、水害ハザードマップにおける物件の所在地の説明が義務化されました。"
    },
    {
        id: 234,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、石綿使用調査の内容について説明する必要がある。",
        answer: true,
        explanation: "石綿使用調査の内容の記録がある場合は、その内容を重要事項として説明する必要があります。"
    },
    {
        id: 235,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、耐震診断の内容について説明する必要がある。",
        answer: true,
        explanation: "耐震診断を受けている場合、その内容を重要事項として説明する必要があります。"
    },
    {
        id: 236,
        category: "rights",
        categoryName: "権利関係",
        question: "区分所有建物の専有部分は、規約で共用部分とすることができる。",
        answer: true,
        explanation: "区分所有法により、専有部分を規約により共用部分とすることができます（規約共用部分）。"
    },
    {
        id: 237,
        category: "rights",
        categoryName: "権利関係",
        question: "マンションの管理組合は、法人格を有する。",
        answer: false,
        explanation: "管理組合は当然に法人格を有するわけではなく、法人化するには登記が必要です。"
    },
    {
        id: 238,
        category: "rights",
        categoryName: "権利関係",
        question: "敷地利用権は、専有部分と分離して処分することができない。",
        answer: true,
        explanation: "区分所有法により、敷地利用権は原則として専有部分と分離して処分できません。"
    },
    {
        id: 239,
        category: "rights",
        categoryName: "権利関係",
        question: "区分所有者は、共用部分の持分を放棄することができる。",
        answer: false,
        explanation: "区分所有法により、共用部分の持分は専有部分の処分に従い、単独で放棄することはできません。"
    },
    {
        id: 240,
        category: "rights",
        categoryName: "権利関係",
        question: "管理者は、区分所有者以外の者でもなることができる。",
        answer: true,
        explanation: "区分所有法により、管理者は区分所有者以外の第三者（管理会社等）でもなることができます。"
    },
    {
        id: 241,
        category: "law",
        categoryName: "法令上の制限",
        question: "バリアフリー法により、一定の建築物はバリアフリー化が義務付けられる。",
        answer: true,
        explanation: "高齢者、障害者等の移動等の円滑化の促進に関する法律により、特定建築物のバリアフリー化が義務付けられています。"
    },
    {
        id: 242,
        category: "law",
        categoryName: "法令上の制限",
        question: "耐震改修促進法により、一定の建築物は耐震診断が義務付けられる。",
        answer: true,
        explanation: "耐震改修促進法により、要緊急安全確認大規模建築物等は耐震診断が義務付けられています。"
    },
    {
        id: 243,
        category: "law",
        categoryName: "法令上の制限",
        question: "住宅品質確保法により、新築住宅の基本構造部分の瑕疵担保期間は10年である。",
        answer: true,
        explanation: "住宅品質確保法により、新築住宅の基本構造部分等の瑕疵担保責任期間は10年間義務付けられています。"
    },
    {
        id: 244,
        category: "law",
        categoryName: "法令上の制限",
        question: "住宅瑕疵担保履行法により、建設業者は資力確保措置が義務付けられる。",
        answer: true,
        explanation: "住宅瑕疵担保履行法により、建設業者・宅建業者は供託または保険により資力確保措置が必要です。"
    },
    {
        id: 245,
        category: "law",
        categoryName: "法令上の制限",
        question: "景観法により、景観重要建造物の現状変更には許可が必要である。",
        answer: true,
        explanation: "景観法により、景観重要建造物の現状変更には景観行政団体の長の許可が必要です。"
    },
    {
        id: 246,
        category: "tax",
        categoryName: "税・その他",
        question: "競売による不動産取得も、不動産取得税の課税対象となる。",
        answer: true,
        explanation: "競売による取得も不動産の取得に該当し、不動産取得税の課税対象となります。"
    },
    {
        id: 247,
        category: "tax",
        categoryName: "税・その他",
        question: "法人が所有する土地の譲渡益には、重課税が適用されることがある。",
        answer: true,
        explanation: "法人の土地譲渡益には、一定の場合に重課税（追加課税）が適用されることがあります。"
    },
    {
        id: 248,
        category: "tax",
        categoryName: "税・その他",
        question: "特定の居住用財産の買換え特例では、譲渡益の課税を繰り延べることができる。",
        answer: true,
        explanation: "特定の居住用財産の買換え特例により、一定要件を満たせば譲渡益の課税を繰り延べできます。"
    },
    {
        id: 249,
        category: "tax",
        categoryName: "税・その他",
        question: "被相続人の居住用財産を売却した場合、3,000万円特別控除が適用できることがある。",
        answer: true,
        explanation: "一定要件を満たす被相続人の居住用財産（空き家）を売却した場合、3,000万円特別控除が適用可能です。"
    },
    {
        id: 250,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅取得等資金の贈与税非課税制度は、父母からの贈与に限定される。",
        answer: false,
        explanation: "住宅取得等資金の贈与税非課税制度は、父母だけでなく祖父母等の直系尊属からの贈与も対象です。"
    },
    
    // ========== 追加問題（10問） ==========
    // 権利関係（3問）
    {
        id: 251,
        category: "rights",
        categoryName: "権利関係",
        question: "賃貸借契約において、賃借人が賃料を3ヶ月分滞納した場合、賃貸人は催告なく直ちに契約を解除できる。",
        answer: false,
        explanation: "賃料の滞納があっても、信頼関係が破壊されていない場合は直ちに解除はできません。通常は催告が必要で、信頼関係破壊の法理が適用されます。"
    },
    {
        id: 252,
        category: "rights",
        categoryName: "権利関係",
        question: "共有物の管理に関する事項は、各共有者の持分の価格に従い、その過半数で決定する。",
        answer: true,
        explanation: "民法第252条により、共有物の管理に関する事項は、各共有者の持分の価格に従い、その過半数で決定します。ただし、保存行為は各共有者が単独で行えます。"
    },
    {
        id: 253,
        category: "rights",
        categoryName: "権利関係",
        question: "抵当権設定後に建物に付加された物は、すべて抵当権の効力が及ぶ。",
        answer: false,
        explanation: "抵当権設定後の従物には原則として抵当権の効力が及びますが、第三者が設置した動産などには及びません。付加一体物の範囲には制限があります。"
    },
    
    // 法令上の制限（2問）
    {
        id: 254,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街化調整区域では、農林漁業用建築物の建築について都市計画法の開発許可は不要である。",
        answer: true,
        explanation: "都市計画法第29条により、市街化調整区域における農林漁業用建築物及び農林漁業従事者の住宅の建築については、開発許可が不要です。"
    },
    {
        id: 255,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築基準法上、容積率の算定において、自動車車庫の床面積は全て延べ面積に算入される。",
        answer: false,
        explanation: "建築基準法により、自動車車庫の床面積は、建築物の各階の床面積の合計の5分の1を限度として、延べ面積に算入しません。"
    },
    
    // 税・その他（2問）
    {
        id: 256,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産取得税は、相続により不動産を取得した場合にも課税される。",
        answer: false,
        explanation: "不動産取得税は、相続（包括遺贈及び被相続人から相続人への遺贈を含む）による取得については非課税です。"
    },
    {
        id: 257,
        category: "tax",
        categoryName: "税・その他",
        question: "固定資産税の標準税率は1.4％であり、市町村はこれを超える税率を定めることができない。",
        answer: false,
        explanation: "固定資産税の標準税率は1.4％ですが、市町村は必要に応じてこれと異なる税率を定めることができます（制限税率は2.1％）。"
    },
    
    // 宅建業法（3問）
    {
        id: 258,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、重要事項説明書を交付さえすれば、口頭での説明を省略できる。",
        answer: false,
        explanation: "宅建業法第35条により、宅建士は重要事項説明書を交付し、かつ口頭で説明しなければなりません。書面交付だけでは不十分です。"
    },
    {
        id: 259,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者が売主となる場合、買主が宅建業者であっても、手付金は代金の2割を超えてはならない。",
        answer: false,
        explanation: "手付金の額の制限（代金の2割以下）は、売主が宅建業者で買主が宅建業者でない場合に適用されます。両者が宅建業者の場合は制限はありません。"
    },
    {
        id: 260,
        category: "business",
        categoryName: "宅建業法",
        question: "媒介契約書には、建物状況調査を実施する者のあっせんに関する事項を記載しなければならない。",
        answer: true,
        explanation: "平成30年4月1日施行の改正により、媒介契約書には建物状況調査（インスペクション）を実施する者のあっせんに関する事項の記載が義務付けられました。"
    },
    
    // ========== 追加問題（40問）261-300 ==========
    // 権利関係（10問）
    {
        id: 261,
        category: "rights",
        categoryName: "権利関係",
        question: "債務不履行による損害賠償請求をするには、債務者の帰責事由が必要である。",
        answer: true,
        explanation: "民法第415条により、債務不履行による損害賠償請求には、債務者の帰責事由（故意・過失）が必要です。"
    },
    {
        id: 262,
        category: "rights",
        categoryName: "権利関係",
        question: "売買契約において、売主が種類物の所有権を有していなくても、契約は有効に成立する。",
        answer: true,
        explanation: "他人物売買も有効です。売主は買主に対して、その物の所有権を取得して移転する義務を負います。"
    },
    {
        id: 263,
        category: "rights",
        categoryName: "権利関係",
        question: "借地借家法上、建物の賃貸借の存続期間は最短1年と定められている。",
        answer: false,
        explanation: "借地借家法では建物賃貸借の最短期間の定めはありません。1年未満の期間を定めた場合は期間の定めのない賃貸借となります。"
    },
    {
        id: 264,
        category: "rights",
        categoryName: "権利関係",
        question: "遺留分侵害額請求権は、相続開始から10年を経過すると時効により消滅する。",
        answer: true,
        explanation: "遺留分侵害額請求権は、相続開始及び遺留分侵害を知った時から1年、相続開始から10年で時効消滅します。"
    },
    {
        id: 265,
        category: "rights",
        categoryName: "権利関係",
        question: "区分所有建物の共用部分は、規約により特定の区分所有者の所有とすることができる。",
        answer: true,
        explanation: "区分所有法により、規約により共用部分を特定の区分所有者の所有（規約共用部分）とすることができます。"
    },
    {
        id: 266,
        category: "rights",
        categoryName: "権利関係",
        question: "不法行為による損害賠償請求権は、損害及び加害者を知った時から5年で時効消滅する。",
        answer: false,
        explanation: "不法行為による損害賠償請求権は、損害及び加害者を知った時から3年（人の生命身体の侵害は5年）で時効消滅します。"
    },
    {
        id: 267,
        category: "rights",
        categoryName: "権利関係",
        question: "定期建物賃貸借契約は、公正証書によらなければ締結できない。",
        answer: false,
        explanation: "定期建物賃貸借契約は書面によることが必要ですが、公正証書である必要はありません。"
    },
    {
        id: 268,
        category: "rights",
        categoryName: "権利関係",
        question: "相続人が配偶者と子の場合、配偶者の法定相続分は2分の1である。",
        answer: true,
        explanation: "民法により、配偶者と子が相続人の場合、配偶者の相続分は2分の1、子の相続分は2分の1です。"
    },
    {
        id: 269,
        category: "rights",
        categoryName: "権利関係",
        question: "請負契約において、仕事の目的物に契約不適合があった場合、注文者は直ちに契約を解除できる。",
        answer: false,
        explanation: "請負の契約不適合の場合、まず修補請求等を行い、相当期間内に履行されない場合に解除できます（契約目的達成不可の場合を除く）。"
    },
    {
        id: 270,
        category: "rights",
        categoryName: "権利関係",
        question: "根抵当権の元本は、確定期日を定めなければ確定しない。",
        answer: false,
        explanation: "根抵当権の元本は、確定期日の他、確定請求、債務者の死亡等の確定事由により確定します。"
    },
    
    // 法令上の制限（10問）
    {
        id: 271,
        category: "law",
        categoryName: "法令上の制限",
        question: "準都市計画区域内において、3,000㎡以上の開発行為を行う場合は開発許可が必要である。",
        answer: true,
        explanation: "都市計画法により、準都市計画区域内では3,000㎡以上の開発行為に開発許可が必要です。"
    },
    {
        id: 272,
        category: "law",
        categoryName: "法令上の制限",
        question: "第一種低層住居専用地域内では、3階建ての住宅を建築することはできない。",
        answer: false,
        explanation: "第一種低層住居専用地域でも、高さ制限（10mまたは12m）の範囲内であれば3階建ても可能です。"
    },
    {
        id: 273,
        category: "law",
        categoryName: "法令上の制限",
        question: "農地を宅地に転用する場合、市街化区域内であれば農地法の許可は不要である。",
        answer: false,
        explanation: "市街化区域内の農地転用は、農業委員会への届出で足り、許可は不要ですが、届出は必要です。"
    },
    {
        id: 274,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築基準法上、延べ面積200㎡を超える建築物の建築には確認申請が必要である。",
        answer: false,
        explanation: "都市計画区域内等では規模に関わらず確認申請が必要です。区域外でも一定規模以上は必要です。"
    },
    {
        id: 275,
        category: "law",
        categoryName: "法令上の制限",
        question: "宅地造成工事規制区域内で、切土高さ1.5mの宅地造成を行う場合、許可が必要である。",
        answer: false,
        explanation: "宅地造成工事規制区域内での許可が必要なのは、切土で高さ2m超、盛土で高さ1m超等の場合です。"
    },
    {
        id: 276,
        category: "law",
        categoryName: "法令上の制限",
        question: "土地区画整理事業の施行地区内では、建築物の新築について都道府県知事の許可が必要である。",
        answer: true,
        explanation: "土地区画整理法第76条により、施行地区内での建築物の新築等には都道府県知事等の許可が必要です。"
    },
    {
        id: 277,
        category: "law",
        categoryName: "法令上の制限",
        question: "防火地域内では、延べ面積が100㎡以下の建築物でも耐火建築物としなければならない。",
        answer: false,
        explanation: "防火地域内でも、延べ面積100㎡以下で2階建て以下なら準耐火建築物でも可能です。"
    },
    {
        id: 278,
        category: "law",
        categoryName: "法令上の制限",
        question: "国土利用計画法の事後届出は、契約締結後2週間以内に行わなければならない。",
        answer: true,
        explanation: "国土利用計画法により、一定面積以上の土地取引は契約締結後2週間以内に届出が必要です。"
    },
    {
        id: 279,
        category: "law",
        categoryName: "法令上の制限",
        question: "生産緑地地区内では、農林漁業を営むために必要な施設の設置も制限される。",
        answer: false,
        explanation: "生産緑地地区内では、農林漁業を営むために必要な施設の設置は許可を受けて可能です。"
    },
    {
        id: 280,
        category: "law",
        categoryName: "法令上の制限",
        question: "景観地区内では、建築物の形態意匠について市町村長の認定を受ける必要がある。",
        answer: true,
        explanation: "景観法により、景観地区内の建築物の形態意匠は市町村長の認定が必要です。"
    },
    
    // 税・その他（10問）
    {
        id: 281,
        category: "tax",
        categoryName: "税・その他",
        question: "登録免許税の税率は、所有権保存登記の場合0.4％である。",
        answer: true,
        explanation: "所有権保存登記の登録免許税率は原則0.4％です（住宅用家屋は軽減措置あり）。"
    },
    {
        id: 282,
        category: "tax",
        categoryName: "税・その他",
        question: "印紙税は、契約金額が1万円未満の不動産売買契約書には課税されない。",
        answer: false,
        explanation: "不動産売買契約書は契約金額1万円未満でも印紙税が課税されます（200円）。"
    },
    {
        id: 283,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅ローン控除は、中古住宅の取得でも適用を受けることができる。",
        answer: true,
        explanation: "一定要件（築年数等）を満たす中古住宅でも住宅ローン控除の適用が可能です。"
    },
    {
        id: 284,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産鑑定評価において、原価法は主に土地の評価に用いられる。",
        answer: false,
        explanation: "原価法は主に建物等の評価に用いられ、土地は主に取引事例比較法が用いられます。"
    },
    {
        id: 285,
        category: "tax",
        categoryName: "税・その他",
        question: "都市計画税は、市街化調整区域内の土地・建物には課税されない。",
        answer: true,
        explanation: "都市計画税は原則として市街化区域内の土地・建物に課税され、市街化調整区域には課税されません。"
    },
    {
        id: 286,
        category: "tax",
        categoryName: "税・その他",
        question: "事業用資産の買換え特例は、譲渡資産と買換資産が同一用途でなければ適用されない。",
        answer: false,
        explanation: "事業用資産の買換え特例は、一定の要件を満たせば異なる用途への買換えでも適用可能です。"
    },
    {
        id: 287,
        category: "tax",
        categoryName: "税・その他",
        question: "消費税の課税事業者は、土地の譲渡についても消費税を納付する必要がある。",
        answer: false,
        explanation: "土地の譲渡は消費税の非課税取引であり、消費税は課税されません。"
    },
    {
        id: 288,
        category: "tax",
        categoryName: "税・その他",
        question: "小規模宅地等の特例により、特定居住用宅地等は330㎡まで80％減額される。",
        answer: true,
        explanation: "相続税の小規模宅地等の特例により、特定居住用宅地等は330㎡まで評価額が80％減額されます。"
    },
    {
        id: 289,
        category: "tax",
        categoryName: "税・その他",
        question: "地価公示価格は、毎年7月1日時点の価格が公表される。",
        answer: false,
        explanation: "地価公示価格は毎年1月1日時点の価格が3月に公表されます。7月1日時点は都道府県地価調査です。"
    },
    {
        id: 290,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅取得資金の贈与を受けた場合、相続時精算課税制度の適用を受けることができる。",
        answer: true,
        explanation: "住宅取得資金の贈与については、要件を満たせば相続時精算課税制度の適用が可能です。"
    },
    
    // 宅建業法（10問）
    {
        id: 291,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業の免許は、個人から法人成りした場合、承継することができる。",
        answer: false,
        explanation: "宅建業の免許は一身専属的で、個人から法人への承継はできません。新たに免許申請が必要です。"
    },
    {
        id: 292,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士証の有効期間は5年であり、更新には法定講習の受講が必要である。",
        answer: true,
        explanation: "宅建士証の有効期間は5年で、更新には申請前6ヶ月以内の法定講習受講が必要です。"
    },
    {
        id: 293,
        category: "business",
        categoryName: "宅建業法",
        question: "専任媒介契約の有効期間は、3ヶ月を超えることができない。",
        answer: true,
        explanation: "専任媒介契約及び専属専任媒介契約の有効期間は3ヶ月以内で、これを超える期間は3ヶ月となります。"
    },
    {
        id: 294,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、事務所以外の場所で専任の宅建士を置く必要はない。",
        answer: true,
        explanation: "専任の宅建士の設置義務があるのは事務所のみで、案内所等では置く必要はありません（業務に従事する宅建士は必要）。"
    },
    {
        id: 295,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者が自ら売主となる場合、クーリング・オフについて説明する義務がある。",
        answer: true,
        explanation: "宅建業者が自ら売主となる場合、事務所等以外で契約した際のクーリング・オフについて書面で告知する必要があります。"
    },
    {
        id: 296,
        category: "business",
        categoryName: "宅建業法",
        question: "報酬の上限は、売買の媒介の場合、取引額の3％＋6万円である。",
        answer: false,
        explanation: "400万円超の売買の媒介報酬上限は3％＋6万円ですが、これに消費税を加算した額が上限です。"
    },
    {
        id: 297,
        category: "business",
        categoryName: "宅建業法",
        question: "営業保証金は、主たる事務所で1,000万円、従たる事務所1箇所につき500万円である。",
        answer: true,
        explanation: "宅建業者の営業保証金は、主たる事務所1,000万円、従たる事務所1箇所につき500万円です。"
    },
    {
        id: 298,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、重要事項説明を契約締結の直前に行えば足りる。",
        answer: false,
        explanation: "重要事項説明は契約締結前に行う必要がありますが、直前では不適切で、十分な検討時間を与える必要があります。"
    },
    {
        id: 299,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者間の取引では、37条書面の交付を省略することができる。",
        answer: false,
        explanation: "37条書面（契約書面）の交付は、宅建業者間の取引でも省略できません。"
    },
    {
        id: 300,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、守秘義務について宅建業法上の明文規定がある。",
        answer: false,
        explanation: "宅建業法には守秘義務の明文規定はありませんが、信義誠実の原則や個人情報保護法等により実質的に義務付けられています。"
    },

    // ========== 追加問題（50問）301-350 ==========
    // 権利関係（13問）
    {
        id: 301,
        category: "rights",
        categoryName: "権利関係",
        question: "不動産の二重譲渡において、第二買主が先に登記を備えた場合、第一買主は所有権を主張できない。",
        answer: true,
        explanation: "不動産物権変動の対抗要件は登記であり、先に登記を備えた者が優先します（民法第177条）。"
    },
    {
        id: 302,
        category: "rights",
        categoryName: "権利関係",
        question: "賃貸借契約において、敷金は賃料の6ヶ月分を超えて定めることはできない。",
        answer: false,
        explanation: "民法上、敷金の額に制限はありません。当事者間で自由に定めることができます。"
    },
    {
        id: 303,
        category: "rights",
        categoryName: "権利関係",
        question: "瑕疵担保責任は、現在の民法では契約不適合責任と呼ばれる。",
        answer: true,
        explanation: "2020年4月施行の改正民法により、瑕疵担保責任は契約不適合責任に改められました。"
    },
    {
        id: 304,
        category: "rights",
        categoryName: "権利関係",
        question: "養子は、実親との親族関係が終了する。",
        answer: false,
        explanation: "普通養子縁組では実親との親族関係は継続します。特別養子縁組の場合のみ実親との関係が終了します。"
    },
    {
        id: 305,
        category: "rights",
        categoryName: "権利関係",
        question: "借地権の存続期間は、建物の種類に関わらず最低30年である。",
        answer: true,
        explanation: "借地借家法により、借地権の存続期間は建物の種類に関わらず最低30年です。"
    },
    {
        id: 306,
        category: "rights",
        categoryName: "権利関係",
        question: "法定地上権は、土地と建物の所有者が異なる場合にのみ成立する。",
        answer: false,
        explanation: "法定地上権は、抵当権設定時に土地と建物が同一所有者で、競売により別々の所有者になった場合に成立します。"
    },
    {
        id: 307,
        category: "rights",
        categoryName: "権利関係",
        question: "遺言は、15歳に達すれば単独で行うことができる。",
        answer: true,
        explanation: "民法第961条により、15歳に達した者は単独で遺言をすることができます。"
    },
    {
        id: 308,
        category: "rights",
        categoryName: "権利関係",
        question: "賃借権の譲渡には、必ず賃貸人の承諾が必要である。",
        answer: true,
        explanation: "民法第612条により、賃借権の譲渡・転貸には賃貸人の承諾が必要です。無断譲渡は解除事由となります。"
    },
    {
        id: 309,
        category: "rights",
        categoryName: "権利関係",
        question: "抵当権は、元本のほか最後の2年分の利息についても優先弁済を受けられる。",
        answer: true,
        explanation: "民法第375条により、抵当権は元本のほか、最後の2年分の利息について優先弁済権があります。"
    },
    {
        id: 310,
        category: "rights",
        categoryName: "権利関係",
        question: "委任契約は、委任者・受任者いずれからでも、いつでも解除できる。",
        answer: true,
        explanation: "民法第651条により、委任契約は各当事者がいつでも解除できます。ただし、相手方に不利な時期の解除は損害賠償責任が生じることがあります。"
    },
    {
        id: 311,
        category: "rights",
        categoryName: "権利関係",
        question: "事務管理において、本人の意思に反することが明らかでも、本人の利益になる場合は継続できる。",
        answer: false,
        explanation: "事務管理は本人の意思に反することが明らかな場合は原則として継続できません（生命身体財産の急迫の危害を免れさせる場合を除く）。"
    },
    {
        id: 312,
        category: "rights",
        categoryName: "権利関係",
        question: "占有権は、所有の意思がなくても成立する。",
        answer: true,
        explanation: "占有権は、自己のためにする意思（所有の意思とは異なる）をもって物を所持することで成立します。賃借人も占有権を有します。"
    },
    {
        id: 313,
        category: "rights",
        categoryName: "権利関係",
        question: "配偶者居住権は、登記をしなければ第三者に対抗できない。",
        answer: true,
        explanation: "2020年4月創設の配偶者居住権は、登記を対抗要件とします。"
    },
    
    // 法令上の制限（12問）
    {
        id: 314,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街化区域内の1,000㎡未満の開発行為は、開発許可が不要である。",
        answer: true,
        explanation: "都市計画法により、市街化区域内では1,000㎡未満の開発行為は開発許可不要です。"
    },
    {
        id: 315,
        category: "law",
        categoryName: "法令上の制限",
        question: "準工業地域では、学校を建築することができない。",
        answer: false,
        explanation: "準工業地域では学校の建築が可能です。工業地域・工業専用地域では原則不可です。"
    },
    {
        id: 316,
        category: "law",
        categoryName: "法令上の制限",
        question: "建ぺい率80％の地域で、防火地域内の耐火建築物は建ぺい率が100％になる。",
        answer: true,
        explanation: "建ぺい率80％の地域で、防火地域内の耐火建築物は建ぺい率の制限がなくなります（100％）。"
    },
    {
        id: 317,
        category: "law",
        categoryName: "法令上の制限",
        question: "道路斜線制限は、前面道路の幅員が12m以上の場合は適用されない。",
        answer: false,
        explanation: "道路斜線制限の適用除外は、用途地域により異なり、住居系は12m以上、その他は12m超です。"
    },
    {
        id: 318,
        category: "law",
        categoryName: "法令上の制限",
        question: "農地の売買には、農地法第3条の許可が必要である。",
        answer: true,
        explanation: "農地を農地として売買する場合、農地法第3条の許可（農業委員会）が必要です。"
    },
    {
        id: 319,
        category: "law",
        categoryName: "法令上の制限",
        question: "都市計画事業の認可の告示後は、事業地内で建築物の建築が制限される。",
        answer: true,
        explanation: "都市計画法第65条により、都市計画事業認可の告示後は、事業地内での建築に都道府県知事の許可が必要です。"
    },
    {
        id: 320,
        category: "law",
        categoryName: "法令上の制限",
        question: "接道義務は、建築物の敷地が道路に1m以上接していれば満たされる。",
        answer: false,
        explanation: "建築基準法により、建築物の敷地は原則として道路に2m以上接する必要があります。"
    },
    {
        id: 321,
        category: "law",
        categoryName: "法令上の制限",
        question: "第一種住居地域では、床面積3,000㎡を超える店舗は建築できない。",
        answer: true,
        explanation: "第一種住居地域では、店舗等の床面積は3,000㎡以下に制限されています。"
    },
    {
        id: 322,
        category: "law",
        categoryName: "法令上の制限",
        question: "高度地区は、建築物の最高限度または最低限度を定める地区である。",
        answer: true,
        explanation: "都市計画法により、高度地区は建築物の高さの最高限度または最低限度を定める地区です。"
    },
    {
        id: 323,
        category: "law",
        categoryName: "法令上の制限",
        question: "宅地造成等規制法の許可を受けた宅地は、検査済証の交付後でなければ使用できない。",
        answer: false,
        explanation: "宅地造成等規制法では、工事完了後の検査済証交付前でも、知事の承認を得れば使用可能です。"
    },
    {
        id: 324,
        category: "law",
        categoryName: "法令上の制限",
        question: "地区計画の区域内では、届出だけで建築行為が可能である。",
        answer: true,
        explanation: "地区計画の区域内での建築等は、原則として市町村長への届出で足ります（条例により許可制の場合もあり）。"
    },
    {
        id: 325,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築協定は、土地所有者等の全員の合意が必要である。",
        answer: true,
        explanation: "建築基準法により、建築協定の締結には土地所有者等の全員の合意が必要です。"
    },
    
    // 税・その他（12問）
    {
        id: 326,
        category: "tax",
        categoryName: "税・その他",
        question: "長期譲渡所得の税率は、一律15％である。",
        answer: false,
        explanation: "長期譲渡所得の税率は、所得税15％、住民税5％の合計20％です（復興特別所得税を除く）。"
    },
    {
        id: 327,
        category: "tax",
        categoryName: "税・その他",
        question: "居住用財産の3,000万円特別控除は、所有期間に関係なく適用できる。",
        answer: true,
        explanation: "居住用財産の3,000万円特別控除は、所有期間の要件はありません（居住期間等の要件はあり）。"
    },
    {
        id: 328,
        category: "tax",
        categoryName: "税・その他",
        question: "新築住宅の固定資産税は、3年間2分の1に減額される。",
        answer: true,
        explanation: "一定要件を満たす新築住宅は、固定資産税が3年間（マンション等は5年間）2分の1に減額されます。"
    },
    {
        id: 329,
        category: "tax",
        categoryName: "税・その他",
        question: "贈与税の基礎控除額は、年間110万円である。",
        answer: true,
        explanation: "暦年課税の贈与税には、年間110万円の基礎控除があります。"
    },
    {
        id: 330,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産所得の損失は、給与所得と損益通算できない。",
        answer: false,
        explanation: "不動産所得の損失は原則として給与所得等と損益通算できます（土地取得借入金利子を除く）。"
    },
    {
        id: 331,
        category: "tax",
        categoryName: "税・その他",
        question: "収益還元法は、賃貸用不動産の評価に適している。",
        answer: true,
        explanation: "収益還元法は、賃料等の収益から不動産価格を求める方法で、賃貸用不動産の評価に適しています。"
    },
    {
        id: 332,
        category: "tax",
        categoryName: "税・その他",
        question: "建物の減価償却方法は、定額法のみ認められている。",
        answer: true,
        explanation: "1998年4月1日以後に取得した建物、2016年4月1日以後に取得した建物附属設備等は定額法のみです。"
    },
    {
        id: 333,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅ローン控除の控除期間は、最長10年間である。",
        answer: false,
        explanation: "住宅ローン控除の控除期間は原則10年ですが、消費税率10％で取得した場合等は13年間です。"
    },
    {
        id: 334,
        category: "tax",
        categoryName: "税・その他",
        question: "相続税の申告期限は、相続開始を知った日から10ヶ月以内である。",
        answer: true,
        explanation: "相続税の申告期限は、相続の開始があったことを知った日の翌日から10ヶ月以内です。"
    },
    {
        id: 335,
        category: "tax",
        categoryName: "税・その他",
        question: "特定事業用資産の買換え特例は、先に買換資産を取得することもできる。",
        answer: true,
        explanation: "特定事業用資産の買換え特例は、先行取得も可能です（譲渡の前年中または譲渡年中）。"
    },
    {
        id: 336,
        category: "tax",
        categoryName: "税・その他",
        question: "路線価は、相続税評価額の基準となり、公示地価の約80％である。",
        answer: true,
        explanation: "路線価は相続税・贈与税の土地評価の基準で、公示地価の約80％の水準に設定されています。"
    },
    {
        id: 337,
        category: "tax",
        categoryName: "税・その他",
        question: "青色申告特別控除は、不動産所得でも65万円の控除が受けられる。",
        answer: true,
        explanation: "事業的規模の不動産所得で、複式簿記による記帳等の要件を満たせば65万円控除が可能です。"
    },
    
    // 宅建業法（13問）
    {
        id: 338,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業の免許の有効期間は、5年である。",
        answer: true,
        explanation: "宅建業の免許の有効期間は5年で、更新が必要です。"
    },
    {
        id: 339,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士の事務禁止処分期間中は、宅建士証を返納しなければならない。",
        answer: true,
        explanation: "事務禁止処分を受けた宅建士は、速やかに宅建士証を交付を受けた都道府県知事に提出する必要があります。"
    },
    {
        id: 340,
        category: "business",
        categoryName: "宅建業法",
        question: "一般媒介契約では、他の宅建業者に重ねて媒介を依頼することができる。",
        answer: true,
        explanation: "一般媒介契約は非専任のため、複数の宅建業者に重ねて依頼可能です（明示型・非明示型あり）。"
    },
    {
        id: 341,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、従業者名簿を最終記載日から10年間保存しなければならない。",
        answer: true,
        explanation: "宅建業法により、従業者名簿は最終の記載をした日から10年間保存義務があります。"
    },
    {
        id: 342,
        category: "business",
        categoryName: "宅建業法",
        question: "重要事項説明は、宅建士でなくても、従業者であれば行うことができる。",
        answer: false,
        explanation: "重要事項説明は、必ず宅建士が宅建士証を提示して行わなければなりません。"
    },
    {
        id: 343,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者が自ら売主となる場合、買主から受領した手付金は解約手付と推定される。",
        answer: false,
        explanation: "宅建業者が自ら売主の場合、手付は解約手付と「みなされ」ます（推定ではなく、みなし規定）。"
    },
    {
        id: 344,
        category: "business",
        categoryName: "宅建業法",
        question: "弁済業務保証金分担金は、営業保証金の5分の1の額である。",
        answer: true,
        explanation: "保証協会の弁済業務保証金分担金は、主たる事務所60万円、従たる事務所30万円で、営業保証金の5分の1です。"
    },
    {
        id: 345,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、契約締結の勧誘に際し、利益を生ずることが確実であると誤解させる断定的判断を提供してはならない。",
        answer: true,
        explanation: "宅建業法第47条の2により、断定的判断の提供による勧誘は禁止されています。"
    },
    {
        id: 346,
        category: "business",
        categoryName: "宅建業法",
        question: "35条書面と37条書面は、同一の書面として作成することができる。",
        answer: false,
        explanation: "35条書面（重要事項説明書）は契約前、37条書面（契約書面）は契約後に交付するため、同一書面にはできません。"
    },
    {
        id: 347,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、業務上知り得た秘密を、正当な理由なく他に漏らしてはならない。",
        answer: true,
        explanation: "宅建業法第45条により、秘密を守る義務があり、宅建業者でなくなった後も同様です。"
    },
    {
        id: 348,
        category: "business",
        categoryName: "宅建業法",
        question: "広告開始時期の制限は、建築確認を受けた後であれば広告可能である。",
        answer: false,
        explanation: "宅地造成・建物建築の工事完了前の広告は、開発許可・建築確認等を受けた後でなければできません。"
    },
    {
        id: 349,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、指定流通機構に登録した物件について、登録証明書を依頼者に引き渡さなければならない。",
        answer: true,
        explanation: "専任媒介・専属専任媒介契約では、指定流通機構への登録後、登録証明書を依頼者に引き渡す義務があります。"
    },
    {
        id: 350,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業の免許を受けていない者が、業として宅地建物の売買を行った場合、3年以下の懲役または300万円以下の罰金に処される。",
        answer: true,
        explanation: "無免許営業は、3年以下の懲役もしくは300万円以下の罰金、またはこれらの併科という重い罰則があります。"
    },

    // ========== 追加問題（50問）351-400 ==========
    // 権利関係（13問）
    {
        id: 351,
        category: "rights",
        categoryName: "権利関係",
        question: "建物の区分所有者は、共用部分の持分を単独で処分することができる。",
        answer: false,
        explanation: "共用部分の持分は専有部分と分離して処分することはできません（区分所有法第15条）。"
    },
    {
        id: 352,
        category: "rights",
        categoryName: "権利関係",
        question: "定期借地権の存続期間は、50年以上でなければならない。",
        answer: true,
        explanation: "一般定期借地権の存続期間は50年以上と定められています（借地借家法第22条）。"
    },
    {
        id: 353,
        category: "rights",
        categoryName: "権利関係",
        question: "未成年者が婚姻をした場合、成年に達したものとみなされる。",
        answer: true,
        explanation: "民法第753条により、未成年者が婚姻をしたときは、成年に達したものとみなされます。"
    },
    {
        id: 354,
        category: "rights",
        categoryName: "権利関係",
        question: "地役権は、要役地から分離して譲渡することができる。",
        answer: false,
        explanation: "地役権は要役地の所有権に従属し、要役地から分離して譲渡することはできません。"
    },
    {
        id: 355,
        category: "rights",
        categoryName: "権利関係",
        question: "不法行為による損害賠償請求権の消滅時効は、損害及び加害者を知った時から3年である。",
        answer: true,
        explanation: "不法行為による損害賠償請求権は、被害者が損害及び加害者を知った時から3年で時効消滅します。"
    },
    {
        id: 356,
        category: "rights",
        categoryName: "権利関係",
        question: "請負契約において、仕事の目的物に契約不適合があっても、注文者は契約を解除できない。",
        answer: false,
        explanation: "改正民法では、契約不適合があれば注文者は契約を解除できます（建物等でも可能）。"
    },
    {
        id: 357,
        category: "rights",
        categoryName: "権利関係",
        question: "相続放棄は、相続開始前にすることができる。",
        answer: false,
        explanation: "相続放棄は相続開始後でなければできません。相続開始前の放棄は無効です。"
    },
    {
        id: 358,
        category: "rights",
        categoryName: "権利関係",
        question: "不動産の売買契約において、買主は登記なくして第三者に対抗できる。",
        answer: false,
        explanation: "不動産物権変動を第三者に対抗するには登記が必要です（民法第177条）。"
    },
    {
        id: 359,
        category: "rights",
        categoryName: "権利関係",
        question: "連帯保証人は、催告の抗弁権を有しない。",
        answer: true,
        explanation: "連帯保証人は催告の抗弁権・検索の抗弁権を有しません（民法第454条）。"
    },
    {
        id: 360,
        category: "rights",
        categoryName: "権利関係",
        question: "即決和解は、簡易裁判所で行うことができる。",
        answer: true,
        explanation: "即決和解（訴え提起前の和解）は簡易裁判所に申し立てて行います。"
    },
    {
        id: 361,
        category: "rights",
        categoryName: "権利関係",
        question: "賃貸借契約の更新拒絶には、正当事由が必要である。",
        answer: true,
        explanation: "借地借家法により、建物賃貸借の更新拒絶には正当事由が必要です。"
    },
    {
        id: 362,
        category: "rights",
        categoryName: "権利関係",
        question: "根抵当権の元本は、確定前であれば自由に変更できる。",
        answer: false,
        explanation: "根抵当権の元本の変更には、後順位抵当権者等の承諾が必要な場合があります。"
    },
    {
        id: 363,
        category: "rights",
        categoryName: "権利関係",
        question: "売買契約の買主は、売主の債務不履行があれば、直ちに契約を解除できる。",
        answer: false,
        explanation: "原則として相当期間を定めて履行を催告し、その期間内に履行がない場合に解除できます。"
    },
    
    // 法令上の制限（12問）
    {
        id: 364,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街化調整区域では、原則として開発行為が禁止されている。",
        answer: false,
        explanation: "市街化調整区域では開発行為が制限されますが、許可を受ければ可能です。"
    },
    {
        id: 365,
        category: "law",
        categoryName: "法令上の制限",
        question: "容積率の制限は、前面道路の幅員によって制限される場合がある。",
        answer: true,
        explanation: "前面道路の幅員が12m未満の場合、道路幅員による容積率の制限を受けます。"
    },
    {
        id: 366,
        category: "law",
        categoryName: "法令上の制限",
        question: "第一種低層住居専用地域では、建築物の高さは10mまたは12mに制限される。",
        answer: true,
        explanation: "第一種低層住居専用地域では、都市計画で10mまたは12mの高さ制限が定められます。"
    },
    {
        id: 367,
        category: "law",
        categoryName: "法令上の制限",
        question: "農地を宅地に転用する場合、必ず農地法第5条の許可が必要である。",
        answer: false,
        explanation: "市街化区域内の農地転用は届出で足り、許可は不要です。"
    },
    {
        id: 368,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築確認が必要な建築物は、確認済証の交付前に工事を着手できない。",
        answer: true,
        explanation: "建築確認が必要な建築物は、確認済証の交付を受けた後でなければ工事着手できません。"
    },
    {
        id: 369,
        category: "law",
        categoryName: "法令上の制限",
        question: "防火地域内では、すべての建築物を耐火建築物としなければならない。",
        answer: false,
        explanation: "防火地域内でも、延べ面積100㎡以下かつ2階建て以下なら準耐火建築物で可能です。"
    },
    {
        id: 370,
        category: "law",
        categoryName: "法令上の制限",
        question: "日影規制は、商業地域には適用されない。",
        answer: true,
        explanation: "日影規制は商業地域、工業地域、工業専用地域には適用されません。"
    },
    {
        id: 371,
        category: "law",
        categoryName: "法令上の制限",
        question: "土地区画整理事業の施行地区内では、建築行為が制限される。",
        answer: true,
        explanation: "土地区画整理事業の施行地区内では、都道府県知事の許可なく建築行為等ができません。"
    },
    {
        id: 372,
        category: "law",
        categoryName: "法令上の制限",
        question: "都市計画税は、市街化調整区域内の土地にも課税される。",
        answer: false,
        explanation: "都市計画税は原則として市街化区域内の土地・家屋に課税されます。"
    },
    {
        id: 373,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築物の敷地は、建築基準法上の道路に2m以上接しなければならない。",
        answer: true,
        explanation: "建築基準法により、建築物の敷地は道路に2m以上接する必要があります（接道義務）。"
    },
    {
        id: 374,
        category: "law",
        categoryName: "法令上の制限",
        question: "特定街区内では、建築基準法の容積率・建ぺい率の規定が適用されない。",
        answer: true,
        explanation: "特定街区では、都市計画で定められた内容が優先され、一般の容積率等は適用されません。"
    },
    {
        id: 375,
        category: "law",
        categoryName: "法令上の制限",
        question: "宅地造成工事規制区域内で切土をする場合、すべて許可が必要である。",
        answer: false,
        explanation: "切土で高さ2m以下、面積500㎡以下の場合は許可不要です。"
    },
    
    // 税・その他（12問）
    {
        id: 376,
        category: "tax",
        categoryName: "税・その他",
        question: "印紙税は、契約書を作成しただけで課税される。",
        answer: true,
        explanation: "印紙税は、課税文書を作成した時点で納税義務が生じます。"
    },
    {
        id: 377,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅取得等資金の贈与税の非課税限度額は、一律1,000万円である。",
        answer: false,
        explanation: "非課税限度額は、住宅の種類や取得時期により異なります（省エネ住宅等は優遇）。"
    },
    {
        id: 378,
        category: "tax",
        categoryName: "税・その他",
        question: "小規模宅地等の特例により、居住用宅地は330㎡まで80％減額される。",
        answer: true,
        explanation: "相続税の小規模宅地等の特例で、特定居住用宅地等は330㎡まで80％評価減されます。"
    },
    {
        id: 379,
        category: "tax",
        categoryName: "税・その他",
        question: "登録免許税の税率は、すべての不動産取引で同一である。",
        answer: false,
        explanation: "登録免許税の税率は、所有権移転の原因（売買、相続、贈与等）により異なります。"
    },
    {
        id: 380,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産取得税は、相続により不動産を取得した場合も課税される。",
        answer: false,
        explanation: "相続（包括遺贈含む）による不動産取得は、不動産取得税の非課税です。"
    },
    {
        id: 381,
        category: "tax",
        categoryName: "税・その他",
        question: "取引事例比較法は、近隣の類似物件の取引事例を基に価格を査定する方法である。",
        answer: true,
        explanation: "取引事例比較法は、近隣の類似物件の取引事例を収集・比較して価格を求めます。"
    },
    {
        id: 382,
        category: "tax",
        categoryName: "税・その他",
        question: "事業用資産の買換え特例は、個人のみが適用を受けられる。",
        answer: false,
        explanation: "事業用資産の買換え特例は、個人・法人ともに適用を受けることができます。"
    },
    {
        id: 383,
        category: "tax",
        categoryName: "税・その他",
        question: "消費税の課税事業者は、前々年の課税売上高が1,000万円を超える事業者である。",
        answer: true,
        explanation: "基準期間（前々年）の課税売上高が1,000万円を超える場合、課税事業者となります。"
    },
    {
        id: 384,
        category: "tax",
        categoryName: "税・その他",
        question: "固定資産税の標準税率は1.4％である。",
        answer: true,
        explanation: "固定資産税の標準税率は1.4％です（市町村により異なる場合あり）。"
    },
    {
        id: 385,
        category: "tax",
        categoryName: "税・その他",
        question: "譲渡所得の計算において、取得費が不明な場合は譲渡価額の5％とすることができる。",
        answer: true,
        explanation: "取得費が不明な場合、譲渡価額の5％を概算取得費として計算できます。"
    },
    {
        id: 386,
        category: "tax",
        categoryName: "税・その他",
        question: "都市計画税の制限税率は0.3％である。",
        answer: true,
        explanation: "都市計画税の制限税率（上限）は0.3％と定められています。"
    },
    {
        id: 387,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅ローン控除は、中古住宅の購入には適用されない。",
        answer: false,
        explanation: "一定の要件を満たす中古住宅の購入にも住宅ローン控除は適用されます。"
    },
    
    // 宅建業法（13問）
    {
        id: 388,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、事務所以外の場所で専任の宅建士を置く必要はない。",
        answer: true,
        explanation: "専任の宅建士の設置義務があるのは事務所のみで、案内所等には不要です。"
    },
    {
        id: 389,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士証の有効期間は、5年である。",
        answer: true,
        explanation: "宅建士証の有効期間は5年で、更新には法定講習の受講が必要です。"
    },
    {
        id: 390,
        category: "business",
        categoryName: "宅建業法",
        question: "重要事項説明書には、宅建士の記名が必要である。",
        answer: true,
        explanation: "重要事項説明書（35条書面）には、説明をする宅建士の記名が必要です。"
    },
    {
        id: 391,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、自ら売主として、クーリング・オフによる解除を受けた場合、損害賠償請求ができる。",
        answer: false,
        explanation: "クーリング・オフによる解除の場合、宅建業者は損害賠償や違約金を請求できません。"
    },
    {
        id: 392,
        category: "business",
        categoryName: "宅建業法",
        question: "媒介契約書面は、遅滞なく交付すればよい。",
        answer: true,
        explanation: "媒介契約書面は、媒介契約締結後遅滞なく交付する必要があります。"
    },
    {
        id: 393,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、営業保証金を供託した後でなければ、事業を開始できない。",
        answer: true,
        explanation: "営業保証金の供託と供託届出後でなければ、宅建業の事業開始はできません。"
    },
    {
        id: 394,
        category: "business",
        categoryName: "宅建業法",
        question: "専属専任媒介契約の有効期間は、3ヶ月を超えることができない。",
        answer: true,
        explanation: "専属専任媒介契約・専任媒介契約の有効期間は3ヶ月を超えることができません。"
    },
    {
        id: 395,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者が自ら売主となる場合、買主が宅建業者であれば、手付金の額に制限はない。",
        answer: true,
        explanation: "8種制限は、買主が宅建業者の場合には適用されません。"
    },
    {
        id: 396,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、報酬の額を自由に定めることができる。",
        answer: false,
        explanation: "宅建業者の報酬には国土交通大臣が定める上限があります。"
    },
    {
        id: 397,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業の廃業届は、30日以内に提出しなければならない。",
        answer: true,
        explanation: "廃業等の届出は、その日から30日以内に行う必要があります。"
    },
    {
        id: 398,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、事務所ごとに帳簿を備え、取引のつど記載しなければならない。",
        answer: true,
        explanation: "宅建業者は各事務所に帳簿を備え、取引のつど必要事項を記載する義務があります。"
    },
    {
        id: 399,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者の監督処分は、国土交通大臣のみが行うことができる。",
        answer: false,
        explanation: "都道府県知事も、その免許を与えた宅建業者に対して監督処分を行えます。"
    },
    {
        id: 400,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士が宅建士証を亡失した場合、再交付を受けるまで重要事項説明を行うことができない。",
        answer: true,
        explanation: "重要事項説明には宅建士証の提示が必要なため、亡失した場合は再交付を受ける必要があります。"
    },

    // ========== 追加問題（50問）401-450 ==========
    // 権利関係（13問）
    {
        id: 401,
        category: "rights",
        categoryName: "権利関係",
        question: "時効の援用は、時効期間満了前でも行うことができる。",
        answer: false,
        explanation: "時効の援用は、時効期間が満了した後でなければ行うことができません。"
    },
    {
        id: 402,
        category: "rights",
        categoryName: "権利関係",
        question: "定期建物賃貸借契約は、公正証書による等書面によって契約しなければならない。",
        answer: true,
        explanation: "借地借家法第38条により、定期建物賃貸借契約は書面による契約が必要です。"
    },
    {
        id: 403,
        category: "rights",
        categoryName: "権利関係",
        question: "債権譲渡の対抗要件は、確定日付のある証書による通知または承諾である。",
        answer: true,
        explanation: "債権譲渡を第三者に対抗するには、確定日付のある証書による通知・承諾が必要です。"
    },
    {
        id: 404,
        category: "rights",
        categoryName: "権利関係",
        question: "建物買取請求権は、借地契約の更新がない場合にのみ行使できる。",
        answer: false,
        explanation: "建物買取請求権は、契約期間満了や合意解約など、借地権が消滅する場合に行使できます。"
    },
    {
        id: 405,
        category: "rights",
        categoryName: "権利関係",
        question: "民法上の組合契約において、組合員は業務執行に関与する権利を放棄できる。",
        answer: true,
        explanation: "組合員は業務執行に関与する権利を放棄できますが、業務・財産状況の検査権は放棄できません。"
    },
    {
        id: 406,
        category: "rights",
        categoryName: "権利関係",
        question: "共有物の管理行為は、共有者の持分価格の過半数で決定する。",
        answer: true,
        explanation: "民法第252条により、共有物の管理に関する事項は持分価格の過半数で決定します。"
    },
    {
        id: 407,
        category: "rights",
        categoryName: "権利関係",
        question: "親権者は、子の財産を自由に処分することができる。",
        answer: false,
        explanation: "親権者は子の財産を管理する権限はありますが、子の利益のために行使する必要があります。"
    },
    {
        id: 408,
        category: "rights",
        categoryName: "権利関係",
        question: "仮登記は、本登記と同じ対抗力を有する。",
        answer: false,
        explanation: "仮登記は順位保全効はありますが、本登記のような対抗力はありません。"
    },
    {
        id: 409,
        category: "rights",
        categoryName: "権利関係",
        question: "使用貸借契約は、借主の死亡により終了する。",
        answer: true,
        explanation: "使用貸借は借主の死亡により終了し、相続の対象となりません。"
    },
    {
        id: 410,
        category: "rights",
        categoryName: "権利関係",
        question: "错誤による意思表示は、重大な過失がある場合でも取り消すことができる。",
        answer: false,
        explanation: "表意者に重大な過失がある場合、原則として错誤による取消しはできません。"
    },
    {
        id: 411,
        category: "rights",
        categoryName: "権利関係",
        question: "譲渡担保において、債務者は受戻権を有する。",
        answer: true,
        explanation: "譲渡担保の設定者（債務者）は、債務を弁済して目的物を受け戻す権利があります。"
    },
    {
        id: 412,
        category: "rights",
        categoryName: "権利関係",
        question: "隣地使用権は、必要な範囲で隣地を使用できる権利である。",
        answer: true,
        explanation: "民法第209条により、境界付近での建築・修繕等に必要な範囲で隣地使用が認められます。"
    },
    {
        id: 413,
        category: "rights",
        categoryName: "権利関係",
        question: "特別養子縁組は、養子が6歳未満でなければ成立しない。",
        answer: false,
        explanation: "原則6歳未満ですが、6歳に達する前から引き続き養親となる者に監護されている場合は8歳未満まで可能です。"
    },
    
    // 法令上の制限（12問）
    {
        id: 414,
        category: "law",
        categoryName: "法令上の制限",
        question: "非線引き都市計画区域では、3,000㎡未満の開発行為は許可不要である。",
        answer: true,
        explanation: "非線引き都市計画区域では、3,000㎡未満の開発行為は開発許可不要です。"
    },
    {
        id: 415,
        category: "law",
        categoryName: "法令上の制限",
        question: "風致地区内での建築には、都道府県知事の許可が必要である。",
        answer: false,
        explanation: "風致地区内での建築行為は、市町村長の許可が必要です（政令市等は市長）。"
    },
    {
        id: 416,
        category: "law",
        categoryName: "法令上の制限",
        question: "準都市計画区域では、用途地域を定めることができる。",
        answer: true,
        explanation: "準都市計画区域でも、用途地域を定めることができます。"
    },
    {
        id: 417,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築基準法の道路は、幅員4m以上が原則である。",
        answer: true,
        explanation: "建築基準法第42条により、道路は原則として幅員4m以上必要です。"
    },
    {
        id: 418,
        category: "law",
        categoryName: "法令上の制限",
        question: "土地収用法による事業認定は、国土交通大臣のみが行う。",
        answer: false,
        explanation: "事業の種類・規模により、国土交通大臣または都道府県知事が事業認定を行います。"
    },
    {
        id: 419,
        category: "law",
        categoryName: "法令上の制限",
        question: "景観地区内では、建築物の形態意匠の制限を受ける。",
        answer: true,
        explanation: "景観地区では、建築物の形態意匠について市町村長の認定が必要です。"
    },
    {
        id: 420,
        category: "law",
        categoryName: "法令上の制限",
        question: "生産緑地地区の指定は、500㎡以上の農地等が対象である。",
        answer: true,
        explanation: "生産緑地地区は、500㎡以上の農地等が指定対象となります。"
    },
    {
        id: 421,
        category: "law",
        categoryName: "法令上の制限",
        question: "伝統的建造物群保存地区では、すべての建築行為が禁止される。",
        answer: false,
        explanation: "伝統的建造物群保存地区では、現状変更に市町村教育委員会の許可が必要ですが、全面禁止ではありません。"
    },
    {
        id: 422,
        category: "law",
        categoryName: "法令上の制限",
        question: "総合設計制度により、容積率の割増しを受けることができる。",
        answer: true,
        explanation: "一定の空地を設ける総合設計では、特定行政庁の許可により容積率の割増しが可能です。"
    },
    {
        id: 423,
        category: "law",
        categoryName: "法令上の制限",
        question: "市街地再開発事業は、第一種と第二種がある。",
        answer: true,
        explanation: "市街地再開発事業には、権利変換方式の第一種と管理処分方式の第二種があります。"
    },
    {
        id: 424,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築物の用途変更は、すべて建築確認が必要である。",
        answer: false,
        explanation: "類似の用途間の変更や、200㎡以下の特殊建築物への用途変更は建築確認不要です。"
    },
    {
        id: 425,
        category: "law",
        categoryName: "法令上の制限",
        question: "開発許可を受けた土地は、工事完了公告前は建築できない。",
        answer: true,
        explanation: "開発許可を受けた土地では、原則として工事完了公告後でなければ建築できません。"
    },
    
    // 税・その他（12問）
    {
        id: 426,
        category: "tax",
        categoryName: "税・その他",
        question: "配偶者居住権は、相続税の課税対象となる。",
        answer: true,
        explanation: "配偶者居住権も財産的価値があるため、相続税の課税対象となります。"
    },
    {
        id: 427,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産の譲渡所得は、分離課税である。",
        answer: true,
        explanation: "土地建物の譲渡所得は、他の所得と分離して課税されます（分離課税）。"
    },
    {
        id: 428,
        category: "tax",
        categoryName: "税・その他",
        question: "空き家の3,000万円特別控除は、相続から3年以内に譲渡する必要がある。",
        answer: false,
        explanation: "相続開始から3年を経過する日の属する年の12月31日までに譲渡する必要があります。"
    },
    {
        id: 429,
        category: "tax",
        categoryName: "税・その他",
        question: "原価法は、再調達原価から減価修正を行って価格を求める方法である。",
        answer: true,
        explanation: "原価法は、再調達原価を求め、減価修正を行って対象不動産の価格を求める手法です。"
    },
    {
        id: 430,
        category: "tax",
        categoryName: "税・その他",
        question: "相続時精算課税制度の適用を受けると、暦年課税に戻すことはできない。",
        answer: true,
        explanation: "相続時精算課税制度を選択すると、その贈与者からの贈与について暦年課税には戻せません。"
    },
    {
        id: 431,
        category: "tax",
        categoryName: "税・その他",
        question: "法人の土地譲渡益には、追加課税される場合がある。",
        answer: true,
        explanation: "一定期間、法人の土地譲渡益に対して追加課税（重課）される制度があります。"
    },
    {
        id: 432,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅用地の固定資産税は、200㎡まで6分の1に軽減される。",
        answer: true,
        explanation: "小規模住宅用地（200㎡以下）の固定資産税の課税標準は6分の1に軽減されます。"
    },
    {
        id: 433,
        category: "tax",
        categoryName: "税・その他",
        question: "買換え特例と3,000万円特別控除は、併用できる。",
        answer: false,
        explanation: "特定居住用財産の買換え特例と3,000万円特別控除は併用できません。"
    },
    {
        id: 434,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産鑑定評価基準では、価格時点を定める必要がある。",
        answer: true,
        explanation: "不動産鑑定評価では、価格時点（いつの時点の価格か）を明確にする必要があります。"
    },
    {
        id: 435,
        category: "tax",
        categoryName: "税・その他",
        question: "登録免許税の軽減措置は、新築住宅にのみ適用される。",
        answer: false,
        explanation: "一定要件を満たす中古住宅の取得にも登録免許税の軽減措置があります。"
    },
    {
        id: 436,
        category: "tax",
        categoryName: "税・その他",
        question: "相続税の延納は、最閇20年まで可能である。",
        answer: true,
        explanation: "不動産等の割合が高い場合、相続税の延納は最閇20年まで認められます。"
    },
    {
        id: 437,
        category: "tax",
        categoryName: "税・その他",
        question: "特定の事業用資産の買換え特例では、圧縮記帳ができる。",
        answer: true,
        explanation: "法人が特定の事業用資産の買換えを行った場合、圧縮記帳により課税繰延べが可能です。"
    },
    
    // 宅建業法（13問）
    {
        id: 438,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、クーリング・オフについて書面で告知しなければならない。",
        answer: true,
        explanation: "宅建業者が自ら売主の場合、クーリング・オフについて書面で告知する義務があります。"
    },
    {
        id: 439,
        category: "business",
        categoryName: "宅建業法",
        question: "専任媒介契約では、2週間に1回以上業務処理状況を報告する。",
        answer: true,
        explanation: "専任媒介契約では、2週間に1回以上の頻度で依頼者に業務処理状況を報告します。"
    },
    {
        id: 440,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者の事務所には、必ず専任の宅建士を置かなければならない。",
        answer: true,
        explanation: "事務所には、業務に従事する者5人に1人以上の割合で専任の宅建士が必要です。"
    },
    {
        id: 441,
        category: "business",
        categoryName: "宅建業法",
        question: "手付金等の保全措置は、売買代金の5％を超える場合に必要である。",
        answer: false,
        explanation: "未完成物件は5％超かつ1,000万円超、完成物件は10％超かつ1,000万円超で保全措置が必要です。"
    },
    {
        id: 442,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士の登録は、試験に合格すれば自動的に行われる。",
        answer: false,
        explanation: "宅建士の登録には、2年以上の実務経験または登録実務講習の修了が必要です。"
    },
    {
        id: 443,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、両手取引の場合、双方から報酬を受領できる。",
        answer: true,
        explanation: "売主・買主双方の媒介を行う場合、それぞれから報酬を受領できます（合計は上限あり）。"
    },
    {
        id: 444,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業の免許申請には、営業保証金の供託証明が必要である。",
        answer: false,
        explanation: "免許申請時には営業保証金の供託は不要で、免許取得後に供託します。"
    },
    {
        id: 445,
        category: "business",
        categoryName: "宅建業法",
        question: "重要事項説明は、契約成立後でも差し支えない。",
        answer: false,
        explanation: "重要事項説明は、契約成立前に行わなければなりません。"
    },
    {
        id: 446,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者名簿は、一般の閲覧に供される。",
        answer: true,
        explanation: "宅建業者名簿は、国土交通省・都道府県で一般の閲覧に供されます。"
    },
    {
        id: 447,
        category: "business",
        categoryName: "宅建業法",
        question: "瑕疵担保責任の特約は、買主に不利なものも有効である。",
        answer: false,
        explanation: "宅建業者が売主の場合、引渡しから2年以上とする特約以外の買主に不利な特約は無効です。"
    },
    {
        id: 448,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、誇大広告等の禁止規定に違反すると業務停止処分を受ける。",
        answer: true,
        explanation: "誇大広告等の禁止規定違反は、業務停止処分等の対象となります。"
    },
    {
        id: 449,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士証の更新には、法定講習の受講が必要である。",
        answer: true,
        explanation: "宅建士証の更新（有効期間5年）には、法定講習の受講が必要です。"
    },
    {
        id: 450,
        category: "business",
        categoryName: "宅建業法",
        question: "保証協会に加入した宅建業者は、営業保証金を供託する必要がない。",
        answer: true,
        explanation: "保証協会に加入し弁済業務保証金分担金を納付すれば、営業保証金の供託は不要です。"
    },

    // ========== 最終追加問題（50問）451-500 ==========
    // 権利関係（13問）
    {
        id: 451,
        category: "rights",
        categoryName: "権利関係",
        question: "永小作権は、物権である。",
        answer: true,
        explanation: "永小作権は、他人の土地において耕作または牧畜をする物権です（民法第270条）。"
    },
    {
        id: 452,
        category: "rights",
        categoryName: "権利関係",
        question: "不在者の財産管理人は、家庭裁判所の許可なく不動産を売却できる。",
        answer: false,
        explanation: "不在者の財産管理人が不動産を売却するには、家庭裁判所の許可が必要です。"
    },
    {
        id: 453,
        category: "rights",
        categoryName: "権利関係",
        question: "抵当権の被担保債権が時効消滅すると、抵当権も消滅する。",
        answer: true,
        explanation: "抵当権は付従性があるため、被担保債権が時効消滅すれば抵当権も消滅します。"
    },
    {
        id: 454,
        category: "rights",
        categoryName: "権利関係",
        question: "事業用定期借地権の存続期間は、10年以上50年未満である。",
        answer: true,
        explanation: "事業用定期借地権の存続期間は、10年以上50年未満と定められています。"
    },
    {
        id: 455,
        category: "rights",
        categoryName: "権利関係",
        question: "同時履行の抗弁権は、双務契約でなくても主張できる。",
        answer: false,
        explanation: "同時履行の抗弁権は、双務契約において相手方が債務を履行するまで自己の債務の履行を拒める権利です。"
    },
    {
        id: 456,
        category: "rights",
        categoryName: "権利関係",
        question: "遺産分割協議は、相続人全員の合意が必要である。",
        answer: true,
        explanation: "遺産分割協議には、相続人全員の参加と合意が必要です。"
    },
    {
        id: 457,
        category: "rights",
        categoryName: "権利関係",
        question: "定期借家契約では、中途解約権を特約で排除できる。",
        answer: true,
        explanation: "定期借家契約では、法定の中途解約権（200㎡未満の居住用）以外は、特約で中途解約権を排除できます。"
    },
    {
        id: 458,
        category: "rights",
        categoryName: "権利関係",
        question: "善意の第三者に対しては、詐欺による取消しを対抗できない。",
        answer: true,
        explanation: "民法第96条第3項により、詐欺による取消しは善意無過失の第三者に対抗できません。"
    },
    {
        id: 459,
        category: "rights",
        categoryName: "権利関係",
        question: "相殺は、相手方の承諾なくして行うことができる。",
        answer: true,
        explanation: "相殺は単独行為であり、相手方の承諾なく一方的な意思表示で行えます。"
    },
    {
        id: 460,
        category: "rights",
        categoryName: "権利関係",
        question: "準共有の場合、各共有者は自由に持分を処分できる。",
        answer: true,
        explanation: "準共有においても、各共有者は自己の持分を自由に処分できます。"
    },
    {
        id: 461,
        category: "rights",
        categoryName: "権利関係",
        question: "後見人は、被後見人の居住用不動産を自由に処分できる。",
        answer: false,
        explanation: "後見人が被後見人の居住用不動産を処分するには、家庭裁判所の許可が必要です。"
    },
    {
        id: 462,
        category: "rights",
        categoryName: "権利関係",
        question: "期限の利益は、債務者のためにあるものと推定される。",
        answer: true,
        explanation: "民法第136条により、期限の利益は債務者のためにあるものと推定されます。"
    },
    {
        id: 463,
        category: "rights",
        categoryName: "権利関係",
        question: "遺留分侵害額請求権の行使期間は、相続開始から1年である。",
        answer: false,
        explanation: "遺留分侵害額請求権は、相続開始及び遺留分侵害を知った時から1年、相続開始から10年で時効消滅します。"
    },
    
    // 法令上の制限（12問）
    {
        id: 464,
        category: "law",
        categoryName: "法令上の制限",
        question: "都市計画区域外では、建築確認が不要である。",
        answer: false,
        explanation: "都市計画区域外でも、一定規模以上の建築物等は建築確認が必要です。"
    },
    {
        id: 465,
        category: "law",
        categoryName: "法令上の制限",
        question: "第二種低層住居専用地域では、3階建ての住宅が建築できる。",
        answer: true,
        explanation: "第二種低層住居専用地域でも、高さ制限（10mまたは12m）内であれば3階建て住宅の建築が可能です。"
    },
    {
        id: 466,
        category: "law",
        categoryName: "法令上の制限",
        question: "農業振興地域内の農用地区域では、原則として農地転用ができない。",
        answer: true,
        explanation: "農業振興地域内の農用地区域（青地）では、原則として農地転用は認められません。"
    },
    {
        id: 467,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築物の容積率は、敷地が2以上の用途地域にまたがる場合、加重平均で算定する。",
        answer: true,
        explanation: "敷地が2以上の用途地域にまたがる場合、容積率は面積による加重平均で算定します。"
    },
    {
        id: 468,
        category: "law",
        categoryName: "法令上の制限",
        question: "仮換地の指定を受けた土地は、従前の土地について使用収益できる。",
        answer: false,
        explanation: "仮換地の指定により、従前の土地の使用収益権は原則として停止されます。"
    },
    {
        id: 469,
        category: "law",
        categoryName: "法令上の制限",
        question: "準防火地域では、すべての建築物を準耐火建築物としなければならない。",
        answer: false,
        explanation: "準防火地域でも、一定規模以下の建築物は準耐火建築物としなくてもよい場合があります。"
    },
    {
        id: 470,
        category: "law",
        categoryName: "法令上の制限",
        question: "地区計画は、市町村が都市計画として定める。",
        answer: true,
        explanation: "地区計画は、市町村が定める都市計画です。"
    },
    {
        id: 471,
        category: "law",
        categoryName: "法令上の制限",
        question: "宅地造成工事規制区域は、都道府県知事が指定する。",
        answer: true,
        explanation: "宅地造成工事規制区域は、都道府県知事（政令市等は市長）が指定します。"
    },
    {
        id: 472,
        category: "law",
        categoryName: "法令上の制限",
        question: "建築基準法上の道路に2m接していれば、どんな敷地でも建築可能である。",
        answer: false,
        explanation: "接道義務を満たしても、用途地域や建ぺい率・容積率等の他の制限も満たす必要があります。"
    },
    {
        id: 473,
        category: "law",
        categoryName: "法令上の制限",
        question: "開発行為の許可権者は、都道府県知事である。",
        answer: true,
        explanation: "開発行為の許可権者は都道府県知事です（政令市・中核市等は市長）。"
    },
    {
        id: 474,
        category: "law",
        categoryName: "法令上の制限",
        question: "高度利用地区では、建築物の容積率の最低限度が定められる。",
        answer: true,
        explanation: "高度利用地区では、容積率の最高限度・最低限度、建ぺい率の最高限度等が定められます。"
    },
    {
        id: 475,
        category: "law",
        categoryName: "法令上の制限",
        question: "国土利用計画法の事後届出は、契約締結後14日以内に行う。",
        answer: false,
        explanation: "国土利用計画法の事後届出は、契約締結後2週間以内に行う必要があります。"
    },
    
    // 税・その他（12問）
    {
        id: 476,
        category: "tax",
        categoryName: "税・その他",
        question: "居住用財産の譲渡所得は、所有期間に関わらず軽減税率が適用される。",
        answer: false,
        explanation: "居住用財産譲渡所得の軽減税率は、所有期間10年超の場合に適用されます。"
    },
    {
        id: 477,
        category: "tax",
        categoryName: "税・その他",
        question: "個人が土地を譲渡した場合、短期譲渡所得の税率は39％である。",
        answer: true,
        explanation: "短期譲渡所得（所有期間5年以下）の税率は、所得税30％、住民税9％の合計39％です。"
    },
    {
        id: 478,
        category: "tax",
        categoryName: "税・その他",
        question: "不動産鑑定評価の手法には、原価法、取引事例比較法、収益還元法がある。",
        answer: true,
        explanation: "不動産鑑定評価の三手法は、原価法、取引事例比較法、収益還元法です。"
    },
    {
        id: 479,
        category: "tax",
        categoryName: "税・その他",
        question: "印紙税は、契約金額が1万円未満の場合は非課税である。",
        answer: true,
        explanation: "不動産売買契約書等の印紙税は、記載金額1万円未満は非課税です。"
    },
    {
        id: 480,
        category: "tax",
        categoryName: "税・その他",
        question: "相続税の基礎控除は、3,000万円＋500万円×法定相続人数である。",
        answer: false,
        explanation: "相続税の基礎控除は、3,000万円＋600万円×法定相続人数です。"
    },
    {
        id: 481,
        category: "tax",
        categoryName: "税・その他",
        question: "新築住宅の不動産取得税は、1,200万円の控除がある。",
        answer: true,
        explanation: "一定要件を満たす新築住宅の不動産取得税は、1,200万円（長期優良住宅は1,300万円）の控除があります。"
    },
    {
        id: 482,
        category: "tax",
        categoryName: "税・その他",
        question: "住宅ローン控除の対象となる借入金の限度額は、一律4,000万円である。",
        answer: false,
        explanation: "住宅ローン控除の借入限度額は、住宅の種類や取得時期により異なります。"
    },
    {
        id: 483,
        category: "tax",
        categoryName: "税・その他",
        question: "公示価格は、毎年1月1日時点の価格である。",
        answer: true,
        explanation: "地価公示の公示価格は、毎年1月1日時点の標準地の価格です。"
    },
    {
        id: 484,
        category: "tax",
        categoryName: "税・その他",
        question: "配偶者に対する相続税額の軽減は、1億6,000万円まで非課税である。",
        answer: false,
        explanation: "配偶者の税額軽減は、1億6,000万円または法定相続分のいずれか多い金額まで非課税です。"
    },
    {
        id: 485,
        category: "tax",
        categoryName: "税・その他",
        question: "譲渡所得の概算取得費は、譲渡収入金額の5％である。",
        answer: true,
        explanation: "取得費が不明な場合、譲渡収入金額の5％を概算取得費とすることができます。"
    },
    {
        id: 486,
        category: "tax",
        categoryName: "税・その他",
        question: "贈与税の配偶者控除は、婚姻期間20年以上で適用される。",
        answer: true,
        explanation: "居住用不動産の贈与税の配偶者控除（2,000万円）は、婚姻期間20年以上が要件です。"
    },
    {
        id: 487,
        category: "tax",
        categoryName: "税・その他",
        question: "建物の標準的な耐用年数は、木造住宅で22年である。",
        answer: true,
        explanation: "減価償却資産の耐用年数で、木造住宅用建物は22年と定められています。"
    },
    
    // 宅建業法（13問）
    {
        id: 488,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、免許の更新を受けなかった場合、その免許は失効する。",
        answer: true,
        explanation: "宅建業免許は5年ごとの更新が必要で、更新しなければ失効します。"
    },
    {
        id: 489,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士は、重要事項説明の際、宅建士証を提示しなければならない。",
        answer: true,
        explanation: "重要事項説明時には、必ず宅建士証を提示する義務があります。"
    },
    {
        id: 490,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、自ら売主となる場合、買主に不利な特約をすべて無効にできる。",
        answer: false,
        explanation: "8種制限により買主に不利な特約は無効ですが、法令に違反しない範囲の特約は有効です。"
    },
    {
        id: 491,
        category: "business",
        categoryName: "宅建業法",
        question: "一般媒介契約の有効期間は、法律上の制限がない。",
        answer: true,
        explanation: "一般媒介契約には法定の有効期間の制限はありません（行政指導では3ヶ月以内）。"
    },
    {
        id: 492,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、契約締結時期の制限に違反した場合、罰則を受ける。",
        answer: true,
        explanation: "契約締結時期の制限（手付金等の保全措置前の契約締結禁止等）違反には罰則があります。"
    },
    {
        id: 493,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建士の事務禁止処分は、最長1年間である。",
        answer: true,
        explanation: "宅建士に対する事務禁止処分の期間は、1年以内です。"
    },
    {
        id: 494,
        category: "business",
        categoryName: "宅建業法",
        question: "専属専任媒介契約では、依頼者は他の宅建業者に重ねて依頼できない。",
        answer: true,
        explanation: "専属専任媒介契約では、他の宅建業者への依頼も自己発見取引も禁止されます。"
    },
    {
        id: 495,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者の帳簿は、各事業年度末に閉鎖し、5年間保存する。",
        answer: true,
        explanation: "宅建業者の帳簿は、各事業年度末閉鎖後5年間（新規は10年間）保存義務があります。"
    },
    {
        id: 496,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、広告に免許証番号を必ず記載しなければならない。",
        answer: false,
        explanation: "広告への免許証番号の記載は義務ではありませんが、業者名・所在地等は必要です。"
    },
    {
        id: 497,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者が受領できる報酬の額は、国土交通大臣が定める。",
        answer: true,
        explanation: "宅建業者の報酬額の上限は、国土交通大臣が定めています。"
    },
    {
        id: 498,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業者は、守秘義務違反をした場合、刑事罰を受ける。",
        answer: false,
        explanation: "宅建業法の守秘義務（第45条）違反には、直接的な刑事罰の規定はありません。"
    },
    {
        id: 499,
        category: "business",
        categoryName: "宅建業法",
        question: "供託所等の説明は、重要事項説明の必要的記載事項である。",
        answer: true,
        explanation: "供託所等に関する説明は、35条書面（重要事項説明書）の必要的記載事項です。"
    },
    {
        id: 500,
        category: "business",
        categoryName: "宅建業法",
        question: "宅建業の免許は、個人から法人成りした場合、承継される。",
        answer: false,
        explanation: "個人から法人成りした場合、宅建業免許は承継されず、新たに法人として免許申請が必要です。"
    }
];