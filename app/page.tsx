import Hero from "@/components/home/Hero";
import HomeLogoStrip from "@/components/home/HomeLogoStrip";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeTestimonials from "@/components/home/HomeTestimonials";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <HomeLogoStrip /> */}
      <div className="max-w-[1500px] mx-auto">
        <HomeFeatures />
      </div>
      <HomeCTA />
    </>
  );
}
