import Container from "@/components/shared/Container";
import {
  MapPin,
  Users,
  MonitorSmartphone,
  TrendingUp,
} from "lucide-react";

const items = [
  {
    icon: (
      <MapPin
        size={28}
        strokeWidth={1.6}
        className="text-[#8B5CF6]"
      />
    ),
    title: "Local & Reliable",
    description:
      "We understand local businesses and build websites that help them grow.",
  },
  {
    icon: (
      <Users
        size={28}
        strokeWidth={1.6}
        className="text-[#8B5CF6]"
      />
    ),
    title: "Personalized Service",
    description:
      "Every project is tailored specifically to your business and goals.",
  },
  {
    icon: (
      <MonitorSmartphone
        size={28}
        strokeWidth={1.6}
        className="text-[#8B5CF6]"
      />
    ),
    title: "Modern & Effective",
    description:
      "Beautiful websites built for speed, SEO, and conversions.",
  },
  {
    icon: (
      <TrendingUp
        size={28}
        strokeWidth={1.6}
        className="text-[#8B5CF6]"
      />
    ),
    title: "Results Focused",
    description:
      "Every website is built with one goal: helping your business attract more customers.",
  },
];

export default function WhyWork() {
  return (
    <section className="pb-16">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-[#0B0F16] p-10">

          <h2 className="mb-10 text-3xl font-bold text-white">
            Why Work With Us?
          </h2>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <div key={item.title}>
                <div className="mb-5 text-[#7C5CFF]">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}