export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2 py-1 rounded-md bg-zinc-100 text-zinc-700 border border-zinc-200">
      {children}
    </span>
  )
}
