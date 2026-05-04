import { skills } from "@/data/skills"

export default function Skills() {
  const labels: Record<string, string> = {
    languages: "言語",
    frameworks: "フレームワーク",
    infra: "インフラ",
    db: "DB",
  }

  return (
    <div className="space-y-5 text-sm">
      {Object.entries(skills).map(([key, values]) => (
        <div key={key}>
          <p className="font-semibold text-[#24292f]">{labels[key] ?? key}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {values.map((v) => (
              <span
                key={v.name}
                className="inline-flex items-center gap-2 rounded-full border border-[#d0d7de] bg-white px-2.5 py-1 text-xs text-[#24292f]"
              >
                <span>{v.name}</span>
                <span className="text-[#57606a]">経験{v.years}年</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
