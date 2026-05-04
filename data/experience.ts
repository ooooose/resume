export const experiences = [
  {
    company: "イタンジ株式会社",
    period: "2024/08 - Present",
    role: "Fullstack Engineer",
    companyOverview: {
      business: "不動産営業支援SaaSの開発（自社製品）",
      capital: "3,600万円",
      employees: "約300名",
      listed: "上場",
    },
    achievements: [
      "外部連携／自動化を含む業務改善を推進",
      "既存機能の改善・拡張を継続的に実施",
      "2025年12月〜3ヶ月の育児休業を取得し、復帰後もプロジェクトに継続参画",
    ],
    projects: [
      {
        title: "反響取込機能の開発",
        overview:
          "ログインが必要な外部サイト（HOME4U）から反響データを取り込み、顧客登録までを自動化する機能を開発。",
        scale: {
          team: "フルスタックエンジニア1名、PM1名、QA3名",
        },
        myScope: "バックエンド・フロントエンド・インフラ構築全般を担当。\nPython/Railsによるクローリング基盤の設計・実装、およびNuxt.jsフロントエンドの開発を担当。",
        achievements: [
          "ログインが必要な外部サイト（HOME4U）へのクローリング機能を構築",
          "SUUMO予約管理などの追加ポータルサイト取込機能を拡充",
          "既存の反響取込機能で顧客要望の高い改善を実施",
          "月500件以上の顧客登録を自動化",
        ],
        tech: ["Rails", "Python", "Nuxt.js", "AWS", "Terraform", "MySQL", "Docker", "GitHub", "Sentry"],
      },
      {
        title: "媒介契約管理機能",
        overview:
          "不動産営業支援SaaS『PropoCloud』の保守運用および媒介契約管理機能の開発を担当。",
        scale: {
          team: "フルスタックエンジニア2名、QA3名",
        },
        myScope: "バックエンド・フロントエンド中心。\n問い合わせ対応と並行して機能開発を担当し、汎用化に必要な設計と実装を主導。",
        achievements: [
          "バックエンド／フロントエンド中心の問い合わせ対応と保守改善",
          "特定企業向け媒介契約管理機能を汎用化し、MRR向上に寄与",
          "サポートチームと連携し、お客様対応の速度と品質を向上",
        ],
        tech: ["Rails", "Nuxt.js", "MySQL", "Docker", "GitHub", "Sentry"],
      },
    ],
  },

  {
    company: "アルサーガパートナーズ株式会社",
    period: "2023/06 - 2024/07",
    role: "Fullstack Engineer",
    companyOverview: {
      business: "Webサービス受託開発事業",
      capital: "6億7,000万円（資本準備金含む）",
      employees: "465名（2024年4月末現在）",
      listed: "未上場",
    },
    achievements: [
      "技術選定から実装までを一貫して担当",
      "認証／権限設計や移行プロジェクトに対応",
    ],
    projects: [
      {
        title: "外国人就労者向けヘルスケアサービス改修",
        overview:
          "外国人就労者向けヘルスケアサービスの追加改修を担当し、機能性と運用性を向上。",
        scale: {
          users: "月3,000人以上のサービス利用者",
          team: "バックエンド2名、フロントエンド1名、PM1名",
        },
        myScope: "バックエンド（PHP/Laravel）とフロントエンド（Vue）を担当。\nVue2→Vue3の移行、企業別認証基盤の構築、2段階認証機能の実装など主要機能の実装を担当。",
        achievements: [
          "Vue2からVue3へライブラリを移行",
          "PHP8のマイナーバージョンアップを実施",
          "企業別認証画面・機能を構築",
          "2段階認証機能を実装",
          "個人情報登録機能を作成",
        ],
        tech: ["Laravel", "Vue", "MySQL", "GitHub"],
      },
      {
        title: "プロンプトプラットフォームアプリ開発",
        overview:
          "OpenAI APIを活用したプロンプトプラットフォームの立ち上げと保守改善を担当。",
        scale: {
          users: "ベータ期500ユーザー",
          team: "バックエンド2名（FastAPI）、フロントエンド2名（Next.js）、PM1名",
        },
        myScope: "技術選定・スタック決定から実装まで全体を主導。\nFastAPI、Next.jsの構築、OAuth認証、OpenAI API連携の実装を担当。",
        achievements: [
          "技術選定と構築を担当",
          "Google／Microsoft認証を実装",
          "OpenAI APIとの接続を実装",
          "立ち上げ後の保守改善にも継続参画",
        ],
        tech: ["FastAPI", "Next.js", "MySQL", "Docker", "GitHub"],
      },
    ],
  },
]
