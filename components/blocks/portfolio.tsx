import { projects } from "@/data/projects"

export default function Portfolio() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <article
          key={p.name}
          className="rounded-md border border-[#d0d7de] bg-white p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-sm font-semibold text-[#24292f]">{p.name}</h3>
            {p.link ? (
              <a
                className="shrink-0 text-sm text-[#0969da] hover:underline"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                リンク
              </a>
            ) : null}
          </div>

          <p className="mt-2 text-sm leading-relaxed text-[#57606a]">
            {p.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#d0d7de] bg-[#f6f8fa] px-2.5 py-1 text-xs text-[#24292f]"
              >
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
