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
      <Container className="flex h-24 max-w-[1400px] items-center justify-between">

        {/* Logo links to / and scrolls to top smoothly if already on home */}
        <Link href="/" onClick={handleLogoClick}>
          <Image
            src="/images/solvera-logo.png"
            alt="Solvera Digital"
            width={360}
            height={110}
            className="w-[250px] h-auto"
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
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </Container>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07090D]/95 lg:hidden">
          <Container className="max-w-[1400px]">
            <nav className="flex flex-col gap-6 py-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-neutral-300"
                >
                  {link.name}
                </Link>
              ))}

              <Button href="/contact">
                Book a Free Call
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}