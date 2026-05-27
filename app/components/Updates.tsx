import CollapsibleSection from "./CollapsibleSection"

interface Update {
  date: string
  text: string
}

const updates: Update[] = [
  {
    date: "jun 2025",
    text: "started as a research intern at iiit kurnool exploring post-quantum cryptography.",
  },
  {
    date: "mar 2025",
    text: "contributed to apertre 2.0 open source projects.",
  },
  {
    date: "feb 2025",
    text: "first runners up at hack for tomorrow 2k25 at vssut, burla.",
  },
  {
    date: "feb 2025",
    text: "joined coduter as a junior frontend engineer intern.",
  },
  {
    date: "jun 2024",
    text: "workshop at iit kharagpur — algorithm to text analytics.",
  },
]

export default function Updates() {
  return (
    <CollapsibleSection id="updates" title="recent updates">
      <ul className="space-y-3">
        {updates.map((u, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <span className="text-sm text-zinc-500 sm:w-24 shrink-0 tabular-nums lowercase">
              {u.date}
            </span>
            <span className="text-zinc-300 leading-relaxed">{u.text}</span>
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  )
}
