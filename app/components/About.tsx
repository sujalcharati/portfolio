import CollapsibleSection from "./CollapsibleSection"

export default function About() {
  return (
    <CollapsibleSection id="about" title="about">
      <div className="space-y-4 text-zinc-300 leading-relaxed">
        <p>tldr; learnt by hacking around on the internet.</p>
        <p>I like building things. real-time apps, AI tools, weird side experiments.</p>
        <p>I write code agentically. a lot of it.</p>
        <p>open source is home — gsoc, apertre, hacktoberfest, gssoc.</p>
        <p>right now I just build stuff!</p>
        <p>
          if you want to reach out,{" "}
          <a
            href="mailto:sujalc024@gmail.com"
            className="text-white underline decoration-zinc-700 hover:decoration-white underline-offset-4 transition"
          >
            send me an email
          </a>
          .
        </p>
      </div>
    </CollapsibleSection>
  )
}
