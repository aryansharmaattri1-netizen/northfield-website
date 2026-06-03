"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Share2, MessageCircle, Globe } from "lucide-react"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-12"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">🦞</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Northfield
                </h3>
                <p className="text-gray-400 text-sm font-medium">Clarity-Led Studio</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We close the gap between who you are and how your content represents you online.
              A systems partner for high-ambition founders.
            </p>
            <div className="flex space-x-4">
              {[Share2, MessageCircle, Globe].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {["Philosophy", "Offerings", "Pricing", "Content System", "About Founder"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:pl-2 block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold">Services</h4>
            <ul className="space-y-4">
              {[
                "Authority Sprint ($8K–10K/month)",
                "Authority Build ($8K–10K/month)",
                "Video Editing & Scripting",
                "Content Clarity & Narrative",
                "Hook Logic & Pacing",
                "Editing Direction & Strategy",
              ].map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-xl font-bold">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Start a conversation</p>
                  <a href="mailto:hello@openclaw.agency" className="font-medium hover:text-blue-400 transition-colors">
                    hello@openclaw.agency
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Schedule a call</p>
                  <a href="#contact" className="font-medium hover:text-blue-400 transition-colors">
                    Book Strategy Call →
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-800">
              <p className="text-gray-500 text-sm">
                Serving elite founders making $100K+/month who value thinking over execution.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Northfield — Clarity-Led Studio. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            "We believe in clarity over chaos. Authority over amplification."
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}