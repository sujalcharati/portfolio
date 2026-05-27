"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

// edit this if you want the years-alive counter to be accurate
const BIRTH_DATE = new Date("2005-05-08T00:00:00Z")

function yearsSince(date: Date) {
  const ms = Date.now() - date.getTime()
  const years = ms / (1000 * 60 * 60 * 24 * 365.25)
  return years.toFixed(9)
}

export default function Hero() {
  const [age, setAge] = useState(() => yearsSince(BIRTH_DATE))

  useEffect(() => {
    const id = setInterval(() => setAge(yearsSince(BIRTH_DATE)), 50)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="flex items-start justify-between gap-8">
      <div className="flex-1 min-w-0">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          im sujal
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-500 tabular-nums">
          been here for {age} years
        </p>
      </div>
      <div className="relative shrink-0 h-28 w-28 sm:h-36 sm:w-36 rounded-full overflow-hidden ring-1 ring-zinc-800">
        <Image
          src="/selfImage.png"
          alt="sujal charati"
          fill
          sizes="144px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
