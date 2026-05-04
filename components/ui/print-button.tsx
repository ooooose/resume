"use client"

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-md border border-[#d0d7de] bg-white px-3 py-1.5 text-sm text-[#24292f] hover:bg-[#f6f8fa]"
      data-print="hide"
    >
      PDF出力
    </button>
  )
}

