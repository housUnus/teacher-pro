import _Carousel from "@/components/common/Carousel";
import { ReviewCard } from "@/components/common/ReviewCard";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior Data Scientist",
    company: "Google",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The AI & Machine Learning webinars completely transformed my career. The instructors are world-class and the interactive format made complex concepts easy to understand.",
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Microsoft",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I've attended over 15 webinars on this platform. The quality is consistently excellent, and the networking opportunities are invaluable.",
    featured: false,
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Professor of Computer Science",
    company: "Stanford University",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As an instructor, I'm impressed by the platform's technology and student engagement. It's the future of online education.",
    featured: true,
  },
  {
    id: 4,
    name: "David Park",
    role: "UX Designer",
    company: "Meta",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The design webinars helped me land my dream job. The practical exercises and real-world projects made all the difference.",
    featured: false,
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "Amazon",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "ROI on these webinars is incredible. I've implemented strategies that increased our conversion rate by 40%.",
    featured: false,
  },
  {
    id: 6,
    name: "Prof. James Wilson",
    role: "Business Strategy Expert",
    company: "Harvard Business School",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Teaching on this platform has been rewarding. The students are engaged, and the tools make delivering content seamless.",
    featured: true,
  },
];

export default function Testimonial() {
  return (
    <section className="py-14 px-6 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Section */}
        <div className="mb-0">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Community Says
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from professionals who transformed their careers with
              our platform
            </p>
          </div>

          {/* Horizontal Scrollable Testimonials */}
          <_Carousel 
            items={testimonials} 
            Component={ReviewCard} 
            contentClassName="-ml-0 sm:-ml-0 md:-ml-4 py-10" 
            ItemClassName="basis-[97%] sm:basis-[55%] md:basis-[30%] md:pl-6 pl-2"/>
        </div>
      </div>
    </section>
  );
}
