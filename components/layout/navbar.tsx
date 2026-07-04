"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, company } from "@/lib/data/company";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <div className="container-x">
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-500",
              scrolled
                ? "glass h-14 shadow-[0_10px_40px_-20px_rgba(10,16,32,0.35)]"
                : "h-16 bg-transparent",
            )}
          >
            <Link href="/" aria-label="Zilola Medical home">
              <Logo />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      active ? "text-ink-900" : "text-muted hover:text-ink-900",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-ink-900/[0.06]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                href={company.phones[0].href}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink-900"
              >
                <Phone className="h-4 w-4" />
                {company.phones[0].value}
              </a>
              <Button href="/kontakty" size="sm" variant="primary">
                Записаться
              </Button>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-xl text-ink-900 lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-900/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-3 top-20 rounded-3xl bg-white p-4 shadow-float"
            >
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between border-b border-line px-3 py-4 text-lg font-medium text-ink-900"
                    >
                      {link.label}
                      <span className="text-teal-500">→</span>
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 flex flex-col gap-3 px-1">
                  <Button href="/kontakty" size="lg" variant="dark" className="w-full">
                    Записаться на приём
                  </Button>
                  <a href={company.phones[0].href} className="text-center text-sm text-muted">
                    {company.phones[0].value}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
