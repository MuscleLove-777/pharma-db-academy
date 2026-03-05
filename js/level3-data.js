const LEVEL3_DATA = {
    id: 3,
    title: "処方・患者データベース（RWD）",
    icon: "🏥",
    description: "MDV・JMDC・NDB等のRWDを理解し、患者治療実態を分析する",
    modules: [
        {
            id: 301,
            title: "MDV（Medical Data Vision）の特徴と活用",
            duration: "20分",
            content: `
                <h2>MDV（Medical Data Vision）の特徴と活用</h2>
                <p>MDVはDPC病院の退院患者データ（レセプト＋DPCデータ）を提供する国内最大級のリアルワールドデータベースです。急性期入院患者の治療実態を詳細に分析できます。</p>

                <h3>MDVの基本情報</h3>
                <table>
                    <thead>
                        <tr><th>項目</th><th>内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>データソース</td><td>DPC病院の退院患者データ（レセプト＋DPCデータ）</td></tr>
                        <tr><td>データ規模</td><td>約480万件/年の急性期入院データ</td></tr>
                        <tr><td>追跡性</td><td>匿名化済み患者単位での追跡が可能（院内）</td></tr>
                    </tbody>
                </table>

                <h3>収録情報の詳細</h3>
                <ul>
                    <li><strong>患者背景：</strong>年齢・性別・入院経路</li>
                    <li><strong>診断情報：</strong>ICD-10コード・主傷病名・併存症</li>
                    <li><strong>処方情報：</strong>薬剤名・投与量・投与日数・切替パターン</li>
                    <li><strong>処置情報：</strong>手術・検査・リハビリ</li>
                    <li><strong>転帰情報：</strong>退院先・在院日数</li>
                </ul>

                <h3>MDVの強み</h3>
                <ul>
                    <li>患者単位の治療フロー（ペイシェントジャーニー）の可視化が可能</li>
                    <li>併用薬・前治療・後治療の分析ができる</li>
                    <li>DPC病院のカバレッジが高い</li>
                </ul>

                <div class="warning-box">
                    <h4>MDVの限界</h4>
                    <p>MDVはDPC病院の入院データが中心のため、外来患者のフォローアップや慢性疾患の長期追跡には向きません。また、検査値データの収録は一部に限られます。長期外来追跡が必要な場合はJMDCの利用を検討してください。</p>
                </div>
            `,
            quiz: [
                {
                    question: "MDVデータベースの主なデータソースはどれか？",
                    options: ["健康保険組合のレセプトデータ", "DPC病院の退院患者データ", "調剤薬局の処方データ", "全国民のレセプトデータ"],
                    correct: 1,
                    explanation: "MDVはDPC病院の退院患者データ（レセプト＋DPCデータ）を提供するデータベースで、約480万件/年の急性期入院データを収録しています。"
                },
                {
                    question: "MDVデータベースで実現できる分析として正しいものはどれか？",
                    options: ["健診データ（HbA1c等）との紐付け分析", "ペイシェントジャーニー（治療フロー）の可視化", "75歳以上高齢者の網羅的な分析", "外来患者の長期フォローアップ"],
                    correct: 1,
                    explanation: "MDVの強みは、患者単位の治療フロー（ペイシェントジャーニー）を可視化できることです。併用薬・前治療・後治療の分析が可能です。健診データとの紐付けはJMDCの強みです。"
                },
                {
                    question: "MDVが収録する情報に含まれないものはどれか？",
                    options: ["ICD-10コードによる診断情報", "薬剤の投与量・投与日数", "退院先・在院日数", "患者の健診結果（血液検査値等）の完全データ"],
                    correct: 3,
                    explanation: "MDVは検査値データの収録が一部に限られています。健診結果を含む完全な検査値データが必要な場合は、JMDCが適しています。"
                }
            ]
        },
        {
            id: 302,
            title: "JMDC（Japan Medical Data Center）の特徴と活用",
            duration: "20分",
            content: `
                <h2>JMDC（Japan Medical Data Center）の特徴と活用</h2>
                <p>JMDCは健康保険組合のレセプトデータと健診データを紐付けた独自のデータベースを提供しています。外来の長期フォローアップと検査値データを活用した分析に強みがあります。</p>

                <h3>JMDCの基本情報</h3>
                <table>
                    <thead>
                        <tr><th>項目</th><th>内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>データソース</td><td>健康保険組合のレセプトデータ＋健診データ</td></tr>
                        <tr><td>データ規模</td><td>約1,600万人の累積データ（主に企業の被保険者）</td></tr>
                        <tr><td>データ種別</td><td>外来・入院・調剤・DPC・健診を横断的に追跡</td></tr>
                    </tbody>
                </table>

                <h3>JMDCの独自の強み</h3>
                <ul>
                    <li><strong>健診データとの紐付け：</strong>HbA1c、LDL-C、eGFR等の検査値推移が見える</li>
                    <li><strong>長期フォロー：</strong>外来の慢性疾患追跡に最適</li>
                    <li><strong>家族構成の追跡：</strong>被保険者と被扶養者を関連付けた分析が可能</li>
                </ul>

                <h3>JMDCの注意点</h3>
                <ul>
                    <li>健保組合中心のため、75歳以上（後期高齢者）のデータが少ない</li>
                    <li>就労世代にバイアスがあり、企業の被保険者が中心</li>
                    <li>国民全体の代表性には制限がある</li>
                </ul>

                <div class="info-box">
                    <h4>JMDCの活用例</h4>
                    <p>例えば糖尿病領域では、HbA1cの値に基づいて患者をセグメント化し、各セグメントの治療パターンや薬剤選択の違いを分析できます。「HbA1cが8%以上の患者でSGLT2阻害薬の処方が増えている」といった検査値ベースの洞察が得られるのはJMDCならではです。</p>
                </div>
            `,
            quiz: [
                {
                    question: "JMDCデータベースの最大の独自の強みはどれか？",
                    options: ["DPC病院のカバレッジが高い", "健診データとの紐付けにより検査値ベースの分析が可能", "全国民のレセプトデータを網羅", "副作用報告データを収録"],
                    correct: 1,
                    explanation: "JMDCの最大の強みは、健康保険組合のレセプトデータと健診データを紐付けることで、HbA1c、LDL-C、eGFR等の検査値推移を含めた分析ができることです。"
                },
                {
                    question: "JMDCデータベースを利用する際に注意すべき点はどれか？",
                    options: ["入院データが取得できない", "月次での更新が行われない", "75歳以上の高齢者データが少ない", "処方情報が含まれない"],
                    correct: 2,
                    explanation: "JMDCは健保組合中心のデータベースであるため、後期高齢者（75歳以上）のデータが少なく、就労世代にバイアスがある点に注意が必要です。"
                },
                {
                    question: "外来の慢性疾患を長期間追跡する分析に最も適したRWDデータベースはどれか？",
                    options: ["MDV", "JMDC", "NDBオープンデータ", "MCI"],
                    correct: 1,
                    explanation: "JMDCは外来・入院・調剤・健診を横断的に追跡でき、特に外来の長期フォローアップに強みがあります。慢性疾患の追跡に最適です。"
                }
            ]
        },
        {
            id: 303,
            title: "NDBとその他のRWDデータベース",
            duration: "20分",
            content: `
                <h2>NDB（ナショナルデータベース）とその他のRWD</h2>
                <p>NDBは厚生労働省が管理する全国民のレセプト情報・特定健診情報のデータベースです。国民皆保険制度を活かした網羅性が最大の強みです。</p>

                <h3>NDBの概要</h3>
                <table>
                    <thead>
                        <tr><th>区分</th><th>内容</th><th>アクセス方法</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>NDBオープンデータ</td><td>薬効分類別の処方数量・医療機関数。都道府県別・年齢階級別のクロス集計</td><td>無料公開</td></tr>
                        <tr><td>NDB第三者提供</td><td>個票データの学術利用が可能</td><td>申請制（審査に数ヶ月～1年）</td></tr>
                    </tbody>
                </table>

                <h3>RWDデータベース比較</h3>
                <table>
                    <thead>
                        <tr><th>DB名</th><th>データソース</th><th>母集団の特徴</th><th>患者追跡</th><th>検査値</th><th>強み</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>MDV</td><td>DPC病院レセプト</td><td>急性期入院患者中心</td><td>可（院内）</td><td>一部</td><td>入院治療の詳細分析</td></tr>
                        <tr><td>JMDC</td><td>健保組合レセプト＋健診</td><td>就労世代中心</td><td>可（長期）</td><td>豊富</td><td>検査値付き長期追跡</td></tr>
                        <tr><td>NDB</td><td>全レセプト</td><td>全国民</td><td>可（申請制）</td><td>一部</td><td>網羅性が最大</td></tr>
                        <tr><td>DeSC</td><td>複数健保＋DPC</td><td>幅広い年齢層</td><td>可</td><td>あり</td><td>統合データの大規模分析</td></tr>
                        <tr><td>MCI</td><td>調剤レセプト</td><td>調剤薬局利用者</td><td>可</td><td>なし</td><td>処方パターンの詳細分析</td></tr>
                    </tbody>
                </table>

                <h3>DB選定の意思決定フロー</h3>
                <ul>
                    <li><strong>入院治療の詳細（手術・DPC）を見たい</strong> → MDV</li>
                    <li><strong>外来の長期フォロー＋検査値が必要</strong> → JMDC</li>
                    <li><strong>全国規模のマクロ分析をしたい</strong> → NDB</li>
                    <li><strong>調剤の処方パターンを見たい</strong> → MCI</li>
                    <li><strong>複合的な分析が必要</strong> → 複数DB掛け合わせ＋バリデーション</li>
                </ul>

                <div class="info-box">
                    <h4>NDBオープンデータの活用ポイント</h4>
                    <p>NDBオープンデータは無料で誰でもアクセスでき、マクロトレンドの把握や地域分析のベースとして活用できます。有料DBを契約する前の初期調査として、まずNDBオープンデータで全体像を掴むアプローチが費用対効果に優れています。</p>
                </div>
            `,
            quiz: [
                {
                    question: "NDB（ナショナルデータベース）の最大の強みはどれか？",
                    options: ["検査値データが豊富", "全国民をカバーする網羅性", "リアルタイムのデータ更新", "処方パターンの詳細分析"],
                    correct: 1,
                    explanation: "NDBは厚生労働省が管理する全国民のレセプトデータを収録しており、国民皆保険制度を活かした網羅性が最大の強みです。約17億件/年のレセプトデータが蓄積されています。"
                },
                {
                    question: "NDB第三者提供（個票データ）を利用する際の課題はどれか？",
                    options: ["データの網羅性が低い", "審査に数ヶ月～1年かかる", "検査値が全く含まれない", "費用が非常に高額である"],
                    correct: 1,
                    explanation: "NDB第三者提供は個票データの学術利用が可能ですが、審査に数ヶ月～1年かかるケースもあり、利用までのリードタイムが課題です。"
                },
                {
                    question: "調剤薬局での処方パターンを詳細に分析したい場合、最も適したRWDデータベースはどれか？",
                    options: ["MDV", "JMDC", "NDB", "MCI"],
                    correct: 3,
                    explanation: "MCI（メディカル・コミュニケーション・インク）は調剤レセプトを基にしたデータベースで、調剤薬局利用者の処方パターンの詳細分析に強みがあります。"
                }
            ]
        },
        {
            id: 304,
            title: "RWD分析の実践とDB選定",
            duration: "15分",
            content: `
                <h2>RWD分析の実践とDB選定</h2>
                <p>リアルワールドデータ（RWD）の分析では、目的に応じた適切なデータベースの選定が成功の鍵となります。ここでは実践的なDB選定の考え方と、複数DB活用のアプローチを学びます。</p>

                <h3>分析目的別DB選定ガイド</h3>
                <table>
                    <thead>
                        <tr><th>分析目的</th><th>推奨DB</th><th>理由</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>入院患者の治療実態把握</td><td>MDV</td><td>DPC病院の急性期入院データが豊富</td></tr>
                        <tr><td>慢性疾患の外来長期追跡</td><td>JMDC</td><td>外来データの長期追跡と検査値が利用可能</td></tr>
                        <tr><td>全国規模の患者数推計</td><td>NDB</td><td>全国民カバーの網羅性</td></tr>
                        <tr><td>検査値ベースの患者セグメント</td><td>JMDC</td><td>健診データとの紐付けが可能</td></tr>
                        <tr><td>処方切替パターンの分析</td><td>MDVまたはMCI</td><td>患者単位の時系列分析が可能</td></tr>
                    </tbody>
                </table>

                <h3>複数DB活用のバリデーション</h3>
                <p>単一のRWDデータベースには必ずバイアスがあります。重要な分析では、複数のDBで結果をバリデーション（検証）することが推奨されます。</p>
                <ul>
                    <li><strong>MDV（入院中心）</strong>の結果を<strong>JMDC（外来中心）</strong>で検証</li>
                    <li><strong>JMDC（就労世代中心）</strong>の結果を<strong>NDB（全国民）</strong>で一般化可能性を確認</li>
                    <li><strong>IQVIA NPA（市場データ）</strong>の処方トレンドを<strong>RWD</strong>の患者レベルデータで深掘り</li>
                </ul>

                <div class="warning-box">
                    <h4>RWD分析の注意点</h4>
                    <p>RWDはランダム化比較試験（RCT）と異なり、交絡因子のコントロールが困難です。観察研究としての限界を理解した上で、適切な統計手法（傾向スコアマッチング等）を用いることが重要です。結果の解釈にはバイアスの可能性を常に念頭に置いてください。</p>
                </div>
            `,
            quiz: [
                {
                    question: "JMDCデータの結果の一般化可能性を確認するために、バリデーションに適したDBはどれか？",
                    options: ["MDV", "MCI", "NDB", "DeSC"],
                    correct: 2,
                    explanation: "JMDCは就労世代中心のバイアスがあるため、全国民をカバーするNDBで一般化可能性を確認するバリデーションが有効です。"
                },
                {
                    question: "RWD分析で交絡因子をコントロールするために用いられる統計手法はどれか？",
                    options: ["ATC分類分析", "傾向スコアマッチング", "CAGR算出", "クロス集計"],
                    correct: 1,
                    explanation: "RWDは観察研究データであり、交絡因子のコントロールが困難です。傾向スコアマッチング等の統計手法を用いることで、バイアスの影響を軽減できます。"
                },
                {
                    question: "検査値（HbA1c等）に基づいて患者をセグメント化する分析に最も適したDBはどれか？",
                    options: ["MDV", "JMDC", "NDB", "IQVIA JPM"],
                    correct: 1,
                    explanation: "JMDCは健保組合の健診データとレセプトを紐付けているため、HbA1c等の検査値に基づく患者セグメンテーションが可能です。"
                }
            ]
        }
    ]
};
