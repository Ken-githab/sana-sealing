"use client";

import { motion } from "framer-motion";

function YoutubeIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#FF0000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
}

const links = [
  { label: "YouTube", href: "https://www.youtube.com/@sanasealing", icon: YoutubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/sana.sealing", icon: InstagramIcon },
];

export default function SnsLinks() {
  return (
    <section className="px-4 py-16">
      <h2 className="mb-10 text-center font-serif text-xl font-light tracking-widest text-text-sub">
        SNS
      </h2>

      <div className="mx-auto flex max-w-sm flex-col gap-4">
        {links.map(({ label, href, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Icon size={22} />
            <span className="text-base tracking-wider">{label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
