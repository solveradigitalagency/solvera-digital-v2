import ProcessSection from "@/components/process/ProcessSection";
import WhyProcess from "@/components/process/WhyProcess";
import CTA from "@/components/process/CTA";

export default function ProcessPage() {
  return (
    <main className="bg-[#07090D] min-h-screen">
      <ProcessSection />
      <WhyProcess />
      <CTA />
    </main>
  );
}