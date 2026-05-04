import ProfileHeader from "@/components/blocks/profile-header"
import SelfPr from "@/components/blocks/self-pr"
import Certifications from "@/components/blocks/certifications"
import Skills from "@/components/blocks/skills"
import Experience from "@/components/blocks/experience"
import Portfolio from "@/components/blocks/portfolio"

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <div className="rounded-md border border-[#d0d7de] bg-white">
        <div className="border-b border-[#d0d7de] px-4">
          <nav
            aria-label="Sections"
            className="grid grid-cols-3 gap-x-3 gap-y-1 py-2 text-sm sm:flex sm:gap-6 sm:overflow-x-auto sm:py-0"
          >
            <a
              className="rounded-md px-2 py-2 text-center font-semibold text-[#24292f] hover:bg-[#f6f8fa] sm:rounded-none sm:px-0 sm:py-3 sm:text-left sm:hover:bg-transparent sm:hover:border-[#d0d7de] sm:border-b-2 sm:border-transparent"
              href="#overview"
            >
              概要
            </a>
            <a
              className="rounded-md px-2 py-2 text-center font-semibold text-[#24292f] hover:bg-[#f6f8fa] sm:rounded-none sm:px-0 sm:py-3 sm:text-left sm:hover:bg-transparent sm:hover:border-[#d0d7de] sm:border-b-2 sm:border-transparent"
              href="#skills"
            >
              スキル
            </a>
            <a
              className="rounded-md px-2 py-2 text-center font-semibold text-[#24292f] hover:bg-[#f6f8fa] sm:rounded-none sm:px-0 sm:py-3 sm:text-left sm:hover:bg-transparent sm:hover:border-[#d0d7de] sm:border-b-2 sm:border-transparent"
              href="#experience"
            >
              職務経歴
            </a>
            <a
              className="rounded-md px-2 py-2 text-center font-semibold text-[#24292f] hover:bg-[#f6f8fa] sm:rounded-none sm:px-0 sm:py-3 sm:text-left sm:hover:bg-transparent sm:hover:border-[#d0d7de] sm:border-b-2 sm:border-transparent"
              href="#self-pr"
            >
              自己PR
            </a>
            <a
              className="rounded-md px-2 py-2 text-center font-semibold text-[#24292f] hover:bg-[#f6f8fa] sm:rounded-none sm:px-0 sm:py-3 sm:text-left sm:hover:bg-transparent sm:hover:border-[#d0d7de] sm:border-b-2 sm:border-transparent"
              href="#certifications"
            >
              資格
            </a>
            <a
              className="rounded-md px-2 py-2 text-center font-semibold text-[#24292f] hover:bg-[#f6f8fa] sm:rounded-none sm:px-0 sm:py-3 sm:text-left sm:hover:bg-transparent sm:hover:border-[#d0d7de] sm:border-b-2 sm:border-transparent"
              href="#portfolio"
            >
              ポートフォリオ
            </a>
          </nav>
        </div>

        <div className="grid gap-6 p-4 md:grid-cols-[320px_1fr]">
          <aside id="overview" className="space-y-4">
            <div className="rounded-md border border-[#d0d7de] bg-white p-4">
              <ProfileHeader />
            </div>
          </aside>

          <div className="space-y-6">
            <section
              id="skills"
              className="rounded-md border border-[#d0d7de] bg-white p-4"
            >
              <h2 className="mb-4 text-base font-semibold text-[#24292f]">
                スキル
              </h2>
              <Skills />
            </section>

            <section
              id="experience"
              className="rounded-md border border-[#d0d7de] bg-white p-4"
            >
              <h2 className="mb-4 text-base font-semibold text-[#24292f]">
                職務経歴
              </h2>
              <Experience />
            </section>

            <section
              id="self-pr"
              className="rounded-md border border-[#d0d7de] bg-white p-4"
            >
              <h2 className="mb-4 text-base font-semibold text-[#24292f]">
                自己PR
              </h2>
              <SelfPr />
            </section>

            <section
              id="certifications"
              className="rounded-md border border-[#d0d7de] bg-white p-4"
            >
              <h2 className="mb-4 text-base font-semibold text-[#24292f]">
                資格
              </h2>
              <Certifications />
            </section>

            <section
              id="portfolio"
              className="rounded-md border border-[#d0d7de] bg-white p-4"
            >
              <h2 className="mb-4 text-base font-semibold text-[#24292f]">
                ポートフォリオ
              </h2>
              <Portfolio />
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
