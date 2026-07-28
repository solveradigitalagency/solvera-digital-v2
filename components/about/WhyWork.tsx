"use client";

import Container from "@/components/shared/Container";
import {
  MapPin,
  Users,
  MonitorSmartphone,
  TrendingUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyWork() {
  const { t } = useLanguage();

  const items = [
    {
      icon: (
        <MapPin
          size={28}
          strokeWidth={1.6}
          className="text-[#8B5CF6]"
        />
      ),
      ...t.whyWork.items[0],
    },
    {
      icon: (
        <Users
          size={28}
          strokeWidth={1.6}
          className="text-[#8B5CF6]"
        />
      ),
      ...t.whyWork.items[1],
    },
    {
      icon: (
        <MonitorSmartphone
          size={28}
          strokeWidth={1.6}
          className="text-[#8B5CF6]"
        />
      ),
      ...t.whyWork.items[2],
    },
    {
      icon: (
        <TrendingUp
          size={28}
          strokeWidth={1.6}
          className="text-[#8B5CF6]"
        />
      ),
      ...t.whyWork.items[3],
    },
  ];

  return (
    <section className="pb-12 md:pb-16">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-[#0B0F16] p-6 md:p-8 lg:p-10">

          <h2 className="mb-8 text-2xl font-bold leading-tight text-white sm:text-3xl md:mb-10">
            {t.whyWork.title}
          </h2>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <div key={item.title}>
                <div className="mb-5 text-[#7C5CFF]">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-neutral-400 sm:text-base">
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