"use client"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { HelpCircle, Star, ChevronDown, ChevronUp, ChevronRight } from "lucide-react"



const faqs = [
  {
    question: "How do I join a webinar?",
    answer:
      "After purchasing a webinar ticket, you'll receive a confirmation email with a unique join link. Simply click the link 5-10 minutes before the scheduled start time to enter the virtual room. Make sure you have a stable internet connection and updated browser.",
    category: "Webinars",
    popular: true,
  },
  {
    question: "Can I get a refund if I can't attend?",
    answer:
      "Yes! We offer a full refund if you cancel at least 24 hours before the webinar starts. For cancellations within 24 hours, we provide a 50% refund or credit towards another webinar. If the instructor cancels, you'll receive a full refund automatically.",
    category: "Payment",
    popular: true,
  },
  {
    question: "Are the webinars recorded?",
    answer:
      "Most webinars are recorded and available for 30 days after the live session. You'll receive an email with the recording link within 24 hours. Some exclusive sessions may not be recorded at the instructor's discretion.",
    category: "Webinars",
    popular: true,
  },
  {
    question: "How do I book a 1-on-1 session with an expert?",
    answer:
      "Browse our expert directory, select your preferred expert, choose an available time slot from their calendar, and complete the booking. You'll receive a confirmation email with meeting details and a calendar invite.",
    category: "Experts",
    popular: true,
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For corporate bookings, we also offer invoice payments and purchase orders.",
    category: "Payment",
    popular: true,
  },
  {
    question: "Can I become an instructor on your platform?",
    answer:
      "We welcome experienced professionals to join our instructor community. Visit our 'Become an Instructor' page to apply. We review applications based on expertise, teaching experience, and content quality.",
    category: "General",
    popular: true,
  },
  {
    question: "What if I have technical issues during a webinar?",
    answer:
      "Our support team is available via live chat during all webinars. Common issues can be resolved by refreshing your browser, checking your internet connection, or switching to a different browser. We also provide a technical requirements guide.",
    category: "Technical",
  },
  {
    question: "Do you offer certificates after completing webinars?",
    answer:
      "Yes! You'll receive a digital certificate of completion for each webinar you attend. Certificates include the webinar title, instructor name, date, and your name. They can be shared on LinkedIn or downloaded as PDF.",
    category: "General",
  },
  {
    question: "How do I reschedule a 1-on-1 session?",
    answer:
      "You can reschedule up to 24 hours before your session through your account dashboard. Navigate to 'My Bookings', select the session, and choose 'Reschedule' to pick a new time slot from the expert's availability.",
    category: "Experts",
  },
  {
    question: "Is there a limit to how many webinars I can attend?",
    answer:
      "No limits! You can attend as many webinars as you'd like. We also offer subscription plans that provide discounted access to multiple webinars per month, which is great for avid learners.",
    category: "Webinars",
  },
  {
    question: "How do I create an account?",
    answer:
      "Click 'Sign Up' in the top right corner, enter your email and create a password, or sign up using Google, Facebook, or LinkedIn. You'll need to verify your email address to access all features.",
    category: "Account",
  },
  {
    question: "Can I access webinars from my mobile device?",
    answer:
      "Yes! Our platform is fully mobile-responsive. You can join webinars from any device with an internet connection and modern browser. We also recommend using headphones for better audio quality.",
    category: "Technical",
  },
]

const categories = ["All", "General", "Webinars", "Experts", "Technical", "Payment", "Account"]

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState("General")
  const [showAll, setShowAll] = useState(false)

  const popularFaqs = faqs.filter((faq) => faq.popular)
  const filteredFaqs = selectedCategory === "All" ? faqs : faqs.filter((faq) => faq.category === selectedCategory)
  const displayedFaqs = showAll ? filteredFaqs : popularFaqs

  return (
    <section className="py-12 md:py-20 lg:py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4 md:mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
            Got Questions? We've Got Answers
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Find quick answers to common questions about our platform, webinars, and expert sessions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-8 px-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setShowAll(false)
              }}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`rounded-full text-xs md:text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg"
                  : "hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        

        {/* FAQ Accordion */}
        <Card className="border-0 shadow-xl bg-white/80 overflow-hidden py-0">
          <Accordion type="single" collapsible className="w-full">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="hover:no-underline py-4 md:py-6 px-4 md:px-8 text-left group hover:bg-blue-50/50 transition-colors">
                  <div className="flex items-start gap-3 md:gap-4 w-full pr-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                          {faq.question}
                        </span>
                        {faq.popular && (
                          <Badge className="bg-amber-100 text-amber-700 text-xs hover:bg-amber-100 flex-shrink-0">
                            <Star className="w-3 h-3 mr-1 fill-amber-500" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-8 pb-4 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        
          <div className="text-center mt-6 md:mt-8">
            <Button
              onClick={() => {}}
              variant="outline"
              className="group hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 transition-all duration-300 rounded-full px-8 md:px-12 py-4 md:py-5 text-sm md:text-base font-semibold hover:shadow-lg"
            >
              <span>More Questions</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        {/* Contact Support CTA
        <div className="mt-12 md:mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl overflow-hidden">
            <div className="p-6 md:p-10 lg:p-12 relative">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-white/10 rounded-full -ml-16 -mb-16" />
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Still have questions?</h3>
                <p className="text-sm md:text-base lg:text-lg text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                  Our support team is here to help you 24/7. Get in touch and we'll respond as soon as possible.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-sm md:text-base px-6 md:px-8"
                >
                  Contact Support
                </Button>
              </div>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  )
}
