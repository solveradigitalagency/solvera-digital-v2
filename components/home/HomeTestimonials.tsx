"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/shared/Container";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jake Carmona",
    role: "Founder, Casa Carmona",
    company: "Casa Carmona",
    logo: "/logos/casa-carmona.svg",
    rating: 5,
    review:
      "Working with Solvera Digital was exactly what we needed. They understood the vision behind Casa Carmona and translated it into a website that feels clean, premium, and true to our brand. The process was straightforward, communication was excellent, and the final result exceeded our expectations.",
  },

  {
    name: "John Smith",
    role: "Owner, Smith Heating & Air",
    company: "Smith Heating & Air",
    logo: "/logos/casa-carmona.svg", // temporary placeholder
    rating: 5,
    review:
      "Solvera Digital completely transformed our online presence. The website looks professional, loads incredibly fast, and has already helped us generate more service inquiries. The communication throughout the project was excellent, and everything was delivered exactly as promised.",
  },
];

export default function HomeTestimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  return (
    <section className="pt-6 pb-28">
      <Container className="max-w-[1200px]">
        <div className="flex items-start gap-8">
          {/* Left: Testimonial Card */}
          <div
            className="
              relative
              rounded-3xl
              border border-white/10
              bg-[#0B0F16]
              px-10
              pt-8
              pb-20
              max-w-[700px] w-full
              min-h-[300px]
              mx-auto
              flex-shrink-0
            "
          >
            {/* Heading inside the card */}
            <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 text-center">
              WHAT OUR CLIENTS SAY
            </p>

            {/* Lucide Quote Icon */}
            <div className="mt-2 mb-2 flex justify-center">
              <Quote
                className="text-[#7C5CFF]"
                size={38}
                strokeWidth={2.5}
              />
            </div>

            {/* Stars */}
            <div className="flex gap-1 text-[#7C5CFF] justify-center mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                  strokeWidth={0}
                />
              ))}
            </div>

            {/* Review */}
            <p className="max-w-[560px] mx-auto text-[17px] leading-7 text-neutral-300 text-center">
              {`“${testimonial.review}”`}
            </p>

            {/* Footer/Profile */}
            <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={32}
                    height={32}
                    className="h-8 w-auto opacity-90"
                  />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-neutral-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === 0 ? testimonials.length - 1 : prev - 1
                    )
                  }
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-white/5
                    border border-white/10
                    transition
                    hover:border-[#7C5CFF]
                    hover:bg-[#7C5CFF]/10
                    text-white
                  "
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  onClick={() =>
                    setCurrent((prev) =>
                      prev === testimonials.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-white/5
                    border border-white/10
                    transition
                    hover:border-[#7C5CFF]
                    hover:bg-[#7C5CFF]/10
                    text-white
                  "
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Indicator dots within card, absolutely positioned above footer */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-[#7C5CFF]"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* No more RightSideDesign component */}
        </div>
      </Container>
    </section>
  );
}