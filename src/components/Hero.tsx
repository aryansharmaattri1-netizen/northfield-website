"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react"

interface MetricProps {
  icon: React.ReactNode
  value: string
  label: string
}

const MetricCard = ({ icon, value, label }: MetricProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg glass-effect"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {value}
          </div>
          <div className="text-gray-600 text-sm">{label}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-200/20 to-blue-200/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 mb-8"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
              <span className="text-white font-medium text-sm">A CLARITY-LED STUDIO</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-600 to-purple-600" />
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">For Founders Who</span>
              <span className="gradient-text">Already Win</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
              We close the gap between who you are and how your content represents you online.
              A systems partner for founders making $100K+/month who value thinking over execution.
            </p>
          </motion.div>

          {/* Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <MetricCard
              icon={<TrendingUp className="w-6 h-6 text-blue-600" />}
              value="$8-15K"
              label="Monthly Retainer"
            />
            <MetricCard
              icon={<Users className="w-6 h-6 text-purple-600" />}
              value="100K+"
              label="Client Revenue/Month"
            />
            <MetricCard
              icon={<Clock className="w-6 h-6 text-blue-600" />}
              value="6-12 Months"
              label="Partnership Duration"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>BOOK A STRATEGY CALL</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#offerings"
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-full hover:bg-gray-50 transition-all duration-300 w-full sm:w-auto"
            >
              EXPLORE OFFERINGS
            </motion.a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <div className="flex items-center space-x-4 text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-lg font-semibold">Trusted by high-ambition founders</p>
                <p className="text-gray-500">Making $5M+/year seeking clarity over chaos</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}