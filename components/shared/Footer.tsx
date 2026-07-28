"use client";

import {
  Mail,
  Phone,
} from "lucide-react";

import Container from "./Container";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#07090D] py-8 md:py-10">
      <Container>
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left">

          {/* Logo (now just text, no image) */}
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              {/* No image, just text. Shrink to text-xl */}
              <span className="text-xl font-bold text-white">
                Solvera Digital
              </span>
            </div>

            <p className="mt-3 max-w-xs leading-7 text-neutral-400">
              {t.footer.tagline}
            </p>
            {/* Removed mail icon link below the tagline */}
          </div>

          {/* Contact */}
          <div className="lg:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.heading}
            </h3>
            <div className="mt-3 flex flex-col gap-3 text-neutral-400">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Phone size={18} />
                <a
                  href="tel:2819060248"
                  className="hover:text-white transition"
                >
                  (281) 906-0248
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Mail size={18} />
                <a
                  href="mailto:solveradigitalagency@gmail.com"
                  className="hover:text-white transition"
                >
                  solveradigitalagency@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <p className="mt-6 text-center text-sm text-neutral-500">
          {t.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}