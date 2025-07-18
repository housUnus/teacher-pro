import { Hero } from "./Hero";
import CourseCard from "@/components/common/CourseCard";
import { courses } from "@/lib/_data";
import ExpertCard from "@/components/common/ExpertCard";
import Stories from "./Testimonials";
import CTA from "./CTA";
import Carousel from "@/components/common/Carousel";
import CompaniesLogo from "./CompaniesLogs";
export default function Home() {
  return (
    <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Hero />

      <div className="container max-w-6xl mx-auto">
        <CompaniesLogo/>
      </div>
      <div className="container max-w-6xl mx-auto">
        <Carousel courses={courses} />
      </div>

      <ExpertCard
        name="John Doe"
        expertise="Digital Marketing"
        image="https://picsum.photos/200"
        rating={4.7}
        sessions={120}
      />
      <Stories />
      <CTA />
    </main>
  );
}
