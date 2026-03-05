const LEVEL2_DATA = {
    id: 2,
    title: "市場データベースの活用",
    icon: "📊",
    description: "IQVIA等の市場データを使った分析手法をマスターする",
    modules: [
        {
            id: 201,
            title: "IQVIA データ群の全体像",
            duration: "20分",
            content: `
                <h2>IQVIA（旧IMS）データ群の全体像</h2>
                <p>IQVIAは製薬業界における市場データの「王様」とも称されるデータプロバイダーです。国内外の医薬品市場に関する多様なデータベースを提供しています。</p>

                <h3>主要データベース一覧</h3>
                <table>
                    <thead>
                        <tr><th>データ名</th><th>内容</th><th>データソース</th><th>更新頻度</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>JPM（Japan Pharmaceutical Market）</strong></td><td>国内医療用医薬品の売上データ。薬効分類別・製品別・企業別に集計</td><td>卸出荷データ</td><td>月次</td></tr>
                        <tr><td><strong>DDD（Drug Distribution Data）</strong></td><td>卸から医療機関への出荷データ。チャネル別（病院/開業医/調剤薬局）で把握可能</td><td>卸売業者</td><td>月次</td></tr>
                        <tr><td><strong>NPA（National Prescription Audit）</strong></td><td>調剤薬局での処方データ（実消化ベース）。処方医・患者属性の推計が可能</td><td>調剤薬局</td><td>月次</td></tr>
                        <tr><td><strong>MIDAS</strong></td><td>グローバル80カ国以上の売上データ</td><td>各国データ</td><td>四半期</td></tr>
                    </tbody>
                </table>

                <h3>データの活用マトリクス</h3>
                <table>
                    <thead>
                        <tr><th>データ</th><th>主な活用シーン</th><th>活用部門</th><th>分析頻度</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>JPM</td><td>市場規模・シェア推移・競合動向</td><td>マーケ・経営企画</td><td>月次</td></tr>
                        <tr><td>DDD</td><td>チャネル別流通分析・地域別分析</td><td>営業企画・SCM</td><td>月次</td></tr>
                        <tr><td>NPA</td><td>処方実態・スイッチ分析・患者フロー</td><td>マーケ・メディカル</td><td>月次～四半期</td></tr>
                        <tr><td>MIDAS</td><td>グローバル市場比較・ベンチマーク</td><td>経営企画・海外事業</td><td>四半期</td></tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>JPMとDDDの違い</h4>
                    <p>JPMは市場全体の規模・シェアを金額・数量ベースで把握するためのデータです。一方DDDは流通チャネル（病院/開業医/調剤薬局）別の分析が可能であり、MRの活動効率評価や地域別の営業戦略立案に活用されます。</p>
                </div>
            `,
            quiz: [
                {
                    question: "IQVIA JPMの主なデータソースはどれか？",
                    options: ["医療機関の電子カルテ", "卸出荷データ", "患者アンケート", "健康保険組合レセプト"],
                    correct: 1,
                    explanation: "JPM（Japan Pharmaceutical Market）は卸出荷データに基づく国内医療用医薬品の売上データです。薬効分類別・製品別・企業別に集計されます。"
                },
                {
                    question: "グローバル80カ国以上の売上データをカバーするIQVIAのデータベースはどれか？",
                    options: ["JPM", "DDD", "NPA", "MIDAS"],
                    correct: 3,
                    explanation: "MIDASはグローバル80カ国以上の売上データをカバーしており、グローバル市場比較や海外展開の意思決定に活用されます。"
                },
                {
                    question: "調剤薬局での処方データ（実消化ベース）を提供するIQVIAデータベースはどれか？",
                    options: ["JPM", "DDD", "NPA", "MIDAS"],
                    correct: 2,
                    explanation: "NPA（National Prescription Audit）は調剤薬局での処方データ（実消化ベース）を提供し、処方医・患者属性の推計が可能です。処方実態の把握やスイッチ分析に活用されます。"
                },
                {
                    question: "DDDデータの主な活用部門として最も適切なものはどれか？",
                    options: ["PV/安全性部門", "営業企画・SCM", "メディカルアフェアーズ", "知財部門"],
                    correct: 1,
                    explanation: "DDD（Drug Distribution Data）は卸から医療機関への出荷データで、チャネル別（病院/開業医/調剤薬局）の流通分析や地域別分析が可能なため、営業企画やSCM部門が主に活用します。"
                }
            ]
        },
        {
            id: 202,
            title: "市場分析の5ステップフレームワーク",
            duration: "20分",
            content: `
                <h2>市場分析の5ステップフレームワーク</h2>
                <p>IQVIAデータを用いた市場分析には、体系的なアプローチが必要です。以下の5ステップフレームワークに従うことで、漏れのない分析が可能になります。</p>

                <h3>Step 1：市場定義</h3>
                <p>まず「どの薬効領域を市場と定義するか」を決定します。ATC分類（解剖治療化学分類法）のどのレベルで切るかが重要です。</p>
                <table>
                    <thead>
                        <tr><th>ATCレベル</th><th>例（糖尿病領域）</th><th>範囲</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>ATC2</td><td>A10（糖尿病用薬）</td><td>最も広い定義</td></tr>
                        <tr><td>ATC3</td><td>A10B（血糖降下薬・注射除く）</td><td>中程度の定義</td></tr>
                        <tr><td>ATC4</td><td>A10BK（SGLT2阻害薬）</td><td>最も狭い定義</td></tr>
                    </tbody>
                </table>

                <h3>Step 2：市場規模とトレンド</h3>
                <ul>
                    <li>過去5年の市場成長率（CAGR）の算出</li>
                    <li>金額 vs 数量の乖離分析（薬価改定の影響を分離）</li>
                    <li>季節性・特需の有無の確認</li>
                </ul>

                <h3>Step 3：競合シェア分析</h3>
                <ul>
                    <li>上位5製品のシェア推移のトラッキング</li>
                    <li>新規参入品のインパクト評価</li>
                    <li>後発品（GE）浸透率の把握</li>
                </ul>

                <h3>Step 4：チャネル・地域分析</h3>
                <ul>
                    <li>病院 vs 開業医 vs 調剤薬局の構成比</li>
                    <li>エリア別の市場特性の把握</li>
                    <li>大学病院 vs 基幹病院の処方傾向の比較</li>
                </ul>

                <h3>Step 5：将来予測</h3>
                <ul>
                    <li>パイプライン品の上市インパクト</li>
                    <li>薬価改定シナリオ（隔年改定の影響）</li>
                    <li>ガイドライン改訂の影響</li>
                </ul>

                <div class="warning-box">
                    <h4>実務Tips：市場定義の重要性</h4>
                    <p>市場を「ATC4」で定義するか「競合する作用機序」で定義するかで、シェアも成長率もまったく変わります。市場定義こそが戦略の出発点です。分析の前に関係者間で市場定義を合意することが成功の鍵です。</p>
                </div>
            `,
            quiz: [
                {
                    question: "市場分析の5ステップで最初に行うべきことは何か？",
                    options: ["競合シェア分析", "市場規模とトレンドの把握", "市場定義", "将来予測"],
                    correct: 2,
                    explanation: "Step 1は「市場定義」です。どの薬効領域を市場と定義するかを最初に決めないと、以降の分析の前提が定まりません。市場定義こそが戦略の出発点です。"
                },
                {
                    question: "ATC分類においてA10BK（SGLT2阻害薬）はどのレベルに該当するか？",
                    options: ["ATC1", "ATC2", "ATC3", "ATC4"],
                    correct: 3,
                    explanation: "A10BK（SGLT2阻害薬）はATC4レベルに該当し、最も狭い市場定義となります。ATC2はA10（糖尿病用薬全体）、ATC3はA10B（血糖降下薬・注射除く）に該当します。"
                },
                {
                    question: "市場規模分析において、金額と数量の乖離が生じる主な原因はどれか？",
                    options: ["患者数の急増", "薬価改定の影響", "診療ガイドラインの変更", "MR活動の強化"],
                    correct: 1,
                    explanation: "金額ベースと数量ベースの市場規模に乖離が生じる主な原因は薬価改定です。薬価が引き下げられると、処方数量が増えても金額ベースの市場規模は縮小することがあります。"
                }
            ]
        },
        {
            id: 203,
            title: "競合分析とシェア評価の実践",
            duration: "20分",
            content: `
                <h2>競合分析とシェア評価の実践</h2>
                <p>市場データを活用した競合分析は、製品戦略立案の基盤となります。ここではIQVIAデータを用いた実践的な競合分析手法を学びます。</p>

                <h3>シェア分析の基本アプローチ</h3>
                <table>
                    <thead>
                        <tr><th>分析項目</th><th>利用データ</th><th>分析のポイント</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>金額シェア推移</td><td>JPM</td><td>薬価改定の影響を含む実収入ベース</td></tr>
                        <tr><td>数量シェア推移</td><td>JPM</td><td>薬価改定の影響を排除した処方動向</td></tr>
                        <tr><td>チャネル別シェア</td><td>DDD</td><td>病院・開業医・薬局の各チャネルでの強弱</td></tr>
                        <tr><td>処方パターン</td><td>NPA</td><td>新規処方・継続処方・スイッチの動向</td></tr>
                    </tbody>
                </table>

                <h3>スイッチ分析とは</h3>
                <p>スイッチ分析とは、ある製品から別の製品への処方変更（切り替え）パターンを分析する手法です。NPAデータを活用することで、以下を把握できます。</p>
                <ul>
                    <li>自社品からどの競合品への流出が多いか</li>
                    <li>競合品からどれだけ自社品に切り替えが起きているか</li>
                    <li>新規参入品が既存品のシェアにどの程度影響しているか</li>
                </ul>

                <h3>後発品（GE）浸透率分析</h3>
                <p>特許満了後の後発品浸透は市場構造を大きく変えます。数量ベースで1年以内にGEシェアが80%を超えるケースもあり、先発品のLCM戦略やAG（オーソライズドジェネリック）戦略の検討が必要です。</p>

                <div class="info-box">
                    <h4>分析の視点</h4>
                    <p>競合分析では「現在のシェア」だけでなく、「シェアの変化の方向性と速度」が重要です。トレンドの変曲点を早期に捉えることで、先手を打った戦略立案が可能になります。</p>
                </div>
            `,
            quiz: [
                {
                    question: "スイッチ分析を行う際に最も適したIQVIAデータはどれか？",
                    options: ["JPM", "DDD", "NPA", "MIDAS"],
                    correct: 2,
                    explanation: "NPA（National Prescription Audit）は調剤薬局での処方データ（実消化ベース）であり、処方変更（スイッチ）パターンの分析に最も適しています。"
                },
                {
                    question: "後発品（GE）の市場浸透に関する記述として正しいものはどれか？",
                    options: ["GEは通常、数量ベースで参入後5年かけて50%に到達する", "GEは数量ベースで1年以内にシェア80%を超えるケースもある", "GEの浸透率は金額ベースで評価すべきである", "GE参入は先発品の金額シェアにほとんど影響しない"],
                    correct: 1,
                    explanation: "後発品は数量ベースで1年以内にシェア80%を超えるケースもあり、先発品に大きなインパクトを与えます。このため、先発品のLCM戦略やAG戦略の検討が重要になります。"
                },
                {
                    question: "チャネル別シェア分析に最も適したIQVIAデータはどれか？",
                    options: ["JPM", "DDD", "NPA", "MIDAS"],
                    correct: 1,
                    explanation: "DDD（Drug Distribution Data）は卸から医療機関への出荷データで、病院・開業医・調剤薬局のチャネル別に把握できるため、チャネル別シェア分析に最適です。"
                }
            ]
        }
    ]
};
