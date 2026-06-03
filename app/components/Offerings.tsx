"use client"

import { motion } from "framer-motion"
import { Rocket, Layers, Calendar, CheckCircle, Star, Zap } from "lucide-react"

interface OfferingCardProps {
  title: string
  duration: string
  price: string
  description: string
  deliverables: string[]
  for: string
  icon: React.ReactNode
  featured?: boolean
}

const OfferingCard = ({
  title,
  duration,
  price,
  description,
  deliverables,
  for: target,
  icon,
  featured = false,
}: OfferingCardProps) => {
  return (
    <motion.div
      whileHover={{ y: featured ? -8 : -5 }}
      className={`rounded-2xl border p-8 ${featured ? 'relative transform scale-[1.02] shadow-2xl border-transparent bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-white border-gray-200 shadow-lg'}`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="px-4 py-2 bg-white text-blue-600 font-bold rounded-full shadow-lg">
            MOST POPULAR
          </div>
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className={`w-16 h-16 ${featured ? 'bg-white/20' : 'bg-gradient-to-r from-blue-100 to-purple-100'} rounded-xl flex items-center justify-center`}>
              {icon}
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold ${featured ? 'text-white' : 'gradient-text'}`}>
                {price}
              </div>
              <div className={`text-sm ${featured ? 'text-white/80' : 'text-gray-600'}`}>
                {duration}
              </div>
            </div>
          </div>
          <h3 className={`text-2xl font-bold mb-3 ${featured ? 'text-white' : 'text-gray-900'}`}>
            {title}
          </h3>
          <p className={`leading-relaxed ${featured ? 'text-white/90' : 'text-gray-700'}`}>
            {description}
          </p>
        </div>

        {/* Deliverables */}
        <div className="flex-1 mb-8">
          <div className={`font-semibold mb-4 ${featured ? 'text-white' : 'text-gray-900'}`}>
            What's Included
          </div>
          <ul className="space-y-3">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${featured ? 'text-white' : 'text-green-500'}`} />
                <span className={featured ? 'text-white/90' : 'text-gray-700'}>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target */}
        <div className={`pt-6 border-t ${featured ? 'border-white/20' : 'border-gray-200'}`}>
          <p className={`${featured ? 'text-white/80' : 'text-gray-600'}`}>
            <span className="font-semibold">For:</span> {target}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Offerings() {
  const offerings = [
    {
      title: "The Authority Sprint",
      duration: "3 Months",
      price: "$8,000–$10,000/month",
      description: "Intensive 90-day brand clarity and content system build for founders who need to go from invisible to authoritative fast.",
      deliverables: [
        "Content positioning & narrative structure",
        "Hook system & retention logic",
        "Story structure & pacing framework",
        "DM sales funnel integration",
        "Brand voice guide & visual identity",
      ],
      for: "Founders who need to go from invisible to authoritative fast",
      icon: <Rocket className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "The Authority Build",
      duration: "6 Months",
      price: "$8,000–$10,000/month",
      description: "Full personal brand operating system with ongoing creative direction for founders building lasting category authority.",
      deliverables: [
        "Everything in Authority Sprint +",
        "Long-form content strategy & execution",
        "Community credibility building system",
        "Advanced content-to-client pipeline",
        "Ongoing creative direction & strategy",
      ],
      for: "Founders building lasting category authority",
      icon: <Layers className="w-8 h-8 text-purple-600" />,
      featured: true,
    },
  ]

  const services = [
    {
      category: "Core Services (Agency-Provided)",
      items: [
        "Video editing (short + long form)",
        "Script writing & hook logic",
        "Content calendar & scheduling",
        "Brand positioning & narrative",
        "Visual identity & design system",
      ],
    },
    {
      category: "Advanced Services (Can Add)",
      items: [
        "Community management & engagement",
        "Course creation & monetization",
        "Sales funnels & conversion optimization",
        "Sponsorship placement & partnerships",
        "Team onboarding & system setup",
      ],
    },
    {
      category: "Backend Infrastructure",
      items: [
        "Client portals & dashboards",
        "Onboarding documents & systems",
        "Reporting & analytics dashboards",
        "Automation workflows",
        "Content repurposing pipelines",
      ],
    },
  ]

  return (
    <section id="offerings" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
            <Zap className="w-6 h-6 text-purple-600" />
            <span className="text-purple-600 font-semibold">CORE OFFERINGS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            High-Ticket Services for{" "}
            <span className="gradient-text">High-Performing Founders</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Dynamic retainers based on client revenue, with ROI framing as percentage of enterprise value growth.
          </p>
        </motion.div>

        {/* Main Offers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <OfferingCard {...offering} />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Pricing Framework */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16"
        >
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Dynamic Pricing by Client Revenue</h3>
            <p className="text-gray-700">
              ROI-framed as ~5% or less of enterprise value growth. Not hourly billing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { revenue: "$5M/year", retainer: "$20K/month", percentage: "~5% of revenue" },
              { revenue: "$10M/year", retainer: "$25K/month", percentage: "~3% of revenue" },
              { revenue: "$20M/year", retainer: "$40K/month", percentage: "~2.4% of revenue" },
            ].map((item, index) => (
              <motion.div
                key={item.revenue}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-2xl font-bold gradient-text mb-2">{item.revenue}</div>
                <div className="text-xl font-semibold text-gray-900 mb-1">{item.retainer}</div>
                <div className="text-gray-600">{item.percentage}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Hierarchy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Complete Services Hierarchy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, x: index === 1 ? 0 : (index === 0 ? -20 : 20) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                    {index === 0 ? <Star className="w-6 h-6 text-blue-600" /> :
                     index === 1 ? <Zap className="w-6 h-6 text-purple-600" /> :
                     <Calendar className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h4 className="text-xl font-bold">{service.category}</h4>
                </div>
                <ul className="space-y-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-700 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}