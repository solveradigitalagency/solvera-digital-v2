import AboutHero from "@/components/about/AboutHero";
import WhyWork from "@/components/about/WhyWork";
import CTA from "@/components/process/CTA";

export default function AboutPage() {
  return (
    <main className="bg-[#07090D] min-h-screen">
      <AboutHero />
      <WhyWork />
      <CTA />
    </main>
  );
}