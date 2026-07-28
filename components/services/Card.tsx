import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Card({
  icon,
  title,
  description,
}: CardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-[#0B0F17] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#7C5CFF]/40 hover:shadow-[0_20px_60px_rgba(124,92,255,.15)]">

      {/* Icon */}
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7C5CFF]/10 text-[#7C5CFF]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-neutral-400">
        {description}
      </p>

      {/* Link */}
      <Link
        href="/contact"
        className="mt-8 inline-flex items-center gap-2 font-medium text-[#7C5CFF] transition-all duration-300 group-hover:gap-3"
      >
        Learn More
        <ArrowRight size={18} />
      </Link>

    </div>
  );
}