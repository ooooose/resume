import { profile } from "@/data/profile"
import Image from "next/image"

export default function ProfileHeader() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4">
        <Image
          src={profile.image}
          alt={profile.name}
          width={64}
          height={64}
          className="rounded-full border border-[#d0d7de] bg-[#f6f8fa]"
        />
        <div className="min-w-0">
          <h1 className="truncate text-2xl font-semibold text-[#24292f]">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-[#57606a]">{profile.role}</p>
        </div>
      </div>

      <p className="whitespace-pre-line text-sm leading-relaxed text-[#57606a]">
        {profile.summary}
      </p>

      <div className="space-y-2 text-sm">
        <div className="flex flex-wrap gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#0969da] hover:underline"
          >
            <span aria-hidden className="text-[#57606a]">
              ↗
            </span>
            GitHub
          </a>
          <a
            href={profile.qiita}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#0969da] hover:underline"
          >
            Qiita
          </a>
          <a
            href={profile.zenn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#0969da] hover:underline"
          >
            Zenn
          </a>
          <a
            href={profile.note}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#0969da] hover:underline"
          >
            note
          </a>
        </div>
        <div className="text-[#57606a]">
          <span aria-hidden className="mr-2">
            ✉
          </span>
          <a className="hover:underline" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </div>
    </div>
  )
}
