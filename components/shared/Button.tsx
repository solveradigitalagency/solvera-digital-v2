import Link from "next/link";
import { cn } from "@/lib/cn";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-[#5EA7FF] to-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/20 hover:scale-[1.02] hover:shadow-[#8B5CF6]/40"
          : "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10",
        className
      )}
    >
      {children}
    </Link>
  );
}