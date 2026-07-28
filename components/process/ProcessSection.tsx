"use client";

import Container from "@/components/shared/Container";
import {
  MessageSquare,
  ClipboardPen,
  Monitor,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import { useLanguage } from "@/context/LanguageContext";

// Icon components array
const icons = [
  <MessageSquare
    key="1"
    size={28}
    strokeWidth={1.6}
    className="w-7 h-7 text-[#8B5CF6]"
  />,
  <ClipboardPen
    key="2"
    size={28}
    strokeWidth={1.6}
    className="w-7 h-7 text-[#8B5CF6]"
  />,
  <Monitor
    key="3"
    size={28}
    strokeWidth={1.6}
    className="w-7 h-7 text-[#8B5CF6]"
  />,
  <Rocket
    key="4"
    size={28}
    strokeWidth={1.6}
    className="w-7 h-7 text-[#8B5CF6]"
  />
];

export default function ProcessSection() {
  const { t } = useLanguage();
  const steps = t.process.steps;

  return (
    <section className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-32">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            {t.process.title}
          </h1>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white sm:text-sm sm:tracking-[0.25em]">
            {t.process.subtitle}
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mb-16">
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative text-center"
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                {/* Glow behind icon */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-2 w-20 h-20 rounded-full bg-[#6F46FF]/15 blur-xl -z-10" />
                <div className="
                  mx-auto
                  flex
                  w-16 h-16
                  rounded-full
                  border border-[#6F46FF]/70
                  bg-[#0B0F16]
                  items-center justify-center
                  shadow-[0_0_25px_rgba(111,70,255,0.25)]
                  relative
                  z-10
                ">
                  {icons[index]}
                </div>

                <p className="mt-4 text-sm font-bold tracking-wider text-[#8B5CF6]">
                  {step.number}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-neutral-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}