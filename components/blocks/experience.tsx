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

          <div className="mt-3 space-y-5">
            <div>
              <div className="text-sm font-semibold text-[#24292f]">
                会社概要
              </div>
              <dl className="mt-2 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-[160px_1fr]">
                <dt className="text-[#57606a]">事業内容</dt>
                <dd className="text-[#24292f]">{exp.companyOverview.business}</dd>

                <dt className="text-[#57606a]">資本金</dt>
                <dd className="text-[#24292f]">{exp.companyOverview.capital}</dd>

                <dt className="text-[#57606a]">従業員数</dt>
                <dd className="text-[#24292f]">
                  {exp.companyOverview.employees}
                </dd>

                <dt className="text-[#57606a]">上場</dt>
                <dd className="text-[#24292f]">{exp.companyOverview.listed}</dd>
              </dl>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-[#24292f]">
              参画プロジェクト
            </div>
          </div>

          <div className="mt-3 space-y-5">
            {exp.projects.map((p, j) => (
              <div
                key={j}
                className="rounded-md border border-[#d0d7de] bg-[#f6f8fa] p-4"
                data-print="card"
              >
                <p className="font-semibold text-[#24292f]">{p.title}</p>

                <div className="mt-3 space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-[#24292f]">
                      概要
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[#57606a]">
                      {p.overview}
                    </p>
                  </div>

                  {p.scale?.users || p.scale?.team ? (
                    <div>
                      <div className="text-sm font-semibold text-[#24292f]">
                        規模
                      </div>
                      <div className="mt-1 space-y-1 text-sm text-[#57606a]">
                        {p.scale?.users ? (
                          <div>ユーザー数: {p.scale.users}</div>
                        ) : null}
                        {p.scale?.team ? (
                          <div>チーム人数: {p.scale.team}</div>
                        ) : null}
                      </div>
                    </div>
                  ) : null}

                  {p.myScope ? (
                    <div>
                      <div className="text-sm font-semibold text-[#24292f]">
                        自分の担当範囲
                      </div>
                      <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-[#57606a]">
                        {p.myScope}
                      </p>
                    </div>
                  ) : null}
                  <div>
                    <div className="text-sm font-semibold text-[#24292f]">
                      実績
                    </div>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-[#57606a]">
                      {p.achievements.map((a, k) => (
                        <li key={k}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>

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
