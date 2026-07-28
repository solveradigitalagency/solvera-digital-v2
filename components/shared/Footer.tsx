import {
  Mail,
  Phone,
} from "lucide-react";

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07090D] py-6">
      <Container>
        <div className="flex flex-col justify-between gap-10 lg:flex-row">

          {/* Logo (now just text, no image) */}
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              {/* No image, just text. Shrink to text-xl */}
              <span className="text-xl font-bold text-white">
                Solvera Digital
              </span>
            </div>

            <p className="mt-3 max-w-xs leading-7 text-neutral-400">
              Modern websites built to grow your business.
            </p>
            {/* Removed mail icon link below the tagline */}
          </div>

          {/* Contact */}
          <div className="lg:ml-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Let's Connect
            </h3>
            <div className="mt-2 flex flex-col gap-2 text-neutral-400">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a
                  href="tel:2819060248"
                  className="hover:text-white transition"
                >
                  (281) 906-0248
                </a>
              </div>
              <div className="flex items-center gap-2">
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
          © 2026 Solvera Digital. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}