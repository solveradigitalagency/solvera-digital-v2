"use client";

import { useState } from "react";
import Container from "@/components/shared/Container";
import { InlineWidget } from "react-calendly";

export default function DiscoveryCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="pb-12 md:pb-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-[#11151E] to-[#18102A] px-6 py-6 text-center md:px-8 lg:flex-row lg:px-10 lg:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">
                Ready to Get Started?
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Let's Build Your New Website.
              </h2>

              <p className="mt-4 max-w-xl text-neutral-400">
                Schedule a free discovery call and let's discuss how we can
                create a website that helps your business stand out online.
              </p>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="w-full max-w-xs rounded-xl bg-gradient-to-r from-[#5EA7FF] to-[#8B5CF6] px-8 py-4 font-semibold text-white transition hover:opacity-90 sm:w-auto"
            >
              Book a Free Discovery Call
            </button>
          </div>
        </Container>
      </section>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 sm:p-6">
          <div className="relative w-full max-w-5xl rounded-3xl border border-white/10 bg-[#0B0F16] overflow-hidden">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 z-10 text-white text-3xl hover:text-[#7C5CFF]"
            >
              ×
            </button>

            <div className="p-6 pb-4 text-center sm:p-8 sm:pb-4">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Book Your Discovery Call
              </h2>

              <p className="mt-2 text-neutral-400">
                Choose a time that works best for you.
              </p>
            </div>

            <InlineWidget
              url="https://calendly.com/solveradigitalagency/new-meeting"
              styles={{
                height: "min(700px, 75vh)",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}