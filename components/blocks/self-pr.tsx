import { profile } from "@/data/profile"

export default function SelfPr() {
  return (
    <div className="space-y-4">
      {profile.selfPr.map((item) => (
        <article
          key={item.heading}
          className="rounded-md border border-[#d0d7de] bg-white p-4"
        >
          <h3 className="text-sm font-semibold text-[#24292f]">
            {item.heading}
          </h3>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[#57606a]">
            {item.text}
          </p>

          {item.references?.length ? (
            <div className="mt-4">
              <div className="text-sm font-semibold text-[#24292f]">
                {item.referencesHeading ?? "参考資料"}
              </div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#57606a]">
                {item.references.map((r) => (
                  <li key={r.title}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0969da] hover:underline"
                    >
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </article>
      ))}
    </div>
  )
}
