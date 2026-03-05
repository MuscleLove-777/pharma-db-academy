const LEVEL1_DATA = {
    id: 1,
    title: "データベース基礎と製薬バリューチェーン",
    icon: "📚",
    description: "製薬企業におけるデータベースの重要性と基礎知識を学ぶ",
    modules: [
        {
            id: 101,
            title: "製薬バリューチェーンとデータの関係",
            duration: "15分",
            content: `
                <h2>製薬バリューチェーンとデータの関係</h2>
                <p>製薬企業のバリューチェーンは、基礎研究から市販後管理まで多岐にわたります。各フェーズで異なるデータベースが活用されており、適切なデータソースの理解が業務効率と意思決定の質を左右します。</p>

                <h3>バリューチェーンとデータベースの対応</h3>
                <table>
                    <thead>
                        <tr><th>フェーズ</th><th>主な活動</th><th>利用するDB</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>基礎研究</td><td>標的探索・化合物スクリーニング</td><td>特許DB、論文DB、標的DB</td></tr>
                        <tr><td>非臨床</td><td>毒性試験・薬効薬理試験</td><td>毒性DB、動物試験DB</td></tr>
                        <tr><td>臨床開発</td><td>治験実施・データ収集</td><td>治験DB、患者DB、競合DB</td></tr>
                        <tr><td>承認申請</td><td>規制当局への申請・対応</td><td>薬事DB、審査DB</td></tr>
                        <tr><td>上市</td><td>販売開始・マーケティング</td><td>売上DB、処方DB、市場DB</td></tr>
                        <tr><td>市販後</td><td>安全性監視・リアルワールド分析</td><td>安全性DB、RWD、疫学DB</td></tr>
                        <tr><td>LCM</td><td>ライフサイクル管理・適応拡大</td><td>特許DB、競合DB</td></tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>ポイント</h4>
                    <p>製薬企業では、バリューチェーンの各段階で異なる種類のデータベースが必要です。全体像を把握することが、データ活用戦略の第一歩となります。</p>
                </div>
            `,
            quiz: [
                {
                    question: "製薬バリューチェーンにおいて「非臨床」フェーズで主に利用されるデータベースはどれか？",
                    options: ["売上DB・処方DB", "毒性DB・動物試験DB", "特許DB・論文DB", "安全性DB・RWD"],
                    correct: 1,
                    explanation: "非臨床フェーズでは、毒性試験や動物試験に関するデータベースが主に活用されます。売上DBやRWDは上市後、特許DB・論文DBは基礎研究フェーズが中心です。"
                },
                {
                    question: "市販後フェーズで特に重要となるデータベースはどれか？",
                    options: ["標的DB", "治験DB", "安全性DB・RWD（リアルワールドデータ）", "動物試験DB"],
                    correct: 2,
                    explanation: "市販後フェーズでは、安全性監視（ファーマコビジランス）やリアルワールドでの治療実態を把握するため、安全性DBやRWDが特に重要です。"
                },
                {
                    question: "LCM（ライフサイクルマネジメント）のフェーズで主に参照するDBの組み合わせとして適切なものはどれか？",
                    options: ["毒性DB・動物試験DB", "特許DB・競合DB", "売上DB・処方DB", "論文DB・標的DB"],
                    correct: 1,
                    explanation: "LCMでは後発品参入に備えた特許戦略や、競合状況の把握が重要であるため、特許DBと競合DBの活用が中心となります。"
                }
            ]
        },
        {
            id: 102,
            title: "データ活用の成熟度モデル",
            duration: "15分",
            content: `
                <h2>データ活用の成熟度モデル</h2>
                <p>製薬企業におけるデータ活用の成熟度は4段階に分類できます。自社がどのレベルにあるかを把握し、段階的にレベルアップを目指すことが重要です。</p>

                <h3>4段階の成熟度レベル</h3>
                <table>
                    <thead>
                        <tr><th>レベル</th><th>名称</th><th>特徴</th><th>問い</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Level 4</td><td>予測型（Predictive）</td><td>AIによる売上予測・患者数推計</td><td>「次に何が起きるか？」</td></tr>
                        <tr><td>Level 3</td><td>分析型（Analytical）</td><td>要因分析・クロス集計</td><td>「なぜそうなったか？」</td></tr>
                        <tr><td>Level 2</td><td>可視化型（Descriptive）</td><td>ダッシュボード・レポート</td><td>「何が起きているか？」</td></tr>
                        <tr><td>Level 1</td><td>蓄積型（Collecting）</td><td>データはあるが活用できていない</td><td>「データはどこ？」</td></tr>
                    </tbody>
                </table>

                <div class="warning-box">
                    <h4>多くの企業が直面する課題</h4>
                    <p>多くの製薬企業はLevel 1（蓄積型）に留まっています。数百万～数千万円のデータベース契約をしているにもかかわらず、その投資に見合った「意思決定の質の向上」が実現できていないケースが大半です。</p>
                </div>

                <h3>各レベルへのステップアップに必要なこと</h3>
                <ul>
                    <li><strong>Level 1 → Level 2：</strong>BIツール導入、定型レポートの自動化</li>
                    <li><strong>Level 2 → Level 3：</strong>分析人材の育成、クロスファンクショナルな分析体制</li>
                    <li><strong>Level 3 → Level 4：</strong>AI/ML活用、予測モデルの構築、データサイエンスチームの設置</li>
                </ul>
            `,
            quiz: [
                {
                    question: "データ活用成熟度モデルで「なぜそうなったか？」という問いに答えるレベルはどれか？",
                    options: ["Level 1：蓄積型", "Level 2：可視化型", "Level 3：分析型", "Level 4：予測型"],
                    correct: 2,
                    explanation: "Level 3（分析型・Analytical）は「なぜそうなったか？」という要因分析やクロス集計を行うレベルです。Level 2は「何が起きているか」、Level 4は「次に何が起きるか」に対応します。"
                },
                {
                    question: "多くの製薬企業が位置していると言われるデータ活用の成熟度レベルはどれか？",
                    options: ["Level 4：予測型", "Level 3：分析型", "Level 2：可視化型", "Level 1：蓄積型"],
                    correct: 3,
                    explanation: "多くの企業はLevel 1（蓄積型）に留まっており、データはあるが十分に活用できていない状態です。"
                },
                {
                    question: "Level 2からLevel 3へステップアップするために特に必要なものはどれか？",
                    options: ["BIツールの導入", "分析人材の育成とクロスファンクショナルな分析体制", "AI/MLの導入", "データベース契約の追加"],
                    correct: 1,
                    explanation: "Level 2（可視化型）からLevel 3（分析型）へは、単なるレポーティングから要因分析へ進むため、分析人材の育成とクロスファンクショナルな分析体制の構築が不可欠です。"
                }
            ]
        },
        {
            id: 103,
            title: "商用DBの全体像と分類",
            duration: "15分",
            content: `
                <h2>商用データベースの全体像と分類</h2>
                <p>製薬業界で活用されるデータベースは大きく7つのカテゴリに分類できます。それぞれの特徴を理解し、目的に応じた適切なデータベースを選択することが重要です。</p>

                <h3>7つのデータカテゴリ</h3>
                <table>
                    <thead>
                        <tr><th>カテゴリ</th><th>代表的なDB</th><th>主な用途</th><th>費用</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>市場データ</td><td>IQVIA JPM / NPA / DDD / MIDAS</td><td>市場規模・シェア・処方実態</td><td>有料</td></tr>
                        <tr><td>患者・RWD</td><td>MDV / JMDC / NDB / DeSC</td><td>治療実態・患者フロー・疫学</td><td>有料/一部無料</td></tr>
                        <tr><td>臨床開発</td><td>Cortellis / Evaluate / ClinicalTrials.gov</td><td>パイプライン分析・競合調査</td><td>有料/一部無料</td></tr>
                        <tr><td>薬事・規制</td><td>PMDA / FDA / EMA</td><td>承認情報・審査報告書</td><td>無料</td></tr>
                        <tr><td>特許・知財</td><td>J-PlatPat / Derwent / Orange Book</td><td>特許調査・パテントクリフ分析</td><td>有料/一部無料</td></tr>
                        <tr><td>論文・エビデンス</td><td>PubMed / Embase / 医中誌 / Cochrane</td><td>文献レビュー・KOL分析</td><td>有料/一部無料</td></tr>
                        <tr><td>安全性・PV</td><td>JADER / FAERS / VigiBase</td><td>副作用シグナル検出</td><td>無料/一部有料</td></tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>目的別DB逆引きの考え方</h4>
                    <p>「何を知りたいか」からデータベースを選ぶ逆引きの思考が重要です。例えば「国内市場規模を知りたい」ならIQVIA JPM、「患者の治療実態を見たい」ならMDVやJMDC、「競合パイプラインを調べたい」ならCortellisやPharmaprojectsを選択します。</p>
                </div>

                <h3>無料と有料の使い分け</h3>
                <p>まず無料DB（PubMed、ClinicalTrials.gov、PMDA、NDBオープンデータ等）で仮説を立て、有料DBで詳細な分析を行うという段階的アプローチが費用対効果を最大化します。</p>
            `,
            quiz: [
                {
                    question: "製薬業界で活用されるデータベースの7つのカテゴリに含まれないものはどれか？",
                    options: ["市場データ", "人事・労務データ", "安全性・PVデータ", "特許・知財データ"],
                    correct: 1,
                    explanation: "製薬業界のデータベースは、市場データ、患者・RWD、臨床開発、薬事・規制、特許・知財、論文・エビデンス、安全性・PVの7カテゴリです。人事・労務データは含まれません。"
                },
                {
                    question: "審査報告書や承認情報を調べる際に利用するデータベースとして最も適切なものはどれか？",
                    options: ["IQVIA JPM", "MDV", "PMDA", "Embase"],
                    correct: 2,
                    explanation: "PMDA（医薬品医療機器総合機構）は承認審査情報（審査報告書・申請資料概要）を無料で公開しており、薬事・規制情報の基本データソースです。"
                },
                {
                    question: "DB活用の費用対効果を最大化するアプローチとして正しいものはどれか？",
                    options: ["全ての有料DBを契約する", "無料DBのみで全てを賄う", "無料DBで仮説を立て、有料DBで詳細分析を行う", "有料DBのみ利用する"],
                    correct: 2,
                    explanation: "まず無料DB（PubMed、PMDA、NDBオープンデータ等）で仮説を立ててから、有料DBで深掘り分析を行う段階的アプローチが、費用対効果を最大化するベストプラクティスです。"
                }
            ]
        }
    ]
};
