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
    logo: "/pmec logo.webp",
    title: "B.Tech CSE",
    company: "PMEC Berhampur",
    duration: " 2023 - 2027",
  },
  {
    logo: "/cod logo.png",
    title: " Full-stack Engineer",
    company: "Coduter",
    duration: "Feb-Current",
  },
  {
    logo: "/iiitdmk.webp",
    title: "Research Intern",
    company: "IIIT Kurnool",
    duration: " June-July",
  }
]

const ExperienceItem: React.FC<Experience> = ({ logo, title, company, duration }) => (
  <div className="flex flex-col items-center text-center max-w-xs mx-4">
    <div className="w-32 h-32 flex-shrink-0 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full shadow-lg overflow-hidden mb-4">
      <Image 
        src={logo} 
        alt={`${company} logo`} 
        width={110} 
        height={110} 
        className="rounded-full object-contain p-2" 
      />
    </div>
    <div className="flex-grow">
      <h3 className="font-bold text-lg text-gray-800 mb-1">{title}</h3>
      <p className="text-gray-700 font-medium mb-2">{company}</p>
      <p className="text-gray-500 text-sm">{duration}</p>
    </div>
  </div>
)

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Experience</h2> */}
        <div className="flex flex-wrap justify-center items-start gap-8 md:gap-12">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 