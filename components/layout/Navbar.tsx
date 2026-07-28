"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/cn";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Adds smooth scroll-to-top on logo click if already on "/"
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Else, allow navigation to /
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#07090D]/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 md:h-24 max-w-[1400px] items-center justify-between">

        {/* Logo links to / and scrolls to top smoothly if already on home */}
        <Link href="/" onClick={handleLogoClick}>
          <Image
            src="/images/solvera-logo.png"
            alt="Solvera Digital"
            width={360}
            height={110}
            className="w-[170px] md:w-[210px] lg:w-[250px] h-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-neutral-300 transition hover:text-white",
                pathname === link.href &&
                  "text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-[#5EA7FF]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">
            Book a Free Call
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={34} strokeWidth={2.2} /> : <Menu size={34} strokeWidth={2.2} />}
        </button>

      </Container>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#07090D] flex flex-col lg:hidden">
          <div className="flex items-center justify-between h-20 md:h-24 px-6 md:px-12 border-b border-white/10">
            <Link href="/" onClick={(e) => {handleLogoClick(e); setMenuOpen(false);}}>
              <Image
                src="/images/solvera-logo.png"
                alt="Solvera Digital"
                width={360}
                height={110}
                className="w-[170px] md:w-[210px] lg:w-[250px] h-auto"
                priority
              />
            </Link>
            <button
              className="ml-2"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={34} strokeWidth={2.2} />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 pt-28 pb-8 px-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-neutral-200 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <Button
              href="/contact"
              className="mt-8 w-full max-w-xs"
              onClick={() => setMenuOpen(false)}
            >
              Book a Free Call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}