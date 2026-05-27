"use client"

import { Home, Github, Linkedin, Twitter, Mail, FolderGit2 } from "lucide-react"

interface DockItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

const items: DockItem[] = [
  { label: "home", href: "#", icon: Home },
  { label: "projects", href: "#projects", icon: FolderGit2 },
  { label: "github", href: "https://github.com/sujalcharati", icon: Github, external: true },
  { label: "linkedin", href: "https://linkedin.com/in/sujal-charati-2468931ba", icon: Linkedin, external: true },
  { label: "x", href: "https://x.com/suj25887", icon: Twitter, external: true },
  { label: "email", href: "mailto:sujalc024@gmail.com", icon: Mail },
]

export default function Dock() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md px-2 py-2 shadow-xl shadow-black/40">
        {items.map((item) => {
          const Icon = item.icon
          const linkProps = item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {}
          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              {...linkProps}
              className="group relative flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-all duration-200 hover:scale-110"
            >
              <Icon className="h-4.5 w-4.5" />
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-zinc-900 border border-zinc-800 px-2 py-1 text-[11px] text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
