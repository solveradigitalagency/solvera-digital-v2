import Container from "@/components/shared/Container";
import Image from "next/image";
import {
  Palette,
  Zap,
  TrendingUp,
  MessagesSquare,
} from "lucide-react";

const features = [
  {
    icon: <Palette size={28} />,
    title: "Custom Web Design",
    description:
      "Modern, professional designs tailored to your brand goals.",
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Optimized",
    description:
      "Fast-loading websites built for every device.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Conversion Focused",
    description:
      "Strategic layouts that generate more leads.",
  },
  {
    icon: <MessagesSquare size={28} />,
    title: "Transparent Process",
    description:
      "Clear communication from start to finish.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="pt-12 pb-6">
      <Container className="max-w-[1500px]">
        {/* Features Top Heading */}
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#7C5CFF]">
            WHY SOLVERA
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[48px]">
            High-Performance Websites
            <br />
            Built for Your Success
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  group
                  w-full
                  max-w-full
                  min-h-[220px]
                  rounded-[30px]
                  border border-white/10
                  bg-white/[0.03]
                  p-8
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-2
                  hover:border-purple-500/30
                  hover:bg-white/[0.05]
                  hover:shadow-[0_0_40px_rgba(124,92,255,0.15)]
                "
              >
                <div className="mb-6 text-[#7C5CFF]">
                  {feature.icon}
                </div>
                <h3 className="text-[20px] font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-[#9E7BFF]">
                  {feature.title}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image and Why Website Matters Section */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
          {/* NEW LEFT COLUMN */}
          <div className="flex justify-center">
            <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-6 w-full max-w-[720px] shadow-[0_0_60px_rgba(124,92,255,0.08)] relative">
              <Image
                src="/images/website-matters-graphic.png"
                alt="Solvera Digital website illustration"
                width={900}
                height={900}
                priority
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#7C5CFF] font-medium">
              WHY YOUR WEBSITE MATTERS
            </p>
            <h3 className="mt-4 text-4xl font-bold text-white leading-tight">
              Your Website Should Work Even When You're Not.
            </h3>
            <p className="mt-6 max-w-[580px] text-lg leading-9 text-neutral-400">
              Your website is more than an online brochure—it's your hardest-working
              sales tool. It builds trust, answers questions, and turns visitors into
              customers long before they ever contact you.
            </p>
            {/* Why website matters features */}
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-[620px] mx-auto">
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-5
                  w-full
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-purple-500/30
                  hover:bg-white/[0.08]
                  hover:shadow-[0_0_30px_rgba(124,92,255,0.18)]
                "
              >
                <h4 className="font-semibold text-white">
                  🛡 Build Trust
                </h4>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  A polished website creates credibility from the very first impression.
                </p>
              </div>
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-5
                  w-full
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-purple-500/30
                  hover:bg-white/[0.08]
                  hover:shadow-[0_0_30px_rgba(124,92,255,0.18)]
                "
              >
                <h4 className="font-semibold text-white">
                  📈 Generate Leads
                </h4>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Strategic layouts and calls-to-action convert visitors into inquiries.
                </p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 max-w-[620px] mx-auto">
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-5
                  w-full
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-purple-500/30
                  hover:bg-white/[0.08]
                  hover:shadow-[0_0_30px_rgba(124,92,255,0.18)]
                "
              >
                <h4 className="font-semibold text-white">
                  ⚡ Always Working
                </h4>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Your business stays open online 24 hours a day—even while you sleep.
                </p>
              </div>
              <div
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  p-5
                  w-full
                  transition-all
                  duration-300
                  hover:-translate-y-1.5
                  hover:border-purple-500/30
                  hover:bg-white/[0.08]
                  hover:shadow-[0_0_30px_rgba(124,92,255,0.18)]
                "
              >
                <h4 className="font-semibold text-white">
                  🚀 Stand Out
                </h4>
                <p className="mt-2 text-sm leading-7 text-neutral-400">
                  Differentiate your business with a modern experience your competitors
                  don't have.
                </p>
              </div>
            </div>
            {/* AnimatedOrb could be placed here or elsewhere based on design; example: */}
            {/* REMOVE OLD ORB HERE */}
            {/* Keep existing stats and globe layout as-is in right column */}
            <div className="mt-14 flex justify-center">
              {/* Stats */}
              <div className="flex flex-col gap-10 sm:flex-row sm:gap-12 lg:gap-20">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#7C5CFF]">
                    24/7
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Your website never stops working.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#7C5CFF]">
                    3s
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Visitors form first impressions in seconds.
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-[#7C5CFF]">
                    100%
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Built specifically for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}