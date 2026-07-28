"use client";

import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function HomeCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-[#0B0F16] px-6 py-12 md:px-8 md:py-16 lg:py-20 text-center">

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {t.homeCTA.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            {t.homeCTA.description}
          </p>

          <div className="mt-10">
            <Button
              href="/contact"
              className="w-full max-w-xs px-8 py-4 text-base sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              {t.homeCTA.button}
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}