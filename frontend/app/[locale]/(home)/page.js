import { Hero } from "./Hero";
import UpcomingWebinars from "./Upcoming";
import Testimonial from "./Testimonial";
import CTA from "./CTA";
import CompaniesLogo from "./CompaniesLogos";
import HowItWorksPage from "./Features";
import PersonalSession from "./PersonSession";
import SocialProof from "./SocialProof";
import MotionSection from "@/components/common/Motion/MotionSection";
import Footer from "@/components/common/Footer";
import FAQSection from "./Faq";

export default function Home() {
  
  return (
    <main className="w-full flex flex-col row-start-2 items-center">
      <Hero />
      <div className="container max-w-7xl mx-auto">
        <HowItWorksPage/>
      </div>
      <div className="container max-w-7xl mx-auto">
        <UpcomingWebinars />
      </div>
      <div className="container max-w-7xl mx-auto">
        <PersonalSession />
      </div>
       <div className="container max-w-7xl mx-auto" duration={0.6}>
        <SocialProof />
      </div>
      <div className="container max-w-7xl mx-auto">
        <CompaniesLogo />
      </div>
      <div className="container max-w-7xl mx-auto">
        <Testimonial />
      </div>
      <div className="container max-w-7xl mx-auto">
        <FAQSection />
      </div>
      <CTA />
    </main>
  );
}
