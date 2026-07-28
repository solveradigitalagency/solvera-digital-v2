"use client";

import Container from "@/components/shared/Container";
import Card from "./Card";
import { useLanguage } from "@/context/LanguageContext";

import {
  Monitor,
  Code2,
  Search,
} from "lucide-react";

const icons = [
  <Monitor size={28} key="monitor" />,
  <Code2 size={28} key="code" />,
  <Search size={28} key="search" />,
];

export default function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 lg:py-24">
      <Container>

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">
            {t.services.badge}
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {t.services.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {t.services.cards.map((service, index) => (
            <Card
              key={index}
              icon={icons[index]}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}