const LEVEL5_DATA = {
    id: 5,
    title: "特許・論文・安全性データベース",
    icon: "📑",
    description: "知財戦略、エビデンス構築、ファーマコビジランスのためのDB活用",
    modules: [
        {
            id: 501,
            title: "特許・知財データベースとパテントクリフ",
            duration: "20分",
            content: `
                <h2>特許・知財データベースとパテントクリフ</h2>
                <p>医薬品の特許は製品の収益性を左右する最重要因子です。特許満了による売上急落（パテントクリフ）を予測し、適切なLCM戦略を立案するためにデータベースの活用が不可欠です。</p>

                <h3>医薬品の特許ライフサイクル</h3>
                <table>
                    <thead>
                        <tr><th>特許の種類</th><th>保護対象</th><th>期間</th><th>戦略上の意義</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>物質特許</td><td>化合物そのもの</td><td>出願から20年</td><td>最も強力な参入障壁</td></tr>
                        <tr><td>用途特許</td><td>特定の適応症</td><td>出願から20年</td><td>適応拡大による延命</td></tr>
                        <tr><td>製剤特許</td><td>剤形・製剤技術</td><td>出願から20年</td><td>DDS等による差別化</td></tr>
                        <tr><td>製法特許</td><td>製造方法</td><td>出願から20年</td><td>GE参入の遅延</td></tr>
                    </tbody>
                </table>
                <p>また、開発期間（通常10～15年）に対して存続期間延長（最大5年）が認められる制度があります。</p>

                <h3>主要な特許・知財データベース</h3>
                <table>
                    <thead>
                        <tr><th>DB名</th><th>特徴</th><th>用途</th><th>費用</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>J-PlatPat</td><td>日本の特許公報検索</td><td>国内特許調査の基本</td><td>無料</td></tr>
                        <tr><td>Google Patents</td><td>世界各国の特許を横断検索</td><td>初期スクリーニング</td><td>無料</td></tr>
                        <tr><td>Derwent Innovation</td><td>特許の価値評価・引用分析</td><td>パテントランドスケープ</td><td>有料</td></tr>
                        <tr><td>Orange Book（FDA）</td><td>米国の医薬品特許リスト</td><td>GE参入時期の推定</td><td>無料</td></tr>
                        <tr><td>Integrity（Clarivate）</td><td>化合物と特許の紐付け</td><td>創薬研究での特許調査</td><td>有料</td></tr>
                    </tbody>
                </table>

                <h3>パテントクリフ分析</h3>
                <p>大型品の特許満了は市場構造を劇的に変えます。後発品（GE）は数量ベースで1年以内にシェア80%を超えることもあり、先発品の売上は急激に低下します。</p>
                <ul>
                    <li><strong>自社品：</strong>パテントクリフへの備えとしてLCM（ライフサイクルマネジメント）戦略を策定</li>
                    <li><strong>競合品：</strong>GE参入による市場再編を機会と捉える</li>
                    <li><strong>AG戦略：</strong>オーソライズドジェネリック（AG）による市場コントロール</li>
                </ul>

                <div class="info-box">
                    <h4>AG（オーソライズドジェネリック）とは</h4>
                    <p>AGは先発品メーカーが許諾した後発品で、先発品と同一の原薬・製法・製剤を使用します。先発品メーカーはGE市場の一部を確保でき、GEメーカーは開発リスクを低減できるため、双方にメリットがある戦略です。</p>
                </div>
            `,
            quiz: [
                {
                    question: "医薬品特許の中で最も強力な参入障壁となるのはどの種類の特許か？",
                    options: ["用途特許", "製剤特許", "物質特許", "製法特許"],
                    correct: 2,
                    explanation: "物質特許は化合物そのものを保護対象とするため、最も強力な参入障壁となります。物質特許が存続する間は、同一化合物の後発品は参入できません。"
                },
                {
                    question: "日本の特許公報を無料で検索できるデータベースはどれか？",
                    options: ["Derwent Innovation", "Integrity", "J-PlatPat", "Orange Book"],
                    correct: 2,
                    explanation: "J-PlatPat（特許情報プラットフォーム）は日本の特許公報を無料で検索できる基本データベースで、国内特許調査の出発点となります。"
                },
                {
                    question: "AG（オーソライズドジェネリック）に関する記述として正しいものはどれか？",
                    options: ["先発品メーカーとは無関係に製造される後発品である", "先発品メーカーが許諾し、同一の原薬・製法・製剤を使用する後発品である", "特許存続期間中にのみ販売される製品である", "先発品より高い薬価が設定される製品である"],
                    correct: 1,
                    explanation: "AGは先発品メーカーが許諾した後発品で、先発品と同一の原薬・製法・製剤を使用します。先発品メーカーはGE市場の一部を確保できます。"
                }
            ]
        },
        {
            id: 502,
            title: "論文・エビデンスデータベースとPICOフレームワーク",
            duration: "20分",
            content: `
                <h2>論文・エビデンスデータベースとPICOフレームワーク</h2>
                <p>メディカルアフェアーズやメディカルサイエンスリエゾン（MSL）の活動には、論文・エビデンスデータベースの効果的な活用が不可欠です。</p>

                <h3>主要な論文データベース</h3>
                <table>
                    <thead>
                        <tr><th>DB名</th><th>特徴</th><th>費用</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>PubMed / MEDLINE</strong></td><td>生物医学論文の世界最大DB（3,600万件以上）。MeSHタームによる体系的検索</td><td>無料</td></tr>
                        <tr><td><strong>Embase</strong></td><td>PubMedを補完する薬学・医薬品特化DB。欧州の学会抄録カバレッジが強い</td><td>有料</td></tr>
                        <tr><td><strong>Cochrane Library</strong></td><td>システマティックレビューのゴールドスタンダード</td><td>一部無料</td></tr>
                        <tr><td><strong>医中誌Web</strong></td><td>国内医学論文の最大DB。日本語論文の検索に必須</td><td>有料</td></tr>
                        <tr><td><strong>CiNii Research</strong></td><td>国内の学術論文・研究データを横断検索</td><td>無料</td></tr>
                    </tbody>
                </table>

                <h3>PICOフレームワーク</h3>
                <p>PICOは臨床的疑問を構造化するためのフレームワークで、効率的な論文検索の基盤となります。</p>
                <table>
                    <thead>
                        <tr><th>要素</th><th>意味</th><th>例</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>P</strong>（Patient）</td><td>対象患者</td><td>2型糖尿病患者</td></tr>
                        <tr><td><strong>I</strong>（Intervention）</td><td>介入（治療法）</td><td>SGLT2阻害薬</td></tr>
                        <tr><td><strong>C</strong>（Comparison）</td><td>比較対照</td><td>DPP-4阻害薬</td></tr>
                        <tr><td><strong>O</strong>（Outcome）</td><td>評価項目</td><td>心血管イベント発生率</td></tr>
                    </tbody>
                </table>

                <h3>PubMed検索式への変換例</h3>
                <p>PICOで構造化した臨床的疑問をPubMed検索式に変換する手順を示します。</p>
                <ul>
                    <li>P: "diabetes mellitus, type 2"[MeSH]</li>
                    <li>I: "SGLT2 inhibitor" OR "sodium-glucose co-transporter 2"</li>
                    <li>C: "DPP-4 inhibitor" OR "dipeptidyl peptidase IV"</li>
                    <li>O: "cardiovascular" OR "MACE"</li>
                    <li>これらをAND演算子で結合して検索</li>
                </ul>

                <div class="info-box">
                    <h4>システマティックレビューにおけるDB選択</h4>
                    <p>システマティックレビューでは、PubMedだけでは不十分です。Embase（欧州の学会抄録に強い）、Cochrane Library、医中誌Web（日本語論文）を組み合わせることで、検索の網羅性を確保する必要があります。</p>
                </div>
            `,
            quiz: [
                {
                    question: "PICOフレームワークの「I」が表すものはどれか？",
                    options: ["Information（情報）", "Intervention（介入）", "Investigation（調査）", "Index（指標）"],
                    correct: 1,
                    explanation: "PICOの「I」はIntervention（介入・治療法）を意味します。P=Patient（対象患者）、C=Comparison（比較対照）、O=Outcome（評価項目）です。"
                },
                {
                    question: "PubMedで体系的な検索を行うために利用される統制語彙は何か？",
                    options: ["ATC分類", "ICD-10コード", "MeSHターム", "DPCコード"],
                    correct: 2,
                    explanation: "PubMedではMeSHターム（Medical Subject Headings）と呼ばれる統制語彙（シソーラス）を使って体系的な文献検索が可能です。"
                },
                {
                    question: "欧州の学会抄録のカバレッジに強みを持つ論文データベースはどれか？",
                    options: ["PubMed", "Embase", "医中誌Web", "CiNii Research"],
                    correct: 1,
                    explanation: "Embase（Elsevier社）はPubMedを補完する薬学・医薬品特化のデータベースで、特に欧州の学会抄録のカバレッジが強いのが特徴です。"
                }
            ]
        },
        {
            id: 503,
            title: "KOL分析と安全性データベース",
            duration: "20分",
            content: `
                <h2>KOL分析と安全性データベース</h2>
                <p>KOL（Key Opinion Leader）分析はメディカル戦略・マーケティング戦略の重要な要素です。また、安全性データベースはファーマコビジランス（PV）活動の基盤となります。</p>

                <h3>KOL分析の手法</h3>
                <p>KOLマッピングでは、論文DB・学会DB・治験DBを掛け合わせて分析します。</p>
                <table>
                    <thead>
                        <tr><th>評価軸</th><th>情報源</th><th>評価内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>学術的影響力</td><td>PubMed / Embase</td><td>論文数・被引用数・IF合計</td></tr>
                        <tr><td>臨床試験の実績</td><td>ClinicalTrials.gov</td><td>治験の実施・参加実績</td></tr>
                        <tr><td>ガイドライン策定</td><td>学会サイト</td><td>ガイドライン委員歴</td></tr>
                        <tr><td>学会活動</td><td>学会プログラム</td><td>講演・座長実績</td></tr>
                    </tbody>
                </table>

                <h3>安全性データベース</h3>
                <table>
                    <thead>
                        <tr><th>DB名</th><th>管轄</th><th>特徴</th><th>費用</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>JADER</strong></td><td>PMDA（日本）</td><td>国内の副作用報告データベース。医薬品名・副作用名・転帰等を検索可能</td><td>無料</td></tr>
                        <tr><td><strong>FAERS</strong></td><td>FDA（米国）</td><td>米国の有害事象自発報告DB。OpenFDA APIでアクセス可能</td><td>無料</td></tr>
                        <tr><td><strong>VigiBase</strong></td><td>WHO-UMC</td><td>150カ国以上からの報告を集約。世界最大の有害事象報告DB</td><td>有料/制限あり</td></tr>
                        <tr><td><strong>EudraVigilance</strong></td><td>EMA（EU）</td><td>EU域内の有害事象報告</td><td>一部無料</td></tr>
                    </tbody>
                </table>

                <h3>シグナル検出の基本：ROR（Reporting Odds Ratio）</h3>
                <p>自発報告データベースからシグナルを検出するための基本的な手法がROR（報告オッズ比）です。</p>
                <table>
                    <thead>
                        <tr><th></th><th>対象副作用あり</th><th>対象副作用なし</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>対象薬剤あり</td><td>a</td><td>b</td></tr>
                        <tr><td>対象薬剤なし</td><td>c</td><td>d</td></tr>
                    </tbody>
                </table>
                <p><strong>ROR = (a/b) / (c/d)</strong></p>
                <p>ROR &gt; 1 かつ 95%信頼区間の下限 &gt; 1 の場合、シグナルありと判定します。</p>

                <div class="warning-box">
                    <h4>自発報告データの限界</h4>
                    <p>JADER・FAERSなどの自発報告データは報告バイアスがあり、因果関係の証明にはなりません。シグナル検出はあくまで「仮説生成」であり、確認にはRCTやコホート研究等の追加検証が必要です。</p>
                </div>
            `,
            quiz: [
                {
                    question: "KOL分析における「学術的影響力」の評価に最も適したデータソースはどれか？",
                    options: ["IQVIA JPM", "PubMed / Embase", "JADER", "J-PlatPat"],
                    correct: 1,
                    explanation: "KOLの学術的影響力は、PubMedやEmbaseを用いて論文数・被引用数・インパクトファクター合計等を分析することで評価します。"
                },
                {
                    question: "ROR（Reporting Odds Ratio）によるシグナル検出で「シグナルあり」と判定する条件はどれか？",
                    options: ["ROR = 1", "ROR > 1 かつ 95%信頼区間の下限 > 1", "ROR < 1", "ROR > 0.5"],
                    correct: 1,
                    explanation: "ROR > 1 かつ 95%信頼区間の下限 > 1 の場合にシグナルありと判定します。これは対象薬剤で対象副作用の報告が統計的に有意に多いことを示します。"
                },
                {
                    question: "世界最大の有害事象報告データベースであるVigiBaseを運営する組織はどれか？",
                    options: ["PMDA", "FDA", "WHO-UMC", "EMA"],
                    correct: 2,
                    explanation: "VigiBaseはWHO-UMC（WHO Uppsala Monitoring Centre）が運営する世界最大の有害事象報告データベースで、150カ国以上からの報告を集約しています。"
                }
            ]
        }
    ]
};
