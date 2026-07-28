import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[#64A7FF]/25 bg-[#64A7FF]/10 px-4 py-1.5 text-sm font-semibold text-[#64A7FF]",
        className
      )}
    >
      {children}
    </span>
  );
}