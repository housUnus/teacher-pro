import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  MessageCircle,
  Download,
  PlayCircle,
  Shield,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Real-Time Q&A",
    description:
      "Ask questions and get instant answers from industry experts during live sessions",
    icon: MessageCircle,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Completion Certificates",
    description:
      "Earn verified certificates to showcase your new skills and knowledge",
    icon: Award,
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "Downloadable Materials",
    description:
      "Access slides, resources, and bonus materials to continue learning offline",
    icon: Download,
    color: "from-green-500 to-teal-600",
  },
  {
    title: "Session Replays",
    description:
      "Missed something? Watch full session recordings anytime, anywhere",
    icon: PlayCircle,
    color: "from-orange-500 to-red-600",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from industry leaders and certified professionals with proven track records",
    icon: Shield,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Interactive Learning",
    description:
      "Engage with polls, breakout rooms, and hands-on exercises during sessions",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="mt-10 mb-10">
      {/* Platform Benefits */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Platform?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the most comprehensive and interactive online learning
              environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="group bg-white/80 dark:bg-gray-800/80 border-0 shadow-md will-change-transform transition-transform text-center"
                >
                  <CardContent className="p-6">
                    {/* Icon */}
                    <div className="relative mb-6 flex justify-center">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center shadow-md`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      {/* Lighter glow, no blur */}
                      <div
                        className={`absolute inset-0 rounded-xl opacity-10`}
                      />
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="mt-4 flex items-center text-green-600">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="text-sm font-medium">
                        Included in all webinars
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 shadow-xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-blue-100 text-lg mb-8">
                  Join over 50,000+ professionals who have already transformed
                  their careers with our platform
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 text-lg shadow-md hover:shadow-lg transition-transform duration-300"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg bg-transparent"
                  >
                    Watch Demo
                    <PlayCircle className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
