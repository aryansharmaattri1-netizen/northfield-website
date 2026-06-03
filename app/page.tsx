"use client"

import { motion, AnimatePresence } from "framer-motion"
import Hero from "./components/Hero"
import Philosophy from "./components/Philosophy"
import Offerings from "./components/Offerings"
import Pricing from "./components/Pricing"
import ContentSystem from "./components/ContentSystem"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Offerings />
      <Pricing />
      <ContentSystem />
      <Contact />
    </>
  )
}