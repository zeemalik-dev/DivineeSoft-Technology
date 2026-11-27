"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Calculator,
} from "lucide-react";
import { services } from "@/lib/data";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { openCalModal } from "@/lib/cal";

export default function Header() {
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 140) {
      setHidden(true);
      setServicesDropdownOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 32);
  });

  const handleDropdownEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const navLinks = [
    { name: "Products", href: "/products" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Partnership", href: "/partnership" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "https://blogs.divineesoft.com", external: true },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const openCalendar = async () => {
    await openCalModal();
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/30 border-b border-border/80"
            : "bg-background/40 backdrop-blur-md border-b border-transparent"
        )}
      >
        <div className="container mx-auto flex h-16 md:h-[72px] items-center justify-between px-4 sm:px-6 max-w-7xl">
          {/* Logo with subtle hover scale */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 lg:flex relative"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const active = !link.external && isActive(link.href);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredLink(link.name);
                      handleDropdownEnter();
                    }}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "relative z-10 flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                        active || servicesDropdownOpen
                          ? "text-primary font-semibold"
                          : "text-foreground/80 hover:text-primary"
                      )}
                    >
                      {(hoveredLink === link.name || active) && (
                        <motion.span
                          layoutId="nav-pill"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                          className="absolute inset-0 -z-10 rounded-full bg-primary/10 dark:bg-primary/15 border border-primary/20"
                        />
                      )}
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          servicesDropdownOpen && "rotate-180 text-primary"
                        )}
                      />
                    </Link>

                    {/* Animated Mega Dropdown */}
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[540px]"
                        >
                          <div className="rounded-2xl border border-border bg-card/95 backdrop-blur-2xl p-3 shadow-2xl shadow-black/20">
                            <div className="px-3 py-2 flex items-center justify-between border-b border-border/60 mb-2">
                              <span className="text-[11px] font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                                <Sparkles size={12} />
                                Engineering Capabilities
                              </span>
                              <Link
                                href="/services"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-xs font-semibold text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                              >
                                All services <ArrowRight size={11} />
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-1.5">
                              {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.id}`}
                                    onClick={() => setServicesDropdownOpen(false)}
                                    className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-primary/8 dark:hover:bg-primary/12 border border-transparent hover:border-primary/20"
                                  >
                                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                                      <Icon size={17} />
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                                        <span className="truncate">{service.title}</span>
                                      </div>
                                      <div className="line-clamp-2 text-xs text-muted-foreground mt-0.5 leading-snug">
                                        {service.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Bottom estimator bar inside dropdown */}
                            <div className="mt-2 pt-2 border-t border-border/60 flex items-center justify-between px-3 py-2 rounded-xl bg-muted/40">
                              <span className="text-xs text-muted-foreground">
                                Need a quick cost &amp; timeline breakdown?
                              </span>
                              <Link
                                href="/estimate"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#34E3A0] hover:underline"
                              >
                                <Calculator size={12} />
                                60-sec Estimator
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onClick={closeMobileMenu}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "relative z-10 flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-full transition-colors duration-200",
                    active
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {(hoveredLink === link.name || active) && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-primary/10 dark:bg-primary/15 border border-primary/20"
                    />
                  )}
                  <span>{link.name}</span>
                  {link.external && (
                    <ExternalLink size={11} className="opacity-50" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/estimate"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-full border border-border bg-card/60 px-3.5 py-2 text-xs font-semibold text-foreground hover:border-[#34E3A0]/50 hover:text-[#34E3A0] transition-all duration-200"
            >
              <Calculator size={13} />
              Estimator
            </Link>

            <ThemeToggle />

            <motion.button
              type="button"
              onClick={openCalendar}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-md shadow-primary/25 hover:shadow-lg hover:shadow-primary/40 transition-all duration-200"
            >
              <Calendar size={15} />
              <span>Book a Free Call</span>
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              className="rounded-lg p-2 text-foreground hover:text-primary hover:bg-muted transition-colors lg:hidden"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX }}
          className="h-[2px] w-full origin-left bg-gradient-to-r from-primary via-[#34E3A0] to-primary opacity-80"
        />
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
            className="fixed inset-0 z-60 flex flex-col bg-background lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-border p-5">
              <Logo />
              <button
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="rounded-lg p-2 transition-colors hover:bg-muted"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-5">
              {navLinks.map((link, idx) => {
                if (link.hasDropdown) {
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <button
                        onClick={() => setMobileServicesOpen((p) => !p)}
                        aria-expanded={mobileServicesOpen}
                        className="flex w-full justify-between rounded-xl px-4 py-3 text-base font-semibold hover:bg-muted transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          className={cn(
                            "transition-transform duration-200",
                            mobileServicesOpen && "rotate-180 text-primary"
                          )}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-1 flex flex-col gap-1 overflow-hidden pl-4"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                onClick={closeMobileMenu}
                                className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                              >
                                {service.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold hover:bg-muted transition-colors"
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink size={14} className="opacity-40" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    void openCalendar();
                  }}
                  className="w-full rounded-full h-12 text-base font-semibold text-white bg-gradient-to-r from-primary to-blue-600 shadow-md flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar size={18} />
                  Book a Free Strategy Call
                </button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full h-12 text-base font-medium"
                >
                  <Link href="/estimate" onClick={closeMobileMenu}>
                    <Calculator size={16} className="mr-2" />
                    60-Sec Project Estimator
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
