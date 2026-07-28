"use client";

import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="pb-16">
      <Container>

        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-[#11151E] to-[#18102A] px-6 py-7 md:px-8 lg:px-10 lg:flex-row">

          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">
              {t.processCTA.badge}
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              {t.processCTA.title}
            </h2>

            <p className="mt-4 max-w-xl text-neutral-400">
              {t.processCTA.description}
            </p>
          </div>

          <Button
            href="/contact"
            className="w-full max-w-xs sm:w-auto"
          >
            {t.processCTA.button}
          </Button>

        </div>

      </Container>
    </section>
  );
}