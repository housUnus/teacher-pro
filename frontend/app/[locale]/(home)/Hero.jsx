import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl'; // declare this import

export function Hero({}) {
  const t = useTranslations('Hero');
  return (
    <div className="container mx-auto py-8 px-10">
      <div className="grid sm:grid-cols-1 md:grid-cols-12 gap-4">
        <div className="sm:col-span-1 md:col-span-7 flex flex-col items-center text-center md:items-start md:text-left justify-start md:pt-10">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-slate-900">
            <p>
              Learn from <span className="text-primary font-bold">Experts</span>
            </p>
            <p>
              <span className="text-secondary font-bold">Master</span> New
              Skills
            </p>
          </h1>
          <p className="py-4 text-base md:text-lg text-gray-500 my-3">
            Connect with industry leaders, gain real-world knowledge, and
            achieve your professional goals.
          </p>
          <div className="md:hidden sm:flex justify-end text-end mb-8">
            <img
              className="w-10/12 md:w-11/12 mx-auto"
              src="/images/hero image main.jpg"
              alt="Awesome hero page image"
            />
          </div>
          <div className="flex gap-4">
            <Button variant="default" className="rounded-lg py-6 font-bold">
              Browse Categories
            </Button>
            <Button
              variant="outline"
              className="rounded-lg py-6 text-primary font-bold"
            >
              Become a Trainer
            </Button>
          </div>
          <div className="people-enrolled hidden md:flex items-center gap-6 mt-10">
            <div className="img w-1/6">
              <img
                src="/images/enrolled people colored.jpg"
                alt="Enrolled People"
              />
            </div>
            <div className="desc">
              <p className="font-semibold">50K+ Students</p>
              <p className="">Already Enrolled</p>
            </div>
          </div>
        </div>

        <div className="hidden md:col-span-5 md:flex justify-end text-end">
          <img
            className="lg:w-11/12"
            src="/images/hero image main.jpg"
            alt="Awesome hero page image"
          />
        </div>
      </div>
    </div>
  );
}
<div className="container">
  <div className="row">
    <div className="col">Content</div>
    <div className="col">Content</div>
  </div>
</div>;
