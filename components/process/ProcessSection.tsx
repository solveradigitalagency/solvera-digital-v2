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

const steps = [
  {
    icon: (
      <MessageSquare
        size={28}
        strokeWidth={1.6}
        className="w-7 h-7 text-[#8B5CF6]"
      />
    ),
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and what you want your website to accomplish.",
  },
  {
    icon: (
      <ClipboardPen
        size={28}
        strokeWidth={1.6}
        className="w-7 h-7 text-[#8B5CF6]"
      />
    ),
    number: "02",
    title: "Strategy & Planning",
    description:
      "We create the structure, content strategy, and layout before any design begins.",
  },
  {
    icon: (
      <Monitor
        size={28}
        strokeWidth={1.6}
        className="w-7 h-7 text-[#8B5CF6]"
      />
    ),
    number: "03",
    title: "Design & Development",
    description:
      "Your website is professionally designed and developed for speed, responsiveness, and conversions.",
  },
  {
    icon: (
      <Rocket
        size={28}
        strokeWidth={1.6}
        className="w-7 h-7 text-[#8B5CF6]"
      />
    ),
    number: "04",
    title: "Launch & Support",
    description:
      "Once everything is approved, we launch your website and remain available for support.",
  },
];

export default function ProcessSection() {
  return (
    <section className="pt-32 pb-16">
      <Container>
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-5xl font-bold text-white">
            Our Process
          </h1>
          <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white">
            A Simple Process That Delivers Results
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mb-16">
          <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/60 to-transparent hidden lg:block" />

          <div className="grid gap-12 lg:grid-cols-4">
            {steps.map((step) => (
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
                  {step.icon}
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