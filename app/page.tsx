import ProfileHeader from "@/components/blocks/profile-header"
import Skills from "@/components/blocks/skills"
import Experience from "@/components/blocks/experience"

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-6">
      <div className="rounded-md border border-[#d0d7de] bg-white">
        <div className="border-b border-[#d0d7de] px-4">
          <nav
            aria-label="Sections"
            className="flex gap-6 overflow-x-auto text-sm"
          >
            <a
              className="border-b-2 border-transparent py-3 font-semibold text-[#24292f] hover:border-[#d0d7de]"
              href="#overview"
            >
              Overview
            </a>
            <a
              className="border-b-2 border-transparent py-3 font-semibold text-[#24292f] hover:border-[#d0d7de]"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="border-b-2 border-transparent py-3 font-semibold text-[#24292f] hover:border-[#d0d7de]"
              href="#experience"
            >
              Experience
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
                Skills
              </h2>
              <Skills />
            </section>

            <section
              id="experience"
              className="rounded-md border border-[#d0d7de] bg-white p-4"
            >
              <h2 className="mb-4 text-base font-semibold text-[#24292f]">
                Experience
              </h2>
              <Experience />
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
