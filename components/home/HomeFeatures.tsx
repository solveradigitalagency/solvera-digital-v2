"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import {
  Palette,
  Zap,
  TrendingUp,
  MessagesSquare,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const icons = [
  <Palette size={28} key="palette" />,
  <Zap size={28} key="zap" />,
  <TrendingUp size={28} key="trending" />,
  <MessagesSquare size={28} key="messages" />,
];

export default function HomeFeatures() {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-6">
      <Container className="max-w-[1500px]">
        {/* Features Top Heading */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C5CFF]">
            {t.homeFeatures.badge}
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[48px]">
            {t.homeFeatures.titleLine1}
            <br />
            {t.homeFeatures.titleLine2}
          </h2>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {t.homeFeatures.cards.map((feature, index) => (
              <div
                key={index}
                className="
                  group
                  w-full
                  max-w-full
                  min-h-[220px]
                  rounded-[30px]
                  border border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:border-purple-500/30
                  hover:bg-white/[0.05]
                  hover:shadow-[0_0_40px_rgba(124,92,255,0.15)]
                "
              >
                <div className="mb-6 text-[#7C5CFF]">
                  {icons[index]}
                </div>

                <h3 className="text-[20px] font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#9E7BFF]">
                  {feature.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image and Why Website Matters Section */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Left */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[720px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_0_60px_rgba(124,92,255,0.08)]">
              <Image
                src="/images/website-matters-graphic.png"
                alt="Solvera Digital website illustration"
                width={900}
                height={900}
                priority
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#7C5CFF]">
              {t.homeFeatures.websiteMatters.badge}
            </p>

            <h3 className="mt-4 text-4xl font-bold leading-tight text-white">
              {t.homeFeatures.websiteMatters.title}
            </h3>

            <p className="mt-6 max-w-[580px] text-lg leading-9 text-neutral-400">
              {t.homeFeatures.websiteMatters.description}
            </p>

            {/* Cards */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {t.homeFeatures.websiteMatters.cards.map((card, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1.5
                    hover:border-purple-500/30
                    hover:bg-white/[0.08]
                    hover:shadow-[0_0_30px_rgba(124,92,255,0.18)]
                  "
                >
                  <h4 className="font-semibold text-white">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-neutral-400">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-14 flex justify-center">
              <div className="flex flex-col gap-10 sm:flex-row sm:gap-12 lg:gap-20">
                {t.homeFeatures.websiteMatters.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-4xl font-bold text-[#7C5CFF]">
                      {stat.number}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-400">
                      {stat.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}