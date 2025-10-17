"use client";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Play,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Clock,
  Video,
  Users,
  Award,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";



const features = [
  { key: 'live', icon: Video },
  { key: 'experts', icon: Award },
  { key: 'certificates', icon: CheckCircle },
  { key: 'community', icon: Globe }
];

const liveIndicators = [
  "🔴 Live: Advanced React Patterns - 1,247 watching",
  "🔴 Live: Digital Marketing 2024 - 892 watching",
  "🔴 Live: AI Tools for Business - 1,563 watching",
];

export function Hero() {
  const [currentLiveIndex, setCurrentLiveIndex] = useState(0);
  const t = useTranslations('Home');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLiveIndex((prev) => (prev + 1) % liveIndicators.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-24 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            {/* Live Indicator */}
            <div className="mb-6 sm:mb-6">
              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium animate-pulse">
                <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full mr-1.5 sm:mr-2 animate-ping" />
                <span className="inline">
                  {liveIndicators[currentLiveIndex]}
                </span>
              </Badge>
            </div>
            {/* Main Headline - Responsive text sizes */}
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {t.rich('heroTitle',
                {
                  highlight: (chunks) =>
                    (<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block mt-1 sm:mt-2">
                      {chunks}
                    </span>)
                  ,
                  subtext: (chunks) => 
                    (<span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-700 block mt-1 sm:mt-2">
                      {chunks}
                    </span>)
                })}
            </h1>

            {/* Subheadline - Responsive text and spacing */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
             {t('heroSubtitle')}
            </p>

            {/* Features List - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.key} className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {t(`features.${feature.key}`)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons - Responsive layout */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center lg:justify-start px-4 sm:px-0">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-transform duration-300 group w-full sm:w-auto"
              >
                Join a Free Webinar
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-white/80 group w-full sm:w-auto"
              >
                <Play className="w-4 sm:w-5 h-4 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators - Responsive layout */}
            {/* <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start text-xs sm:text-sm text-gray-600 px-4 sm:px-0">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                <span>Instant access</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3 sm:w-4 h-3 sm:h-4 text-green-500" />
                <span>30-day mone y-back guarantee</span>
              </div>
            </div> */}
          </div>

          {/* Right Content - Visual Elements */}
          <div className="lg:col-span-5 order-1 lg:order-2 px-4 sm:px-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Hero Card */}
              <Card className="bg-white/80 border-0 shadow-xl hover:shadow-xl transition-transform duration-500 transform hover:-translate-y-2">
                <CardContent className="p-4 sm:p-6 lg:p-8">
                  {/* Video Preview */}
                  <div className="relative mb-4 sm:mb-6 group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                      <img
                        src="/placeholder.svg?height=300&width=500"
                        alt="Live webinar preview"
                        className="w-full h-full object-cover group-hover:scale-105 transform-gpu transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-4 sm:w-6 h-4 sm:h-6 text-blue-600 ml-1" />
                        </div>
                      </div>
                    </div>
                    <Badge className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-red-500 text-white border-0 text-xs sm:text-sm">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full mr-1.5 sm:mr-2 animate-pulse" />
                      LIVE
                    </Badge>
                  </div>

                  {/* Current Session Info */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      Advanced React Patterns & Performance
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 sm:mb-3">
                      with Sarah Chen, Senior Engineer at Google
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>2:00 PM EST</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>1,247 watching</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="text-center p-2 sm:p-3 bg-blue-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">
                        4.9
                      </div>
                      <div className="text-xs text-gray-600">Avg Rating</div>
                    </div>
                    <div className="text-center p-2 sm:p-3 bg-purple-50 rounded-lg">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">
                        12K+
                      </div>
                      <div className="text-xs text-gray-600">Students</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
