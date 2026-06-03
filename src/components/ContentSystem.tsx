"use client"

import { motion } from "framer-motion"
import { Play, Mic, BarChart3, Target, Zap, TrendingUp, Clock, Video, Music, Calendar, Share2 } from "lucide-react"

const FunnelStage = ({
  stage,
  color,
  icon,
  goal,
  channel,
}: {
  stage: string
  color: string
  icon: React.ReactNode
  goal: string
  channel: string
}) => {
  const colorClasses = {
    red: "from-red-500 to-red-600",
    yellow: "from-yellow-500 to-yellow-600",
    green: "from-green-500 to-green-600",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8"
    >
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mr-4`}>
          <div className="text-white">{icon}</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">{stage}</div>
          <div className={`text-sm font-semibold mt-1 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} bg-clip-text text-transparent`}>
            {goal}
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center text-gray-600">
          <Target className="w-4 h-4 mr-2" />
          <span>Channel: {channel}</span>
        </div>
      </div>
    </motion.div>
  )
}

const HookCard = ({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200"
    >
      <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4">
        <div className="text-blue-600">{icon}</div>
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
  )
}

export default function ContentSystem() {
  const funnelStages = [
    {
      stage: "Awareness",
      color: "red",
      icon: <TrendingUp className="w-7 h-7" />,
      goal: "Get Eyeballs",
      channel: "Short-form viral videos",
    },
    {
      stage: "Trust & Authority",
      color: "yellow",
      icon: <Mic className="w-7 h-7" />,
      goal: "Build Trust",
      channel: "Long-form YouTube (30-60 min)",
    },
    {
      stage: "Conversions",
      color: "green",
      icon: <BarChart3 className="w-7 h-7" />,
      goal: "Generate Sales",
      channel: "Instagram Story sequences",
    },
  ]

  const hooks = [
    {
      title: "Mute Hooks",
      description: "Visual storytelling only. Best for global reach & maximum engagement.",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Polarizing Takes",
      description: "Strong opinions that trigger emotion and create curiosity.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Quick Tips",
      description: "Immediately applicable advice that gets high saves & shares.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Scratch Series",
      description: "If I had to start from zero... Beginner magnet with relatability.",
      icon: <Play className="w-6 h-6" />,
    },
  ]

  const scriptStructure = [
    { step: "HOOK", description: "Capture attention in 0–3 seconds", duration: "0-3s" },
    { step: "SELL", description: "Create desire (ZERO value given here)", duration: "3-10s" },
    { step: "PRINCIPLE", description: "Explain the concept clearly", duration: "10-30s" },
    { step: "APPLICATION", description: "Give practical steps to implement", duration: "30-45s" },
    { step: "CTA", description: "One clear action only", duration: "45-60s" },
  ]

  return (
    <section id="content-system" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <Video className="w-6 h-6 text-red-600" />
            <span className="text-red-600 font-semibold">CONTENT OS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete{" "}
            <span className="gradient-text">Content Operating System</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The 5-part CCC viral script structure with proven hook archetypes that drive 5–10x average views.
          </p>
        </motion.div>

        {/* Content Funnel */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">The Content Funnel</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {funnelStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FunnelStage {...stage} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Viral Hook Library */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">6 Viral Hook Archetypes</h3>
              <p className="text-gray-700">
                Proven patterns that drive 5–10x more views than average content.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hooks.map((hook, index) => (
              <motion.div
                key={hook.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <HookCard {...hook} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Script Structure */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">5-Part Viral Script Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {scriptStructure.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-2">{step.step}</div>
                  <div className="text-sm text-gray-500 mb-4">{step.duration}</div>
                  <p className="text-gray-700">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Script Writing Rules */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Script Writing Golden Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-xl font-bold">6th Grade Level</h4>
              </div>
              <p className="text-gray-700">
                Keep language accessible. Use 5th–6th grade vocabulary. Simpler = mastery.
                Value per second beats complexity every time.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-xl font-bold">Value Per Minute</h4>
              </div>
              <p className="text-gray-700">
                Cross out unnecessary sentences. Short-form is about DENSITY.
                More value per second = more rewatches and higher retention.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Daily Non-Negotiables */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Daily */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Daily Non-Negotiables</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Post 1-2 pieces of short-form content",
                "Post 1 story sequence (3-5 slides)",
                "Send 50 warm DM openers to qualified leads",
                "Handle all open conversations (priority #1)",
                "Reply to all comments within first hour",
              ].map((item, index) => (
                <li key={index} className="text-gray-700 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Weekly Rituals</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Batch script 7+ videos in one session",
                "Batch film 7+ videos in one session",
                "Review data: views, leads, calls, closes",
                "Find 3–5 new viral content ideas",
                "Add value follow-ups to pipeline leads",
              ].map((item, index) => (
                <li key={index} className="text-gray-700 flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}