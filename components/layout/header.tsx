import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d0d7de] bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <div className="flex min-w-0 items-center gap-2">
          <Image
            alt=""
            src="/favicon.png"
            className="h-6 w-6 rounded-md border border-[#d0d7de] bg-[#f6f8fa]"
            width={24}
            height={24}
          />
          <span className="truncate text-sm font-semibold">職務経歴書</span>
        </div>

        <nav className="ml-auto hidden items-center gap-4 text-sm text-[#57606a] sm:flex">
          <a className="hover:text-[#24292f]" href="#overview">
            概要
          </a>
          <a className="hover:text-[#24292f]" href="#skills">
            スキル
          </a>
          <a className="hover:text-[#24292f]" href="#experience">
            職務経歴
          </a>
          <a className="hover:text-[#24292f]" href="#self-pr">
            自己PR
          </a>
          <a className="hover:text-[#24292f]" href="#certifications">
            資格
          </a>
          <a className="hover:text-[#24292f]" href="#portfolio">
            ポートフォリオ
          </a>
        </nav>
      </div>
    </header>
  );
}
