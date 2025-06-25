import React from "react"
import Image from "next/image"

interface Experience {
  logo: string; // path to logo
  title: string;
  company: string;
  duration: string;
}

const experiences: Experience[] = [
  {
    logo: "/iiitdmk.webp", // placeholder
    title: "Research Intern",
    company: "IIIT Kurnool",
    duration: "Current",
  },
  {
    logo: "/cod logo.png", // placeholder
    title: "Full-Stack Engineer",
    company: "Coduter",
    duration: "current",
  },
  {
    logo: "/pmec logo.webp", // placeholder
    title: "Bachelor of Technology in Computer Science",
    company: "PMEC Berhampur",
    duration: "2023-2027",
  },
]

const ExperienceItem: React.FC<Experience> = ({ logo, title, company, duration }) => (
  <div className="flex items-center space-x-6 py-4">
    <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center border border-gray-200 rounded-md shadow-sm overflow-hidden">
      {/* Using a simple div as a placeholder for the logo */}
      <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center">
        <Image src={logo} alt={`${company} logo`} width={64} height={64} className="rounded-md" />
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
      <p className="text-gray-600">{company}</p>
    </div>
    <div className="text-gray-500 text-sm whitespace-nowrap">
      <p>{duration}</p>
    </div>
  </div>
)

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
      <div>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  )
}

export default Experience 