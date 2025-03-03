// "use client"
// import ThreeScene from './components/ThreeScene';
// import { Header } from './components/Header';
// import {Homepage} from './components/Homepage';
// import { FloatingDockDemo } from "./components/FloatingDockDemo";



// export default function Home() {
//   return (
//     <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
//       <ThreeScene style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />
//       <Header style={{ position: 'relative', zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />
    
//       <Homepage/>
//       <FloatingDockDemo/>

//     </div>
//   );
// }
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Home, ImageIcon } from "lucide-react"
import { FloatingDockDemo } from "./components/FloatingDockDemo"
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        <Stars />
      </div>

      {/* Gradient overlay that follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-40"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 100, 255, 0.15), transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-sm font-light tracking-widest text-purple-300 sm:text-base"
        >
          FULL-STACK DEVELOPER
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
            Sujal Charati
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-8 max-w-2xl text-center text-lg text-gray-300"
        >
          <p>
            Building exceptional digital experiences from Odisha, India. Specializing in crafting innovative web
            solutions that combine functionality with stunning design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group relative overflow-hidden rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <span className="relative z-10">View My Work</span>
            <span className="absolute inset-0 -z-10 translate-y-[100%] bg-gradient-to-r from-purple-500 to-blue-500 transition-transform duration-300 group-hover:translate-y-0"></span>
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
          >
            Contact Me
          </Link>
        </motion.div>

        <FloatingDockDemo/>

      </div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
    >
      {icon}
    </Link>
  )
}

function Stars() {
  return (
    <>
      {/* Small stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={`small-star-${i}`}
            className="absolute h-[1px] w-[1px] rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Medium stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`medium-star-${i}`}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Large stars */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`large-star-${i}`}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  )
}

