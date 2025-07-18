import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Take Your Learning to the Next Level</h2>
        <p className="text-lg text-white/80 mb-6">
          Join live sessions with top experts and gain real-world knowledge in an interactive environment.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-white text-blue-600 px-6 py-3 font-medium rounded-full hover:bg-gray-100 transition">
            Explore Courses
          </Button>
          <Button className="bg-transparent border border-white px-6 py-3 font-medium rounded-full hover:bg-white hover:text-blue-600 transition">
            Become an Expert
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
