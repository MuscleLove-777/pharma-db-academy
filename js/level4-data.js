const LEVEL4_DATA = {
    id: 4,
    title: "臨床開発・薬事データベース",
    icon: "🔬",
    description: "パイプライン分析、競合調査、薬事・規制情報を読み解く",
    modules: [
        {
            id: 401,
            title: "臨床開発データベースの全体像",
            duration: "20分",
            content: `
                <h2>臨床開発データベースの全体像</h2>
                <p>臨床開発フェーズでは、自社パイプラインの位置付けと競合状況の把握が不可欠です。複数のデータベースを組み合わせることで、精度の高いパイプライン分析が可能になります。</p>

                <h3>主要な臨床開発データベース</h3>
                <table>
                    <thead>
                        <tr><th>DB名</th><th>提供元</th><th>特徴</th><th>費用</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>ClinicalTrials.gov</strong></td><td>NIH（米国）</td><td>世界最大の臨床試験登録DB。43万件以上。試験デザイン・エンドポイント・結果が閲覧可能</td><td>無料</td></tr>
                        <tr><td><strong>Cortellis</strong></td><td>Clarivate</td><td>パイプライン情報のゴールドスタンダード。開発段階・作用機序・適応症・上市予測。ディール情報も網羅</td><td>有料</td></tr>
                        <tr><td><strong>Evaluate Pharma</strong></td><td>Evaluate</td><td>売上予測（コンセンサス予測）に強み。NPVベースのパイプライン価値評価</td><td>有料</td></tr>
                        <tr><td><strong>Pharmaprojects</strong></td><td>Citeline/Informa</td><td>世界最大級のパイプラインDB。7万件以上の開発品をトラッキング</td><td>有料</td></tr>
                        <tr><td><strong>JAPIC</strong></td><td>日本医薬情報センター</td><td>国内治験の登録・結果情報</td><td>無料/一部有料</td></tr>
                    </tbody>
                </table>

                <h3>データベースの使い分け</h3>
                <ul>
                    <li><strong>初期スクリーニング：</strong>ClinicalTrials.gov（無料）で競合治験の全体像を把握</li>
                    <li><strong>詳細パイプライン分析：</strong>Cortellisで開発段階・作用機序・ディール情報を深掘り</li>
                    <li><strong>売上予測・価値評価：</strong>Evaluate Pharmaでコンセンサス予測とNPV評価</li>
                    <li><strong>網羅的な開発品リスト：</strong>Pharmaprojectsで標的別・疾患別の開発動向を調査</li>
                </ul>

                <div class="info-box">
                    <h4>BD戦略への活用</h4>
                    <p>CortellisはライセンスインやM&Aのディール情報も網羅しています。BD（ビジネスデベロップメント）部門では、ディールスカウティングやライセンス契約の妥当性評価にCortellisとEvaluate Pharmaを組み合わせて活用します。</p>
                </div>
            `,
            quiz: [
                {
                    question: "パイプライン情報の「ゴールドスタンダード」と称されるデータベースはどれか？",
                    options: ["ClinicalTrials.gov", "Cortellis", "Evaluate Pharma", "JAPIC"],
                    correct: 1,
                    explanation: "Cortellis（Clarivate社）はパイプライン情報のゴールドスタンダードとされ、開発段階・作用機序・適応症・上市予測・ディール情報を包括的に提供します。"
                },
                {
                    question: "売上のコンセンサス予測やNPVベースの製品価値評価に強みを持つDBはどれか？",
                    options: ["ClinicalTrials.gov", "Cortellis", "Evaluate Pharma", "Pharmaprojects"],
                    correct: 2,
                    explanation: "Evaluate Pharmaは売上予測（コンセンサス予測）とNPVベースのパイプライン価値評価に強みを持ち、投資判断やポートフォリオ分析に活用されます。"
                },
                {
                    question: "臨床試験の初期スクリーニングとして、まず利用すべき無料データベースはどれか？",
                    options: ["Cortellis", "Evaluate Pharma", "ClinicalTrials.gov", "Pharmaprojects"],
                    correct: 2,
                    explanation: "ClinicalTrials.govは世界最大の無料臨床試験登録データベースで、43万件以上の試験情報が閲覧可能です。まずここで競合治験の全体像を把握することが推奨されます。"
                }
            ]
        },
        {
            id: 402,
            title: "パイプライン分析と製品価値評価",
            duration: "20分",
            content: `
                <h2>パイプライン分析と製品価値評価</h2>
                <p>競合パイプラインの分析と自社製品の価値評価は、経営判断の核心です。ここではパイプラインマッピングとNPV評価の手法を学びます。</p>

                <h3>競合パイプラインマッピング</h3>
                <p>パイプラインマッピングでは、同一疾患領域の開発品をフェーズ別に配置し、以下のポイントを分析します。</p>
                <ul>
                    <li>自社品の上市時に市場にいる競合は誰か？</li>
                    <li>First-in-class（最初の作用機序）か Best-in-class（同機序で最良）か？</li>
                    <li>競合の試験デザイン（エンドポイント・対照群）はどうなっているか？</li>
                </ul>

                <h3>NPV（正味現在価値）評価の基本</h3>
                <p>Evaluate Pharmaを用いた製品価値評価では、リスク調整済みNPV（rNPV）が基本指標です。</p>

                <div class="info-box">
                    <h4>rNPVの計算式</h4>
                    <p><strong>リスク調整済NPV = 各年度の予測売上 x 成功確率 x 割引係数 の総和</strong></p>
                </div>

                <h3>評価の構成要素</h3>
                <table>
                    <thead>
                        <tr><th>要素</th><th>内容</th><th>情報源</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>ピーク売上予測</td><td>上市後の最大年間売上見込み</td><td>Evaluate Pharma / 社内予測</td></tr>
                        <tr><td>成功確率</td><td>現フェーズから承認に至る確率</td><td>業界平均データ / Cortellis</td></tr>
                        <tr><td>上市予定時期</td><td>承認・上市の見込み年</td><td>Cortellis / ClinicalTrials.gov</td></tr>
                        <tr><td>特許満了時期</td><td>独占販売期間の終了時期</td><td>特許DB / Orange Book</td></tr>
                        <tr><td>割引率（WACC）</td><td>資本コスト（通常8～12%）</td><td>社内財務データ</td></tr>
                    </tbody>
                </table>

                <h3>ライセンス契約への応用</h3>
                <p>rNPV評価はライセンス契約の妥当性判断に直結します。例えば「アップフロント50億＋マイルストン100億円の条件は、rNPV 180億円の製品に対して妥当か？」という判断に活用します。</p>

                <div class="warning-box">
                    <h4>NPV評価の限界</h4>
                    <p>NPV評価はあくまで推計であり、成功確率や売上予測の前提が変わると結果が大きく変動します。感度分析（シナリオ分析）を必ず実施し、楽観・中立・悲観の3パターンで評価することが重要です。</p>
                </div>
            `,
            quiz: [
                {
                    question: "rNPV（リスク調整済NPV）の計算において、売上予測に乗じる要素として正しい組み合わせはどれか？",
                    options: ["市場シェア と 薬価", "成功確率 と 割引係数", "患者数 と 投与期間", "競合数 と マーケットサイズ"],
                    correct: 1,
                    explanation: "rNPVは「各年度の予測売上 x 成功確率 x 割引係数」の総和で算出されます。成功確率で開発リスクを、割引係数で将来キャッシュフローの時間価値を反映します。"
                },
                {
                    question: "パイプラインマッピングで確認すべきポイントに含まれないものはどれか？",
                    options: ["自社品上市時の競合状況", "First-in-classかBest-in-classか", "競合の試験デザイン", "競合企業のMR数"],
                    correct: 3,
                    explanation: "パイプラインマッピングでは、自社品上市時の競合状況、First-in-class/Best-in-classの位置付け、競合の試験デザイン等を分析します。MR数は営業戦略の要素であり、パイプラインマッピングの対象外です。"
                },
                {
                    question: "ライセンス契約の妥当性を評価する際、rNPVと比較するものはどれか？",
                    options: ["市場規模全体", "ライセンス料の総額（アップフロント＋マイルストン）", "臨床試験のサンプルサイズ", "特許出願件数"],
                    correct: 1,
                    explanation: "ライセンス契約の妥当性は、対象製品のrNPVに対してライセンス料（アップフロント＋マイルストンの総額）が適切かどうかで判断します。"
                }
            ]
        },
        {
            id: 403,
            title: "薬事・規制データベースの活用",
            duration: "20分",
            content: `
                <h2>薬事・規制データベースの活用</h2>
                <p>薬事・規制情報のデータベースは全て無料で利用可能であり、承認戦略の立案や競合品の審査経緯の調査に不可欠です。</p>

                <h3>主要な薬事データベース</h3>
                <table>
                    <thead>
                        <tr><th>DB名</th><th>管轄</th><th>主な情報</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>PMDA</strong></td><td>日本</td><td>承認審査情報（審査報告書・申請資料概要）、添付文書・IF、安全性情報（副作用報告・PBRER）、後発医薬品情報</td></tr>
                        <tr><td><strong>FDA</strong></td><td>米国</td><td>Drugs@FDA（承認審査資料）、Orange Book（特許・独占権）、FAERS（有害事象報告）</td></tr>
                        <tr><td><strong>EMA</strong></td><td>EU</td><td>EPAR（欧州パブリックアセスメントレポート）</td></tr>
                        <tr><td><strong>薬価基準収載品目表</strong></td><td>厚労省</td><td>全収載品目の薬価一覧・改定履歴</td></tr>
                    </tbody>
                </table>

                <h3>PMDA審査報告書の読み方 ── 5つの必読ポイント</h3>
                <ol>
                    <li><strong>審査上の論点：</strong>機構（PMDA）がどこに懸念を持ったか。自社品の申請で同じ論点を避けるヒントになる</li>
                    <li><strong>臨床試験の評価：</strong>どの試験がピボタルとされたか。エンドポイント・統計手法への機構の見解</li>
                    <li><strong>安全性の議論：</strong>どの副作用がリスクとして議論されたか。RMP（リスク管理計画）の内容</li>
                    <li><strong>用法用量の設定根拠：</strong>なぜその用量が選ばれたか。自社品の用量設定の参考に</li>
                    <li><strong>承認条件：</strong>市販後調査の要件や追加の臨床試験の求め</li>
                </ol>

                <div class="info-box">
                    <h4>審査報告書は「競合分析の宝庫」</h4>
                    <p>競合品の審査報告書には、PMDAが指摘した課題や議論の経緯が詳細に記載されています。自社品の開発・申請戦略に活かせる非常に貴重な情報源です。特に、審査上の論点と安全性の議論は、自社品の開発プランに反映すべき重要な示唆を含んでいます。</p>
                </div>
            `,
            quiz: [
                {
                    question: "PMDA審査報告書で読むべき5つのポイントに含まれないものはどれか？",
                    options: ["審査上の論点", "臨床試験の評価", "競合企業の営業戦略", "承認条件"],
                    correct: 2,
                    explanation: "審査報告書で読むべき5つのポイントは、審査上の論点、臨床試験の評価、安全性の議論、用法用量の設定根拠、承認条件です。競合企業の営業戦略は審査報告書には記載されません。"
                },
                {
                    question: "FDA Orange Bookで確認できる情報はどれか？",
                    options: ["売上予測データ", "特許・独占権情報", "臨床試験デザイン", "処方実態データ"],
                    correct: 1,
                    explanation: "FDA Orange Bookは米国の医薬品特許リストであり、特許情報と独占権（排他権）情報が確認できます。後発品参入時期の推定にも活用されます。"
                },
                {
                    question: "薬事・規制データベース（PMDA、FDA、EMA）に共通する特徴はどれか？",
                    options: ["全て有料である", "全て無料で利用可能", "全て日本語で提供される", "全てパイプライン情報を含む"],
                    correct: 1,
                    explanation: "PMDA、FDA、EMAの薬事・規制データベースは全て無料で利用可能です。承認審査資料や安全性情報等の公的情報を提供しています。"
                }
            ]
        }
    ]
};
