"use client";

import Image from "next/image";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#07090D] min-h-[760px] lg:min-h-screen">
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

      <Container className="relative z-10 flex pt-20 md:pt-24 lg:pt-28">

        {/* LEFT */}
        <motion.div
          className={`max-w-full lg:max-w-[560px] ${language === "es" ? "-mt-4" : ""}`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >

          <motion.p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]"
            variants={fadeUp}
          >
            <span className="text-[#5EA7FF]">{t.hero.badgeBlue}</span>{" "}
            <span className="text-[#7C5CFF]">{t.hero.badgePurple}</span>
          </motion.p>

          <motion.h1
            className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl xl:text-7xl"
            variants={fadeUp}
          >
            {t.hero.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-[#5EA7FF] to-[#8B5CF6] bg-clip-text text-transparent">
              {t.hero.titleLine2}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base leading-7 text-neutral-300 md:text-lg md:leading-8"
            variants={fadeUp}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            variants={fadeUp}
          >
            <Button href="/contact">
              {t.hero.primaryButton}
            </Button>
            <Button
              href="/services"
              variant="secondary"
            >
              {t.hero.secondaryButton}
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-4 md:gap-6 text-sm text-neutral-400"
            variants={fadeUp}
          >
            {t.hero.highlights.map((item) => (
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