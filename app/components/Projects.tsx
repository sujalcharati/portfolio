import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import CollapsibleSection from "./CollapsibleSection"

interface ProjectLink {
  name: string
  href: string
}

interface Project {
  image: string
  title: string
  description: string
  stack: string
  links: ProjectLink[]
}

const projects: Project[] = [
  {
    image: "/walleto.png",
    title: "walleto",
    description:
      "an expense tracker for managing personal finances and budgeting. real-time tracking and analytics.",
    stack: "react · node · mongodb",
    links: [
      { name: "live", href: "https://walleto.vercel.app" },
      { name: "source", href: "https://github.com/sujalcharati/Walleto" },
    ],
  },
  {
    image: "/attendease.png",
    title: "attendease",
    description:
      "a web app for managing event attendance and ticketing. still cooking.",
    stack: "next · typescript · tailwind · node",
    links: [
      { name: "live", href: "https://attendease-sigma.vercel.app/" },
      { name: "source", href: "https://github.com/sujalcharati/attedease" },
    ],
  },
  {
    image: "/cipherpay.png",
    title: "cipherpay",
    description:
      "a web-based cryptocurrency wallet for managing digital assets and on-chain transactions.",
    stack: "next · typescript · tailwind · web3",
    links: [
      { name: "live", href: "https://cipher-pay.vercel.app/" },
      { name: "source", href: "https://github.com/sujalcharati/cipherPay" },
    ],
  },
]

export default function Projects() {
  return (
    <CollapsibleSection id="projects" title="stuff I built">
      <ul className="space-y-10">
        {projects.map((p) => (
          <li
            key={p.title}
            className="flex flex-col sm:flex-row gap-5 sm:gap-6"
          >
            <div className="relative w-full sm:w-44 aspect-video sm:aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 ring-1 ring-zinc-800 shrink-0">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 640px) 176px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-white lowercase">
                {p.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 lowercase">{p.stack}</p>
              <p className="mt-2 text-zinc-300 leading-relaxed">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {p.links.map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-sm text-zinc-400 hover:text-white underline decoration-zinc-700 hover:decoration-white underline-offset-4 transition"
                  >
                    {l.name}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  )
}
