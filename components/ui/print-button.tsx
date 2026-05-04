"use client"

import { useState } from "react"

export default function PrintButton() {
  const [printing, setPrinting] = useState(false)

  return (
    <button
      type="button"
      onClick={async () => {
        if (printing) return
        setPrinting(true)
        try {
          await (document as unknown as { fonts?: { ready?: Promise<void> } })
            .fonts?.ready
          await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
          window.print()
        } finally {
          setPrinting(false)
        }
      }}
      className="inline-flex items-center gap-2 rounded-md border border-[#d0d7de] bg-white px-3 py-1.5 text-sm text-[#24292f] hover:bg-[#f6f8fa]"
      data-print="hide"
      disabled={printing}
    >
      {printing ? "準備中…" : "PDF出力"}
    </button>
  )
}
