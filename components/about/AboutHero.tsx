import Image from "next/image";
import Container from "@/components/shared/Container";
import { CheckCircle2 } from "lucide-react";

const values = [
  "Results First — We focus on what moves the needle.",
  "Integrity — Honest communication and transparent process.",
  "Excellence — High-quality work, every time.",
  "Growth Mindset — Always learning and improving.",
];

export default function AboutHero() {
  return (
    <section className="pt-28 pb-12">
      <Container>

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F16] lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}

          <div className="p-8">

            <h1 className="text-4xl lg:text-5xl font-bold text-white">
              About Solvera Digital
            </h1>

            <p className="mt-5 text-neutral-400">
              We're passionate about helping businesses grow with modern,
              high-performance websites.
            </p>

            <div className="mt-6">

              <h2 className="text-2xl font-semibold text-white">
                Our Mission
              </h2>

              <p className="mt-3 text-neutral-400 leading-7">
                To help businesses establish a professional online presence
                through fast, modern websites that attract customers and
                drive growth.
              </p>

            </div>

            <div className="mt-6">

              <h2 className="text-2xl font-semibold text-white">
                Our Values
              </h2>

              <div className="mt-4 space-y-3">

                {values.map((value) => (
                  <div key={value} className="flex gap-3">

                    <CheckCircle2
                      size={20}
                      className="mt-1 text-[#7C5CFF]"
                    />

                    <span className="text-neutral-300">
                      {value}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative min-h-[400px] lg:min-h-[430px]">

            <Image
              src="/images/solveraoffice.png"
              alt="Solvera Digital Office"
              fill
              className="object-cover"
            />

          </div>

        </div>

      </Container>
    </section>
  );
}