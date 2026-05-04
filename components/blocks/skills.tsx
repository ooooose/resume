import { skills } from "@/data/skills"

export default function Skills() {
  return (
    <div className="space-y-5 text-sm">
      {Object.entries(skills).map(([key, values]) => (
        <div key={key}>
          <p className="font-semibold capitalize text-[#24292f]">{key}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {values.map((v) => (
              <span
                key={v}
                className="rounded-full border border-[#d0d7de] bg-white px-2.5 py-1 text-xs text-[#24292f]"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
