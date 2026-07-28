import Container from "@/components/shared/Container";
import Card from "./Card";

import {
  Monitor,
  Code2,
  Search,
} from "lucide-react";

const services = [
  {
    icon: <Monitor size={28} />,
    title: "Custom Web Design",
    description:
      "Modern, custom-designed websites that reflect your brand, build credibility, and turn visitors into customers.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern technologies to deliver a seamless experience across every device.",
  },
  {
    icon: <Search size={28} />,
    title: "SEO Optimization",
    description:
      "Built with SEO best practices to improve your visibility on search engines and help more customers find your business online.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <Container>

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#7C5CFF]">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Everything You Need to Grow Online
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
            From custom design to development and SEO, we build websites that
            help your business stand out, build trust, and generate more leads.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}