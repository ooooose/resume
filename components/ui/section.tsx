export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-b border-[#d0d7de] py-8">
      {children}
    </section>
  )
}
