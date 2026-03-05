const LEVEL6_DATA = {
    id: 6,
    title: "統合活用とROI最大化",
    icon: "🎯",
    description: "複数DBの統合分析、投資対効果の最大化、導入ロードマップを学ぶ",
    modules: [
        {
            id: 601,
            title: "部門別データベース活用マトリクス",
            duration: "20分",
            content: `
                <h2>部門別データベース活用マトリクス</h2>
                <p>製薬企業では各部門がそれぞれの目的に応じたデータベースを活用しています。全社的なDB活用の最適化には、部門ごとのニーズとデータベースの対応関係を把握することが重要です。</p>

                <h3>部門別の主な活用DB</h3>
                <table>
                    <thead>
                        <tr><th>部門</th><th>主に活用するDB</th><th>活用目的</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>経営企画</td><td>IQVIA JPM/MIDAS + Evaluate Pharma</td><td>市場予測・ポートフォリオ戦略</td></tr>
                        <tr><td>研究開発</td><td>Cortellis + PubMed + ClinicalTrials.gov</td><td>標的探索・競合パイプライン分析</td></tr>
                        <tr><td>メディカル</td><td>PubMed + Embase + MDV/JMDC</td><td>エビデンス構築・リアルワールドデータ</td></tr>
                        <tr><td>マーケティング</td><td>IQVIA NPA + MDV + KOL分析</td><td>処方実態分析・ターゲティング</td></tr>
                        <tr><td>営業企画</td><td>IQVIA DDD + NDBオープンデータ</td><td>エリア分析・SFE（営業効率化）</td></tr>
                        <tr><td>薬事</td><td>PMDA + FDA + EMA</td><td>承認戦略・照会事項対応</td></tr>
                        <tr><td>PV/安全性</td><td>JADER + FAERS + VigiBase</td><td>シグナル検出・PBRER作成</td></tr>
                        <tr><td>知財</td><td>J-PlatPat + Derwent + Orange Book</td><td>特許戦略・パテントクリフ分析</td></tr>
                        <tr><td>BD/ライセンス</td><td>Cortellis + Evaluate + 特許DB</td><td>ディールスカウティング・バリュエーション</td></tr>
                    </tbody>
                </table>

                <div class="info-box">
                    <h4>クロスファンクショナルな活用の重要性</h4>
                    <p>多くの企業では部門ごとにデータベースが「サイロ化」しています。例えば、マーケティング部門のIQVIAデータとメディカル部門のRWDを組み合わせることで、処方動向の背景にある患者ニーズを深掘りできます。部門横断的な分析体制の構築が競争力の源泉となります。</p>
                </div>
            `,
            quiz: [
                {
                    question: "BD/ライセンス部門がディールスカウティングで主に活用するDBの組み合わせはどれか？",
                    options: ["JADER + FAERS + VigiBase", "IQVIA DDD + NDBオープンデータ", "Cortellis + Evaluate + 特許DB", "PubMed + Embase + MDV"],
                    correct: 2,
                    explanation: "BD/ライセンス部門はCortellis（パイプライン・ディール情報）、Evaluate Pharma（売上予測・価値評価）、特許DB（知財状況）を組み合わせてディールスカウティングやバリュエーションを行います。"
                },
                {
                    question: "営業企画部門がエリア分析やSFE（営業効率化）に活用するDBの組み合わせはどれか？",
                    options: ["PubMed + ClinicalTrials.gov", "IQVIA DDD + NDBオープンデータ", "PMDA + FDA + EMA", "MDV + JMDC"],
                    correct: 1,
                    explanation: "営業企画部門はIQVIA DDD（チャネル別・地域別の流通データ）とNDBオープンデータ（都道府県別の処方状況）を組み合わせて、エリア分析やSFE（Sales Force Effectiveness）に活用します。"
                },
                {
                    question: "部門ごとのDB活用が「サイロ化」した場合の問題点はどれか？",
                    options: ["データベースの契約費用が下がる", "分析の精度が向上する", "部門横断的な洞察が得られず競争力が低下する", "データのセキュリティが向上する"],
                    correct: 2,
                    explanation: "DB活用のサイロ化は、部門横断的な洞察を妨げ、データの重複契約や分析の効率低下を招きます。例えば市場データとRWDを統合することで初めて得られる洞察が見逃されてしまいます。"
                }
            ]
        },
        {
            id: 602,
            title: "統合分析による上市戦略立案",
            duration: "25分",
            content: `
                <h2>統合分析による上市戦略立案</h2>
                <p>新製品の上市戦略は、複数のデータベースを統合的に活用することで精度が飛躍的に向上します。ここでは4ステップの統合分析フローを学びます。</p>

                <h3>Step 1：市場の理解</h3>
                <table>
                    <thead>
                        <tr><th>利用DB</th><th>分析内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>IQVIA JPM</td><td>市場規模・成長トレンドの把握</td></tr>
                        <tr><td>NPA</td><td>処方実態・患者フローの分析</td></tr>
                        <tr><td>NDB</td><td>疫学データ・患者数推計</td></tr>
                    </tbody>
                </table>

                <h3>Step 2：競合の理解</h3>
                <table>
                    <thead>
                        <tr><th>利用DB</th><th>分析内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Cortellis</td><td>パイプライン・上市時期の予測</td></tr>
                        <tr><td>Evaluate Pharma</td><td>競合の売上予測</td></tr>
                        <tr><td>PMDA審査報告書</td><td>競合品の差別化ポイント・審査論点</td></tr>
                        <tr><td>特許DB</td><td>競合の特許満了時期</td></tr>
                    </tbody>
                </table>

                <h3>Step 3：患者の理解</h3>
                <table>
                    <thead>
                        <tr><th>利用DB</th><th>分析内容</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>MDV / JMDC</td><td>ペイシェントジャーニー（治療フロー）</td></tr>
                        <tr><td>PubMed</td><td>アンメットニーズの文献調査</td></tr>
                        <tr><td>ガイドライン</td><td>治療アルゴリズム上の位置付け</td></tr>
                    </tbody>
                </table>

                <h3>Step 4：戦略の統合</h3>
                <ul>
                    <li>ターゲットポジショニングの決定</li>
                    <li>売上予測モデルの構築</li>
                    <li>KOL戦略の策定</li>
                    <li>薬価戦略の立案</li>
                </ul>

                <div class="info-box">
                    <h4>統合分析の価値</h4>
                    <p>個別のデータベース分析だけでは断片的な情報しか得られません。市場データ・競合データ・患者データ・エビデンスを統合することで、「なぜこの製品が、このタイミングで、この患者群に必要なのか」という説得力のあるストーリーが構築できます。</p>
                </div>
            `,
            quiz: [
                {
                    question: "統合分析フローのStep 1「市場の理解」で使用しないDBはどれか？",
                    options: ["IQVIA JPM", "NPA", "NDB", "Cortellis"],
                    correct: 3,
                    explanation: "CortellisはStep 2「競合の理解」で使用するパイプライン分析のDBです。Step 1「市場の理解」ではIQVIA JPM、NPA、NDBを用いて市場規模・処方実態・患者数を把握します。"
                },
                {
                    question: "Step 3「患者の理解」でペイシェントジャーニーを分析する際に活用するDBはどれか？",
                    options: ["IQVIA JPM", "Cortellis", "MDV / JMDC", "J-PlatPat"],
                    correct: 2,
                    explanation: "MDV/JMDCはリアルワールドデータに基づいて患者単位の治療フロー（ペイシェントジャーニー）を可視化できるデータベースで、患者理解のステップで中心的に活用されます。"
                },
                {
                    question: "Step 4「戦略の統合」に含まれる項目として正しいものはどれか？",
                    options: ["臨床試験のプロトコル設計", "ターゲットポジショニングの決定", "後発品の申請準備", "特許出願"],
                    correct: 1,
                    explanation: "Step 4では、Step 1～3で得られた市場・競合・患者の理解を統合し、ターゲットポジショニングの決定、売上予測モデルの構築、KOL戦略の策定、薬価戦略の立案を行います。"
                }
            ]
        },
        {
            id: 603,
            title: "DB投資のコストとROI最大化",
            duration: "20分",
            content: `
                <h2>データベース投資のコストとROI最大化</h2>
                <p>大手製薬企業のDB年間総投資額は1億～5億円規模に達します。この投資のROI（投資対効果）を最大化するための5つの原則を学びます。</p>

                <h3>主要DBの年間コスト目安</h3>
                <table>
                    <thead>
                        <tr><th>DB名</th><th>年間費用（目安）</th><th>備考</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>IQVIA JPM</td><td>500～2,000万円</td><td>契約範囲により変動</td></tr>
                        <tr><td>IQVIA NPA</td><td>300～1,500万円</td><td></td></tr>
                        <tr><td>MDV</td><td>500～2,000万円</td><td>分析メニューにより変動</td></tr>
                        <tr><td>JMDC</td><td>500～3,000万円</td><td>データ範囲により変動</td></tr>
                        <tr><td>Cortellis</td><td>300～1,000万円</td><td>モジュール数により変動</td></tr>
                        <tr><td>Evaluate Pharma</td><td>500～1,500万円</td><td></td></tr>
                        <tr><td>Embase</td><td>200～500万円</td><td>同時アクセス数により変動</td></tr>
                        <tr><td>医中誌Web</td><td>50～200万円</td><td></td></tr>
                        <tr><td>Derwent Innovation</td><td>300～800万円</td><td></td></tr>
                    </tbody>
                </table>
                <p>なお、PubMed、ClinicalTrials.gov、PMDA/FDA/EMA、NDBオープンデータ、J-PlatPatは全て無料で利用可能です。</p>

                <h3>ROI最大化の5原則</h3>
                <ol>
                    <li><strong>重複契約の排除：</strong>部門ごとにバラバラに契約していないか確認。全社ライセンスへの統合でコスト30%削減も可能</li>
                    <li><strong>利用率のモニタリング：</strong>契約しているが誰も使っていないDBの特定。ログイン頻度・ダウンロード数を定期チェック</li>
                    <li><strong>分析人材への投資：</strong>DBがあっても使いこなす人材がいなければ宝の持ち腐れ。データサイエンティスト・アナリストの育成/採用</li>
                    <li><strong>分析の標準化・テンプレート化：</strong>月次の定型レポートは自動化。アドホック分析のナレッジ共有</li>
                    <li><strong>無料DBの最大活用：</strong>PubMed/ClinicalTrials/PMDA/NDBオープンデータを最大限活用し、有料DBの前に無料DBで仮説を立てる</li>
                </ol>

                <div class="warning-box">
                    <h4>よくある失敗パターン</h4>
                    <p>「高額なDBを契約したが、使える人が限られており月に数回しかログインされていない」というケースが非常に多いです。DB投資のROIは「契約すること」ではなく「活用すること」で初めて実現されます。分析人材への投資とセットで考えることが不可欠です。</p>
                </div>
            `,
            quiz: [
                {
                    question: "大手製薬企業のDB年間総投資額の規模感として正しいものはどれか？",
                    options: ["100～500万円", "1,000万～5,000万円", "1億～5億円", "10億～50億円"],
                    correct: 2,
                    explanation: "大手製薬企業のDB年間総投資額は1億～5億円規模に達します。IQVIA、MDV、JMDC、Cortellis等の有料DBを複数契約するため、高額な投資となります。"
                },
                {
                    question: "ROI最大化の5原則に含まれないものはどれか？",
                    options: ["重複契約の排除", "利用率のモニタリング", "全てのDBを有料版にアップグレード", "無料DBの最大活用"],
                    correct: 2,
                    explanation: "ROI最大化の5原則は、重複排除、利用率モニタリング、分析人材への投資、分析の標準化、無料DBの最大活用です。全て有料版にすることは原則に反します。"
                },
                {
                    question: "DB投資の重複契約排除により期待できるコスト削減率の目安はどの程度か？",
                    options: ["約5%", "約10%", "約30%", "約70%"],
                    correct: 2,
                    explanation: "部門ごとにバラバラに契約しているDBを全社ライセンスに統合することで、コスト30%程度の削減が期待できます。"
                }
            ]
        },
        {
            id: 604,
            title: "導入ロードマップと組織変革",
            duration: "20分",
            content: `
                <h2>導入ロードマップと組織変革</h2>
                <p>データベースの戦略的活用を組織に根付かせるためには、段階的なロードマップに基づいた計画的な導入が必要です。ここでは3フェーズの導入ロードマップを学びます。</p>

                <h3>Phase 1（0～3ヶ月）：基盤構築</h3>
                <ul>
                    <li>既存DB契約の棚卸し（重複・未利用の特定）</li>
                    <li>無料DBの活用推進（PubMed/PMDA/NDB）</li>
                    <li>部門別ニーズのヒアリング</li>
                    <li>DB活用の社内研修（基礎編）</li>
                </ul>

                <h3>Phase 2（3～6ヶ月）：活用高度化</h3>
                <ul>
                    <li>全社ライセンスの統合・再交渉</li>
                    <li>RWD（MDV/JMDC）の戦略的導入</li>
                    <li>定型分析テンプレートの整備</li>
                    <li>KOL分析・パイプライン分析の標準化</li>
                </ul>

                <h3>Phase 3（6～12ヶ月）：戦略的活用</h3>
                <ul>
                    <li>複数DBの統合分析基盤の構築</li>
                    <li>ダッシュボード化（BI連携）</li>
                    <li>AI/ML活用（売上予測・シグナル検出の自動化）</li>
                    <li>データドリブンな意思決定文化の定着</li>
                </ul>

                <h3>成功の鍵：7つのデータの柱</h3>
                <p>製薬企業の意思決定を支えるデータは「市場・患者・臨床・薬事・安全性・特許・文献」の7つの柱で構成されます。これらを統合的に活用することで以下が実現します。</p>
                <ul>
                    <li>上市戦略の精度が上がる</li>
                    <li>パイプラインの投資判断が改善する</li>
                    <li>競合に先んじた意思決定ができる</li>
                    <li>患者さんへの価値提供が最大化される</li>
                </ul>

                <div class="info-box">
                    <h4>データベースは「コスト」ではなく「戦略投資」</h4>
                    <p>「データは新薬に次ぐ、製薬企業の最も重要な資産。その資産を活かすも殺すも、使う側の力量次第。」データベースへの投資はコストではなく、"意思決定の質"への戦略投資です。組織全体でデータドリブンな文化を築くことが、持続的な競争優位の源泉となります。</p>
                </div>
            `,
            quiz: [
                {
                    question: "導入ロードマップのPhase 1（0～3ヶ月）で最初に行うべきことはどれか？",
                    options: ["AI/MLの導入", "複数DBの統合分析基盤の構築", "既存DB契約の棚卸し", "ダッシュボード化"],
                    correct: 2,
                    explanation: "Phase 1では、まず既存DB契約の棚卸し（重複・未利用の特定）を行います。現状を正確に把握することが、以降の活用高度化・戦略的活用の基盤となります。"
                },
                {
                    question: "Phase 3「戦略的活用」で目指すゴールとして最も適切なものはどれか？",
                    options: ["無料DBの活用開始", "部門別ニーズのヒアリング", "データドリブンな意思決定文化の定着", "既存契約の見直し"],
                    correct: 2,
                    explanation: "Phase 3（6～12ヶ月）の最終ゴールは、AI/ML活用やBI連携を実現し、「データドリブンな意思決定文化の定着」を達成することです。"
                },
                {
                    question: "製薬企業の意思決定を支える「7つのデータの柱」に含まれないものはどれか？",
                    options: ["市場・患者", "臨床・薬事", "人事・労務", "安全性・特許・文献"],
                    correct: 2,
                    explanation: "7つのデータの柱は「市場・患者・臨床・薬事・安全性・特許・文献」です。人事・労務データは製薬企業のデータ活用戦略における中核的な柱には含まれません。"
                }
            ]
        }
    ]
};
