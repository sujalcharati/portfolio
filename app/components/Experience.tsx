import Image from "next/image"
import CollapsibleSection from "./CollapsibleSection"

interface ExperienceItem {
  logo: string
  role: string
  org: string
  duration: string
  href?: string
}

const experiences: ExperienceItem[] = [
  { 
    logo: "/alcovia_logo_dark.png",
    role: "full-stack engineer | intern",
    org : "Alcovia",
    duration: " jun 2026 - present",
    href: "https://alcovia.life"

  },
  {
    logo: "/logo 1 1.svg",
    role: "full-stack engineer | intern",
    org: "coduter",
    duration: "feb 2025 - present",
    href: "https://coduter.com",
  },
  {
    logo: "/iiitdmk.webp",
    role: "research intern | cryptography",
    org: "iiit kurnool",
    duration: "june 2025 - july 2025",
  },
]

function ExperienceRow({ exp }: { exp: ExperienceItem }) {
  const content = (
    <div className="flex items-center gap-4 py-4">
      <div className="relative shrink-0 h-12 w-12 rounded-full overflow-hidden bg-zinc-900 ring-1 ring-zinc-800">
        <Image
          src={exp.logo}
          alt={`${exp.org} logo`}
          fill
          sizes="48px"
          className="object-contain p-1.5"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white lowercase">{exp.org}</p>
        <p className="text-sm text-zinc-500 lowercase truncate">{exp.role}</p>
      </div>
      <p className="text-sm text-zinc-500 shrink-0 lowercase tabular-nums">
        {exp.duration}
      </p>
    </div>
  )
  return exp.href ? (
    <a
      href={exp.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:bg-zinc-950 transition-colors rounded-lg px-2 -mx-2"
    >
      {content}
    </a>
  ) : (
    <div className="px-2 -mx-2">{content}</div>
  )
}

export default function Experience() {
  return (
    <CollapsibleSection id="experience" title="experience">
      <ul className="divide-y divide-zinc-900">
        {experiences.map((exp) => (
          <li key={exp.org}>
            <ExperienceRow exp={exp} />
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  )
}
