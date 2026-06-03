"use client"

import { motion } from "framer-motion"
import { Check, X, Target, Brain, Sparkles, Zap } from "lucide-react"

interface BeliefCardProps {
  title: string
  icon: React.ReactNode
  items: string[]
  color: "blue" | "purple"
}

const BeliefCard = ({ title, icon, items, color }: BeliefCardProps) => {
  const colorClasses = {
    blue: "from-blue-500/10 to-blue-600/5 border-blue-200",
    purple: "from-purple-500/10 to-purple-600/5 border-purple-200",
  }

  const iconClasses = {
    blue: "text-blue-600 bg-blue-100",
    purple: "text-purple-600 bg-purple-100",
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-gradient-to-br ${colorClasses[color]} border rounded-2xl p-8 shadow-lg`}
    >
      <div className="flex items-center mb-6">
        <div className={`w-14 h-14 ${iconClasses[color]} rounded-xl flex items-center justify-center mr-4`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start"
          >
            {color === "blue" ? (
              <Check className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
            )}
            <span className="text-gray-700">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold">CORE PHILOSOPHY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built on{" "}
            <span className="gradient-text">Clarity Over Chaos</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            This agency rejects fake productivity and embraces systems thinking for founders who value leverage over volume.
          </p>
        </motion.div>

        {/* Dual Belief System */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <BeliefCard
            title="We Believe In"
            icon={<Brain className="w-7 h-7" />}
            items={[
              "Finished outputs create momentum",
              "Clarity compounds faster than effort",
              "Restraint beats noise",
              "One great decision beats 100 tasks",
              "Systems beat motivation",
              "Authority is created by how ideas land",
            ]}
            color="blue"
          />
          <BeliefCard
            title="We Reject"
            icon={<X className="w-7 h-7" />}
            items={[
              "Hustle without direction",
              "Volume over leverage",
              "Dopamine-driven work",
              "Fake productivity",
              "\"Posting more\" as a solution",
              "Chasing trends over depth",
            ]}
            color="purple"
          />
        </div>

        {/* Core Positioning */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">This Is Not</h3>
            <ul className="space-y-3">
              {["Social media management", "Editing service", "Marketing agency", "Volume content machine"].map((item) => (
                <li key={item} className="text-gray-600 flex items-center">
                  <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">This Is</h3>
            <ul className="space-y-3">
              {["Clarity-led studio", "Thinking partner", "Content authority partner", "Growth operator for founders"].map((item) => (
                <li key={item} className="text-gray-600 flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">We Sell</h3>
            <ul className="space-y-3">
              {["Clarity", "Relief", "Authority", "Leverage"].map((item) => (
                <li key={item} className="text-gray-600 flex items-center">
                  <div className="w-4 h-4 mr-2 flex-shrink-0">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Target Client */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100"
        >
          <div className="text-center mb-6">
            <span className="text-sm font-semibold text-blue-700">STRICT FILTER</span>
            <h3 className="text-2xl font-bold mt-2">Ideal Clients</h3>
            <p className="text-gray-700 mt-2">Founders making $100K+/month who value thinking over execution</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4 text-blue-800">Qualified Clients</h4>
              <ul className="space-y-3">
                {["Founders/operators/CEOs", "Making $100K+/month", "Low tolerance for noise", "Intelligent but time-poor", "Strong offline competence", "Value thinking > execution"].map((item) => (
                  <li key={item} className="text-gray-700 flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-red-700">Disqualified Clients</h4>
              <ul className="space-y-3">
                {["Beginners", "Creators chasing virality", "Price-sensitive buyers", "People who want hype", "People wanting just editing", "Dopamine-driven workers"].map((item) => (
                  <li key={item} className="text-gray-700 flex items-center">
                    <X className="w-4 h-4 text-red-400 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}