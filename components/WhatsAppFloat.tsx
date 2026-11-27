"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/+923146256754"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-[#25D366]/50 active:scale-95 transition-all duration-200"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}
