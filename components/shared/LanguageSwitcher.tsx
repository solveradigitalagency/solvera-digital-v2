"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-neutral-300 transition hover:text-white"
      >
        {language === "en" ? "English" : "Español"}

        <ChevronDown
          size={16}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-40 rounded-xl border border-white/10 bg-[#10131A] p-2 shadow-2xl backdrop-blur-xl">
          <button
            onClick={() => {
              setLanguage("en");
              setOpen(false);
            }}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
              language === "en"
                ? "bg-white/10 text-white"
                : "text-neutral-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            English
            {language === "en" && "✓"}
          </button>

          <button
            onClick={() => {
              setLanguage("es");
              setOpen(false);
            }}
            className={`mt-1 flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition ${
              language === "es"
                ? "bg-white/10 text-white"
                : "text-neutral-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            Español
            {language === "es" && "✓"}
          </button>
        </div>
      )}
    </div>
  );
}