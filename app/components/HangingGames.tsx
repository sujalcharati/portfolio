"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

// ── edit your handles here ────────────────────────────────────────────────
const MATIKS_USERNAME = "sujalcharati"
const CHESS_USERNAME = "sujaltheman"
// ──────────────────────────────────────────────────────────────────────────

interface Game {
  side: "left" | "right"
  logo: string
  label: string
  username: string
  href: string
}

const games: Game[] = [
  {
    side: "left",
    logo: "/matiks-logo.png",
    label: "matiks",
    username: MATIKS_USERNAME,
    href: "https://matiks.com",
  },
  {
    side: "right",
    logo: "/chess-logo.png",
    label: "chess.com",
    username: CHESS_USERNAME,
    href: `https://www.chess.com/member/${CHESS_USERNAME}`,
  },
]

function HangingTile({ game }: { game: Game }) {
  const [hovered, setHovered] = useState(false)
  const [tugged, setTugged] = useState(false)
  const isLeft = game.side === "left"

  return (
    // fixed to the ceiling of the viewport, centered in the side margin.
    // hidden on small screens so it never overlaps the content column.
    <div
      className={`pointer-events-none fixed top-0 z-40 hidden md:block ${
        isLeft
          ? "left-2 lg:left-[calc(25vw-12rem-48px)]"
          : "right-2 lg:right-[calc(25vw-12rem-48px)]"
      }`}
    >
      <motion.a
        href={game.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`when i'm free, i play ${game.label} — @${game.username}`}
        title={`${game.label} — @${game.username}`}
        className="pointer-events-none block cursor-pointer select-none"
        style={{ transformOrigin: "top center" }}
        // idle pendulum sway; a bigger swing when tugged; settles when hovered
        animate={{
          rotate: tugged ? [-14, 12, -8, 5, 0] : hovered ? 0 : [-5, 5, -5],
        }}
        transition={
          tugged
            ? { duration: 1.4, ease: "easeOut" }
            : hovered
            ? { duration: 0.6, ease: "easeOut" }
            : { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onTapStart={() => {
          setTugged(true)
          setTimeout(() => setTugged(false), 1400)
        }}
      >
        {/* the thread */}
        <div className="mx-auto h-48 w-px bg-gradient-to-b from-transparent via-zinc-700 to-zinc-500 lg:h-96" />

        {/* the little ring where the thread clips onto the tile */}
        <div className="mx-auto -mt-1 h-3 w-3 rounded-full border border-zinc-500 bg-transparent" />

        {/* the logo tile — pointer-events live here so the thread isn't hoverable */}
        <div className="pointer-events-auto relative -mt-1 flex justify-center">
          <div className="h-24 w-24 overflow-hidden rounded-2xl ring-1 ring-zinc-700/80 shadow-[0_12px_28px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-105">
            <Image
              src={game.logo}
              alt={game.label}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* card that slides out on hover, toward the content column */}
        <motion.div
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : isLeft ? -8 : 8,
            pointerEvents: hovered ? "auto" : "none",
          }}
          transition={{ duration: 0.2 }}
          className={`absolute top-24 w-44 rounded-xl border border-zinc-800 bg-zinc-950/90 px-3 py-2.5 backdrop-blur-md lg:top-32 ${
            isLeft ? "left-full ml-3 text-left" : "right-full mr-3 text-right"
          }`}
        >
          <p className="text-sm font-semibold lowercase text-white">
            {game.label}
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-zinc-500">
            catch me @{game.username} — click to connect
          </p>
        </motion.div>
      </motion.a>
    </div>
  )
}

export default function HangingGames() {
  return (
    <>
      {games.map((game) => (
        <HangingTile key={game.label} game={game} />
      ))}
    </>
  )
}
