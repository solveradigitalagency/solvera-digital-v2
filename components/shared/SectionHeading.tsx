import { cn } from "@/lib/cn";
import Badge from "./Badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-5">
          <Badge>{eyebrow}</Badge>
        </div>
      )}

      <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}