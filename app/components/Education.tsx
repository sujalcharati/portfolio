import Image from "next/image"
import CollapsibleSection from "./CollapsibleSection"

interface EducationItem {
  logo: string
  degree: string
  school: string
  duration: string
  href?: string
}

const education: EducationItem[] = [
  {
    logo: "/pmec logo.webp",
    degree: "b.tech, computer science",
    school: "pmec berhampur",
    duration: "aug 2023 - 2027",
  },
]

function EducationRow({ item }: { item: EducationItem }) {
  const content = (
    <div className="flex items-center gap-4 py-4">
      <div className="relative shrink-0 h-12 w-12 rounded-full overflow-hidden bg-zinc-900 ring-1 ring-zinc-800">
        <Image
          src={item.logo}
          alt={`${item.school} logo`}
          fill
          sizes="48px"
          className="object-contain p-1.5"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-white lowercase">{item.school}</p>
        <p className="text-sm text-zinc-500 lowercase truncate">{item.degree}</p>
      </div>
      <p className="text-sm text-zinc-500 shrink-0 lowercase tabular-nums">
        {item.duration}
      </p>
    </div>
  )
  return item.href ? (
    <a
      href={item.href}
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

export default function Education() {
  return (
    <CollapsibleSection id="education" title="education">
      <ul className="divide-y divide-zinc-900">
        {education.map((item) => (
          <li key={item.school}>
            <EducationRow item={item} />
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  )
}
