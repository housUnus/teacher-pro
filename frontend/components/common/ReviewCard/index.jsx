import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Sparkles } from "lucide-react";

export function ReviewCard({ item }) {
  const testimonial = item;
  return (
    <Card
      className={` bg-white/80 border-0 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 h-full relative ${
        testimonial.featured ? "ring-2 ring-orange-200" : ""
      }`}
    >
      <CardContent className="px-6 py-4">
        {/* Featured Badge */}
        {testimonial.featured && (
          <div className="absolute -top-2 left-6 z-10">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
              <Sparkles className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          </div>
        )}

        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-blue-500 opacity-50" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-700 mb-4 leading-relaxed italic">
          "{testimonial.text}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 ring-2 ring-blue-100">
            <AvatarImage
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
            />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default ReviewCard;
