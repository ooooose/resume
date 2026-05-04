import { certifications } from "@/data/certifications"

export default function Certifications() {
  return (
    <ul className="grid gap-2 text-sm text-[#57606a] sm:grid-cols-2">
      {certifications.map((c) => (
        <li key={c} className="flex items-start gap-2">
          <span aria-hidden className="mt-0.5 text-[#57606a]">
            •
          </span>
          <span className="text-[#24292f]">{c}</span>
        </li>
      ))}
    </ul>
  )
}

