import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Intro() {
  return (
    <section className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-16 py-6 border-b-2 border-gray-200">
      <div className="flex-shrink-0 text-center">
      <div className="w-52 h-52 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
        <Image src="/profile.jpeg" alt="Sujal Charati" width={300} height={300} className="rounded-full" />
      </div>
      <h2 className="text-4xl font-bold mt-6 text-gray-800">Sujal Charati</h2>
      <p className="text-xl text-blue-500">sujalc024@gmail.com</p>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://github.com/sujalcharati" target="_blank" rel="noopener noreferrer" aria-label="Github">
        <Github className="h-8 w-8 text-gray-500 hover:text-gray-800 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/sujal-charati-2468931ba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className="h-8 w-8 text-gray-500 hover:text-gray-800 transition-colors" />
        </a>
        <a href="https://x.com/suj25887" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <Twitter className="h-8 w-8 text-gray-500 hover:text-gray-800 transition-colors" />
        </a>
      </div>
      </div>
      <div className="max-w-2xl">
      <h3 className="text-5xl font-semibold text-blue-600 mb-5">About Me</h3>
      <p className="text-xl text-gray-700 leading-relaxed">
        I am a full-stack developer based in Odisha, India. 
        I specialize in building exceptional digital experiences and crafting innovative web solutions that combine functionality with stunning design.
      </p>
      <p className="text-xl text-gray-700 leading-relaxed mt-6">
        Broadly speaking, I am excited about building generally intelligent agents that make our lives easier.
      </p>
      </div>
    </section>
  )
} 