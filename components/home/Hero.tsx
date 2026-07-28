"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

const highlights = [
  "Fast Delivery",
  "Custom Design",
  "Mobile Optimized",
  "SEO Friendly",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07090D] min-h-screen">
      {/* Mountains Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/mountains.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-90"
        />
      </div>

      {/* Purple Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#6F46FF]/25 blur-[170px]" />

      <Container className="relative z-10 flex pt-28">

        {/* LEFT */}
        <motion.div
          className="max-w-[560px]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >

          <motion.p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]"
            variants={fadeUp}
          >
            <span className="text-[#5EA7FF]">MODERN WEBSITES.</span>{" "}
            <span className="text-[#7C5CFF]">REAL RESULTS.</span>
          </motion.p>

          <motion.h1
            className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl xl:text-7xl"
            variants={fadeUp}
          >
            We Build Websites
            <br />
            <span className="bg-gradient-to-r from-[#5EA7FF] to-[#8B5CF6] bg-clip-text text-transparent">
              That Grow Your Business.
            </span>
          </motion.h1>

          <motion.p
            className="mt-8 text-lg leading-8 text-neutral-300"
            variants={fadeUp}
          >
            Solvera Digital helps businesses establish a professional online
            presence with fast, modern, and conversion-focused websites.
          </motion.p>

          <motion.div
            className="mt-10 flex gap-5 flex-wrap"
            variants={fadeUp}
          >
            <Button href="/contact">
              Book a Free Discovery Call
            </Button>
            <Button
              href="/services"
              variant="secondary"
            >
              View Our Services
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-400"
            variants={fadeUp}
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  size={15}
                  className="text-[#5EA7FF] shrink-0"
                />
                <span>
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="absolute -right-28 -bottom-6 hidden lg:block"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/images/laptop.png"
            alt="Laptop"
            width={900}
            height={650}
            priority
            unoptimized
            className="w-[720px] xl:w-[900px] h-auto"
          />
        </motion.div>

      </Container>

    </section>
  );
}