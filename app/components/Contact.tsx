"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, MessageSquare, Share2, MessageCircle, Globe, ArrowRight } from "lucide-react"
import { useState } from "react"

const outreachProcess = [
  { step: "1", title: "Engage Publicly First", description: "Comment thoughtfully on recent posts before moving to DM" },
  { step: "2", title: "Personalized DM", description: "Offer insight before offers, keep it observational" },
  { step: "3", title: "Send Loom Analysis", description: "80-8-20 structure: what we noticed → why it matters → recommendation" },
  { step: "4", title: "Follow Up", description: "Reference content, no pressure, intelligent re-engagement" },
]

const dmTemplates = [
  {
    title: "Creator with Content But No Strategy",
    template: "Hey [Name] — been watching your content. The value is obviously there, but your hooks are losing people before they see it. Most of your posts could 3x if the first 3 seconds were restructured. Curious if that's something you've thought about.",
  },
  {
    title: "Inconsistent Poster",
    template: "[Name] — noticed your content goes quiet for weeks then comes back. I work with founders on fixing exactly that — not by posting more, but by building a system where 3 hours of your time creates 30 days of content. Worth a 10-min conversation?",
  },
  {
    title: "Loom Follow-up",
    template: "Sent you a quick Loom breaking down 3 things I'd change about your content to double your reach — took me 8 minutes to record. No pitch, just analysis. [Loom link]",
  },
]

export default function Contact() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would connect to a backend
    console.log("Form submitted:", { email, message })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <MessageSquare className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold">CONTACT & OUTREACH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intelligent Outreach for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              High-Level Founders
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            "High-level founders buy relief, not persuasion." — 5-touch sequence, value-first approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5" />
                </div>
                Start a Conversation
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white"
                    placeholder="founder@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">
                    What's on your mind?
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white resize-none"
                    placeholder="Tell us about your current content challenges..."
                    required
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>SEND MESSAGE</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-sm">
                  We typically respond within 24 hours. Expect thoughtful, actionable insights, not sales pitches.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Outreach Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Outreach Steps */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <MessageSquare className="w-5 h-5" />
                </div>
                5-Touch Outreach Sequence
              </h3>
              
              <div className="space-y-4">
                {outreachProcess.map((item) => (
                  <motion.div
                    key={item.step}
                    whileHover={{ x: 5 }}
                    className="flex items-start p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-lg font-bold">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Calendar Link */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Schedule a Strategy Call</h3>
                  <p className="text-blue-100 mb-4">
                    30-minute conversation focused on your content gaps
                  </p>
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-8 h-8" />
                </div>
              </div>
              
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 block w-full px-6 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 text-center"
              >
                BOOK A CALL NOW
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: <Share2 className="w-6 h-6" />, label: "Share" },
                  { icon: <MessageCircle className="w-6 h-6" />, label: "Message" },
                  { icon: <Globe className="w-6 h-6" />, label: "Website" },
                  { icon: <MessageSquare className="w-6 h-6" />, label: "DM Us" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-xl border border-gray-700 transition-all duration-300 group"
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* DM Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Intelligent DM Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dmTemplates.map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700"
              >
                <div className="text-sm font-semibold text-blue-400 mb-2">
                  TEMPLATE {index + 1}
                </div>
                <h4 className="text-lg font-bold mb-3">{template.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{template.template}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration:   0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Serving elite founders making $100K+/month. No beginners. No hype. Just clarity.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300"
          >
            <Calendar className="w-5 h-5 mr-2" />
            BOOK A 1:1 STRATEGY CALL
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}