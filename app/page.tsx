"use client"

import React from "react"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
// import Blogs from "./components/Blogs"
import Experience from "./components/Experience"
import Updates from "./components/Updates"

export default function PortfolioPage() {
  return (
    <main className="bg-white min-h-screen text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header/>
        <div className="mt-8">
          <Intro />
          <Experience />
          <Projects />
          {/* <Blogs /> */}
          <Updates />
        </div>
      </div>
    </main>
  )
}