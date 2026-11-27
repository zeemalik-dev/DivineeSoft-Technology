import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { services, socialLinks } from "@/lib/data";
import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Products", href: "/products" },
    { label: "Work", href: "/work" },
    { label: "Partnership", href: "/partnership" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Project Estimator", href: "/estimate" },
    { label: "Blog", href: "https://blogs.divineesoft.com" },
  ];

  return (
    <footer className="bg-[#06070F] text-muted-foreground pt-20 pb-10 border-t border-border relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-5 lg:col-span-1">
            <Logo isFooter />
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              We build the product. Then we run it with you. Product & software partner for founders and businesses across the US, UK, Pakistan and the Middle East.
            </p>
            {/* Social */}
            <div className="flex gap-3 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  className="w-9 h-9 rounded-full bg-white/5 border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["You own 100% of the code", "NDA on request", "IP protection"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-semibold uppercase tracking-wide border border-border rounded-full px-2.5 py-1 text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm hover:text-primary transition-colors flex items-center gap-2 group w-fit"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-primary shrink-0">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground mb-0.5">Email</span>
                  <a
                    href="mailto:info@divineesoft.com"
                    className="text-sm text-white hover:text-primary transition-colors"
                  >
                    info@divineesoft.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-primary shrink-0">
                  <FaWhatsapp size={14} />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground mb-0.5">WhatsApp</span>
                  <a
                    href="https://wa.me/+923146256754"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-primary transition-colors"
                  >
                    +92 314 6256754
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-primary shrink-0">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground mb-0.5">Office</span>
                  <span className="text-sm text-white">Lahore, Punjab, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} DivineeSoft Technologies. All rights reserved. Canonical:{" "}
            <a
              href="https://www.divineesoft.com"
              className="hover:text-primary transition-colors"
            >
              divineesoft.com
            </a>
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/estimate" className="hover:text-primary transition-colors">
              Project Estimator
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
