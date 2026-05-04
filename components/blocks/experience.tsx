import { experiences } from "@/data/experience"

export default function Experience() {
  return (
    <div className="space-y-10">
      {experiences.map((exp, i) => (
        <div key={i}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div className="min-w-0">
              <div className="truncate text-base font-semibold text-[#24292f]">
                {exp.company}
              </div>
              <p className="text-sm text-[#57606a]">{exp.role}</p>
            </div>
            <div className="text-sm text-[#57606a]">{exp.period}</div>
          </div>

          <div className="mt-4 space-y-5">
            {exp.projects.map((p, j) => (
              <div
                key={j}
                className="rounded-md border border-[#d0d7de] bg-[#f6f8fa] p-4"
              >
                <p className="font-semibold text-[#24292f]">{p.title}</p>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#57606a]">
                  {p.achievements.map((a, k) => (
                    <li key={k}>{a}</li>
                  ))}
                </ul>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#d0d7de] bg-white px-2.5 py-1 text-xs text-[#24292f]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
