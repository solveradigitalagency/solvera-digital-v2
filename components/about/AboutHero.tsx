"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="pt-20 pb-12 md:pt-24 lg:pt-28">
      <Container>

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F16] md:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}

          <div className="p-6 md:p-8">

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {t.about.hero.title}
            </h1>

            <p className="mt-5 text-neutral-400">
              {t.about.hero.description}
            </p>

            <div className="mt-6">

              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                {t.about.hero.missionTitle}
              </h2>

              <p className="mt-3 text-neutral-400 leading-7">
                {t.about.hero.missionDescription}
              </p>

            </div>

            <div className="mt-6">

              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                {t.about.hero.valuesTitle}
              </h2>

              <div className="mt-4 space-y-3">

                {t.about.hero.values.map((value) => (
                  <div key={value} className="flex items-start gap-3">

                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                      <CheckCircle2
                        size={20}
                        className="text-[#7C5CFF]"
                      />
                    </div>

                    <span className="text-neutral-300">
                      {value}
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative min-h-[260px] md:min-h-[400px] lg:min-h-[430px]">

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