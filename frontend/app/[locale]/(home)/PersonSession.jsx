"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Video,
  CheckCircle,
  User,
  PhoneCall,
} from "lucide-react"
import TopExperts from "./TopExperts"

const steps = [
  {
    id: 1,
    title: "Find an Expert",
    description: "Browse our community of experts to find the one that's right for you.",
    icon: Search,
    color: "blue",
    features: ["1,500+ verified experts", "All skill levels", "Global availability"],
  },
  {
    id: 2,
    title: "Request a Call",
    description:
      "At this point, you'll be pre-charged based on the expert's per-minute rate and the estimated call duration.",
    icon: PhoneCall,
    color: "purple",
    features: ["Transparent pricing", "Secure payments", "Flexible scheduling"],
  },
  {
    id: 3,
    title: "Connect Directly",
    description:
      "Join the dedicated conference line. After the call, the final charge will be adjusted based on the actual call duration.",
    icon: Video,
    color: "pink",
    features: ["HD video calls", "Screen sharing", "Pay for actual time"],
  },
]

export default function PersonalSession() {
  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 ">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            Personal Expert Sessions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            1-on-1 Online
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Expert Sessions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized guidance from industry experts through private video calls. Pay only for the time you use.
          </p>
        </div>

        <TopExperts/>

        {/* Steps Process */}
        {/* <div className="mb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.id} className="relative group">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full" />
                    </div>
                  )}

                  <Card className="relative z-10 h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 group-hover:scale-100">
                    <CardContent className="p-4 text-center">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div
                          className={`w-8 h-8 rounded-full bg-gradient-to-r gradient-${step.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                        >
                          {step.id}
                        </div>
                      </div>

                      <div
                        className={`w-16 h-16 mx-auto mb-6 bg-${step.color}-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-8 h-8 text-${step.color}-600`} />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{step.description}</p>

                      <div className="space-y-2">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-500">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-r gradient-${step.color} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300`}
                      />
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div> */}
    </section>
  )
}
