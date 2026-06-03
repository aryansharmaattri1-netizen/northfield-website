"use client"

import { motion } from "framer-motion"
import { Check, X, DollarSign, TrendingUp, Target, BarChart } from "lucide-react"

const PricingTier = ({
  name,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
}: {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "primary" | "secondary" | "tertiary"
}) => {
  const buttonClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-blue-500/30",
    secondary: "bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:shadow-2xl",
    tertiary: "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8"
    >
      <div className="border-b border-gray-100 pb-6 mb-6">
        <div className="text-lg font-semibold text-gray-900 mb-2">{name}</div>
        <div className="text-4xl font-bold gradient-text mb-2">{price}</div>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      <button
        className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${buttonClasses[buttonVariant]}`}
      >
        {buttonText}
      </button>
    </motion.div>
  )
}

export default function Pricing() {
  const pricingTiers = [
    {
      name: "Entry Level",
      price: "$3,500/month",
      description: "For volume clients trying to grow with basic editing.",
      features: [
        "Basic editing + posting",
        "Limited complexity work",
        "Standard turnaround time",
        "1-2 revisions included",
      ],
      buttonText: "Get Started",
      buttonVariant: "tertiary" as const,
    },
    {
      name: "Mid Tier",
      price: "$8,000–$15,000/month",
      description: "Standard retainer with full content system.",
      features: [
        "Full content strategy + execution",
        "Video editing + script writing",
        "Hook logic & pacing framework",
        "Brand voice guidance",
        "Regular strategy calls",
      ],
      buttonText: "Schedule Call",
      buttonVariant: "primary" as const,
    },
    {
      name: "High End",
      price: "$15K-$50K/month",
      description: "Elite clients with full production team.",
      features: [
        "Full production team access",
        "In-person shoots possible",
        "Advanced content pipelines",
        "Priority support & access",
        "Custom automation systems",
      ],
      buttonText: "Book Discovery",
      buttonVariant: "secondary" as const,
    },
  ]

  const pricingPrinciples = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Value-Based Pricing",
      description: "ROI framing, not hours. Investment as percentage of enterprise value growth.",
      color: "blue",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dynamic by Revenue",
      description: "$5M/year client → ~$20K/month. Scales with client success.",
      color: "purple",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "High-Ticket Only",
      description: "Minimum $8K/month retainers. Better clients, more committed.",
      color: "blue",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Escalation Path",
      description: "$3K → $5K → $10K → $15K → $50K as results compound.",
      color: "purple",
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
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
            <DollarSign className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-semibold">PRICING STRATEGY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in{" "}
            <span className="gradient-text">Authority</span>, Not Hours
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            High-ticket retainers with ROI framed as ~5% or less of enterprise value growth.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingTier {...tier} />
            </motion.div>
          ))}
        </div>

        {/* Dynamic Pricing Matrix */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8">Dynamic Pricing Framework</h3>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-8">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              <div className="p-4 bg-gray-50 text-center">
                <div className="text-sm font-semibold text-gray-600">Client Revenue</div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <div className="text-sm font-semibold text-gray-600">Monthly Retainer</div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <div className="text-sm font-semibold text-gray-600">% of Annual Revenue</div>
              </div>
            </div>
            
            {[
              { revenue: "$5M/year", retainer: "$20K/month", percentage: "~5%" },
              { revenue: "$10M/year", retainer: "$25K/month", percentage: "~3%" },
              { revenue: "$20M/year", retainer: "$40K/month", percentage: "~2.4%" },
            ].map((row, index) => (
              <motion.div
                key={row.revenue}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`grid grid-cols-3 divide-x divide-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <div className="p-6 text-center">
                  <div className="text-xl font-bold text-gray-900">{row.revenue}</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-xl font-bold gradient-text">{row.retainer}</div>
                </div>
                <div className="p-6 text-center">
                  <div className="text-xl font-bold text-gray-900">{row.percentage}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200`}
            >
              <div className={`w-16 h-16 ${principle.color === 'blue' ? 'bg-gradient-to-r from-blue-100 to-blue-200' : 'bg-gradient-to-r from-purple-100 to-purple-200'} rounded-lg flex items-center justify-center mb-4`}>
                <div className={principle.color === 'blue' ? 'text-blue-600' : 'text-purple-600'}>
                  {principle.icon}
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2">{principle.title}</h4>
              <p className="text-gray-600">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Accepted vs Rejected Models */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Accepted */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Check className="w-8 h-8 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold">Accepted Pricing Models</h3>
            </div>
            <ul className="space-y-4">
              {["High-ticket only ($8K–10K/month minimum)", "Dynamic pricing by client revenue", "Value-based (ROI, not hours)", "Escalation: $3K → $5K → $10K → $15K → $50K"].map((item) => (
                <li key={item} className="text-gray-800 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Rejected */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <X className="w-8 h-8 text-red-600 mr-4" />
              <h3 className="text-2xl font-bold">Rejected Pricing Models</h3>
            </div>
            <ul className="space-y-4">
              {["Low-ticket forever ($1K retainers, many clients)", "Hourly billing", "Package-based pricing", "One-off project pricing"].map((item) => (
                <li key={item} className="text-gray-800 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
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