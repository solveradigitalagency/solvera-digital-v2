"use client";

import {
  Mail,
  Phone,
} from "lucide-react";

import Container from "./Container";
import { useLanguage } from "@/context/LanguageContext";

// WhatsApp SVG Icon Component (if not available in lucide-react)
function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M7.947 3.357a9 9 0 0 1 9.914 13.56l1.09 3.18a.7.7 0 0 1-.885.887l-3.18-1.092a9 9 0 1 1-6.94-16.535z"
        fill="none"
      />
      <path
        d="M17.8 16.04A7.001 7.001 0 1 0 12 19c1.27 0 2.477-.33 3.507-.91l2.3.792-.803-2.314a7 7 0 0 0 .797-2.528z"
        fill="none"
      />
      <path
        d="M16.087 13.489c-.2-.1-1.186-.585-1.37-.652-.183-.067-.316-.1-.45.1-.133.2-.515.652-.632.786-.117.133-.233.15-.432.05-.2-.1-.85-.314-1.617-.997-.599-.534-1.003-1.193-1.12-1.393-.117-.2-.013-.307.088-.407.09-.086.2-.233.299-.35.1-.118.133-.2.2-.333a.38.38 0 0 0-.016-.35c-.05-.1-.45-1.08-.618-1.478-.163-.391-.33-.339-.45-.345-.116-.007-.25-.008-.383-.008-.132 0-.35.05-.534.25-.184.2-.699.684-.699 1.666s.716 1.937.816 2.073c.1.134 1.401 2.139 3.395 2.916.476.164.846.262 1.136.334.477.115.913.099 1.257.06.383-.044 1.186-.485 1.354-.952.167-.467.167-.867.117-.952-.05-.084-.183-.133-.383-.233z"
        fill="currentColor"
      />
    </svg>
  );
}

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
                <span>
                  +1 (281) 906-0248
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <WhatsAppIcon />
                <span>
                  +1 (281) 906-0248
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <Mail size={18} />
                <span>
                  solveradigitalagency@gmail.com
                </span>
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