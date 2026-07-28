"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyProcess() {
  const { t } = useLanguage();

  return (
    <section className="pb-16 md:pb-20 lg:pb-24">
      <Container>

        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F16] md:grid-cols-2">

          {/* Left */}
          <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">

            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              {t.whyProcess.title}
            </h2>

            <p className="mt-5 text-neutral-400 leading-8">
              {t.whyProcess.description}
            </p>

            <div className="mt-10 space-y-5">
              {t.whyProcess.points.map((point) => (
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
          <div className="relative min-h-[260px] md:min-h-[420px]">

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