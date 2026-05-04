export const experiences = [
  {
    company: "イタンジ株式会社（旧Housmart）",
    period: "2024/08 - Present",
    role: "Fullstack Engineer",
    companyOverview: {
      business: "（要記入）",
      capital: "（要記入）",
      employees: "（要記入）",
      listed: "（要記入）",
    },
    achievements: [
      "外部連携/自動化を含む業務改善を推進",
      "既存機能の改善・拡張を継続的に実施",
    ],
    projects: [
      {
        title: "反響取込機能の開発",
        overview:
          "外部サイトからの反響データを取り込み、顧客登録までを自動化する機能を開発。",
        achievements: [
          "外部サイト（HOME4U等）のクローリング基盤を構築",
          "月500件以上の顧客登録を自動化",
          "既存機能の改善・拡張",
        ],
        tech: ["Rails", "Python", "Nuxt.js", "AWS", "Terraform"],
      },
      {
        title: "媒介契約管理機能",
        overview:
          "特定企業向け機能を汎用化し、契約管理の運用負荷と問い合わせ対応コストを削減。",
        achievements: [
          "特定企業向け機能を汎用化",
          "MRR向上に寄与",
          "問い合わせ対応の高速化・品質向上",
        ],
        tech: ["Rails", "Nuxt.js", "MySQL"],
      },
    ],
  },

  {
    company: "アルサーガパートナーズ株式会社",
    period: "2023/06 - 2024/07",
    role: "Fullstack Engineer",
    companyOverview: {
      business: "（要記入）",
      capital: "（要記入）",
      employees: "（要記入）",
      listed: "（要記入）",
    },
    achievements: [
      "技術選定から実装までを一貫して担当",
      "認証/権限設計や移行プロジェクトに対応",
    ],
    projects: [
      {
        title: "プロンプトプラットフォーム開発",
        overview:
          "プロンプトを共有・管理するプラットフォームのバックエンド/フロントエンドを開発。",
        achievements: [
          "技術選定から実装まで担当",
          "OAuth（Google/Microsoft）実装",
          "OpenAI API連携",
        ],
        tech: ["FastAPI", "Next.js"],
      },
      {
        title: "ヘルスケアサービス改修",
        overview:
          "既存サービスの技術負債解消とセキュリティ強化を目的に、フロント移行と認証機能を改修。",
        achievements: [
          "Vue2→Vue3移行",
          "2段階認証導入",
          "企業別認証基盤構築",
        ],
        tech: ["Laravel", "Vue"],
      },
    ],
  },
]
