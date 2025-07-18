"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CompaniesLogo() {
  // Mock company logos - replace with actual expert company logos
  const companyLogos = [
    { name: "Google", logo: "/images/companies/matis logo.png" },
    { name: "Microsoft", logo: "/images/companies/azura logo.jpg" },
    { name: "Apple", logo: "/images/companies/matis logo.png" },
    { name: "Amazon", logo: "/images/companies/matis logo.png" },
    { name: "Meta", logo: "/images/companies/matis logo.png" },
    { name: "Netflix", logo: "/images/companies/matis logo.png" },
    { name: "Tesla", logo: "/images/companies/matis logo.png" },
    { name: "Spotify", logo: "/images/companies/matis logo.png" },
    { name: "Uber", logo: "/images/companies/azura logo.jpg" },
    { name: "Airbnb", logo: "/images/companies/azura logo.jpg" },
    { name: "Stripe", logo: "/images/companies/azura logo.jpg" },
    { name: "Slack", logo: "/images/companies/azura logo.jpg" },
  ]

  // Split logos into two rows
  const firstRowLogos = companyLogos.slice(0, 6)
  const secondRowLogos = companyLogos.slice(6, 12)

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="relative">
        {/* First Row - Moving Right to Left */}
        <div className="flex overflow-hidden relative h-16 md:h-20">
          <div className="flex primary-carousel absolute left-full w-full top-0" >
            {[...firstRowLogos].map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex mx-4 items-center justify-center w-32 md:w-40 h-16 md:h-20"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex primary-carousel secondary-carousel absolute left-full w-full" >
            {[...firstRowLogos].map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex mx-4 items-center justify-center w-32 md:w-40 h-16 md:h-20"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left to Right (Slower) */}
        <div className="flex overflow-hidden relative h-16 md:h-20">
          <div className="flex reverse-carousel primary-carousel absolute left-full w-full top-0" >
            {[...firstRowLogos].map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex mx-4 items-center justify-center w-32 md:w-40 h-16 md:h-20"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex reverse-carousel primary-carousel secondary-carousel absolute left-full w-full" >
            {[...firstRowLogos].map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex mx-4 items-center justify-center w-32 md:w-40 h-16 md:h-20"
              >
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60 hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
