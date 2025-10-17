"use client";
import { useCountUp } from "@/components/common/hooks/useCountUp";
import { Card, CardContent } from "@/components/ui/card"
import {
  Star,
  Users,
  Award,
  Globe,
  CheckCircle,
} from "lucide-react"

const stats = [
  {
    number: 150000,
    label: "Students Served",
    suffix: "+",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: 98,
    label: "Satisfaction Rate",
    suffix: "%",
    icon: Star,
    color: "from-yellow-500 to-orange-500",
  },
  {
    number: 2500,
    label: "Expert Instructors",
    suffix: "+",
    icon: Award,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: 50,
    label: "Countries Reached",
    suffix: "+",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
  },
]

export function AnimatedCounter({ value }) {
  const count = useCountUp(value, 5000); 
  return <span>{count.toLocaleString()}</span>;
}

export default function SocialProof() {
  return (
    <section className="py-10 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              150,000+ Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading universities, Fortune 500 companies, and professionals worldwide
          </p>
        </div>

        {/* Stats Section */}
        <div className="mb-1 px-1 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card
                  key={index}
                  className="py-3 md:py-6 group bg-white/80 border-0 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-2 text-center">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-gradient-to-r ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="text-xl md:text-3xl font-bold text-gray-900 mb-2">
                      <AnimatedCounter value={stat.number} />
                    </div>
                    <p className="text-gray-600 font-medium text-sm md:text-md">{stat.label}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
