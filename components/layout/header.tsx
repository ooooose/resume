export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d0d7de] bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <div className="flex min-w-0 items-center gap-2">
          <div
            aria-hidden
            className="h-6 w-6 rounded-md border border-[#d0d7de] bg-[#f6f8fa]"
          />
          <span className="truncate text-sm font-semibold">合瀬 雄紀 | Resumep</span>
        </div>

        <nav className="ml-auto hidden items-center gap-4 text-sm text-[#57606a] sm:flex">
          <a className="hover:text-[#24292f]" href="#overview">
            Overview
          </a>
          <a className="hover:text-[#24292f]" href="#skills">
            Skills
          </a>
          <a className="hover:text-[#24292f]" href="#experience">
            Experience
          </a>
        </nav>
      </div>
    </header>
  );
}
