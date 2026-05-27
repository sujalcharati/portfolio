"use client"

import { ReactNode, useState } from "react"

interface CollapsibleSectionProps {
  title: string
  id?: string
  defaultOpen?: boolean
  className?: string
  children: ReactNode
}

export default function CollapsibleSection({
  title,
  id,
  defaultOpen = true,
  className = "mt-24",
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <section id={id} className={className}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex items-center gap-2 text-xl font-bold text-white lowercase select-none"
      >
        <span
          aria-hidden
          className={`inline-block text-sm transition-transform duration-200 ${
            open ? "rotate-0" : "-rotate-90"
          }`}
        >
          ▼
        </span>
        <span className="group-hover:opacity-80 transition-opacity">{title}</span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </section>
  )
}
