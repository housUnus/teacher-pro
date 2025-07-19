import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Specialist",
    image: "https://picsum.photos/200?random=1",
    rating: 4.8,
    message: "This platform helped me connect with industry experts and gain real-world insights!",
  },
  {
    id: 2,
    name: "James Williams",
    role: "Software Engineer",
    image: "https://picsum.photos/200?random=2",
    rating: 4.7,
    message: "The live sessions were truly interactive and valuable. Highly recommend!",
  },
  {
    id: 3,
    name: "Emily Carter",
    role: "Entrepreneur",
    image: "https://picsum.photos/200?random=3",
    rating: 5.0,
    message: "Learning from top experts in a face-to-face setting changed my career trajectory!",
  },
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="p-6 rounded-xl shadow-md border border-gray-200 bg-white">
      <CardContent className="flex flex-col items-center text-center space-y-4">
        <Avatar className="w-14 h-14">
          <AvatarImage src={testimonial.image} alt={testimonial.name} />
        </Avatar>
        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < Math.floor(testimonial.rating) ? "fill-amber-500 text-amber-500" : "fill-gray-300 text-gray-300"}`} />
          ))}
        </div>
        <p className="text-sm text-gray-700 italic">"{testimonial.message}"</p>
      </CardContent>
    </Card>
  );
};

const Stories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Learners Say</h2>
        <p className="text-gray-600 mb-12">Real stories from real people who have benefited from our expert-led training.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
