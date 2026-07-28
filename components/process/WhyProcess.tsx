import Image from "next/image";
import Container from "@/components/shared/Container";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Transparent at every step",
  "No surprises, just results",
  "Built for long-term success",
  "Focused on your growth",
];

export default function WhyProcess() {
  return (
    <section className="pb-24">
      <Container>

        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F16] lg:grid-cols-2">

          {/* Left */}
          <div className="flex flex-col justify-center p-12">

            <h2 className="text-3xl font-bold text-white">
              Why Our Process Works
            </h2>

            <p className="mt-5 text-neutral-400 leading-8">
              We combine clear communication, proven strategies, and
              high-quality development to create websites that don't just
              look amazing—they generate results.
            </p>

            <div className="mt-10 space-y-5">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-[#7C5CFF]"
                  />
                  <span className="text-neutral-300">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right */}
          <div className="relative min-h-[420px]">

            <Image
              src="/images/processlogo.png"
              alt="Solvera Digital Process"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}