'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { WHATSAPP_URL, PHONE_HREF } from '@/lib/site';

/**
 * Persistent floating contact dock — keeps the two primary conversion paths
 * (WhatsApp + Call) one tap away on every scroll position.
 */
export function ContactDock() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with OptiGuard on WhatsApp"
        className="group flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-105 active:scale-95"
      >
        <FaWhatsapp className="h-6 w-6" aria-hidden />
      </a>
      <a
        href={PHONE_HREF}
        aria-label="Call OptiGuard Monitoring"
        className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full bg-primary text-bg shadow-glow transition-transform hover:scale-105 active:scale-95"
      >
        <FiPhone className="h-5 w-5" aria-hidden />
      </a>
    </div>
  );
}
