
import {
  Zap,
} from "lucide-react";  
import UpComingCore from "./UpComingCore";

export default function UpcomingWebinars() {

  return (
    <section className="py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-indigo-50">
      <div className="">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Zap className="w-3 sm:w-4 h-3 sm:h-4" />
            Live Learning Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Upcoming
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline">
              {" "}
              Webinars
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Join industry experts and expand your skills with our interactive
            online sessions
          </p>
        </div>

        {/* Upcoming Webinars */}
        <UpComingCore/>
      </div>
    </section>
  );
}