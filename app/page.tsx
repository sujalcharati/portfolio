"use client"

import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Updates from "./components/Updates"
import Dock from "./components/Dock"
import HangingGames from "./components/HangingGames"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 font-sans antialiased selection:bg-white selection:text-black">
      <div className="mx-auto max-w-3xl px-6 sm:px-8 pt-16 sm:pt-24 pb-40">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Updates />
        <footer className="mt-24 text-xs text-zinc-600">
          <p>built with next.js. last touched {new Date().getFullYear()}.</p>
        </footer>
      </div>
      <Dock />
      <HangingGames />
    </main>
  )
}
