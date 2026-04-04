"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
      {/* Background subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(250,218,221,0.35) 0%, transparent 70%)",
        }}
      />

      {/* Brand name */}
      <motion.h1
        className="font-serif text-5xl font-light tracking-widest text-text-main md:text-7xl"
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Sana.Sealing
      </motion.h1>

      {/* Catchphrase */}
      <motion.p
        className="mt-4 font-serif text-base font-light tracking-[0.2em] text-text-sub md:text-lg"
        initial={{ opacity: 1, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        心をつなぐ、一滴のワックス。
      </motion.p>

      {/* Hero image */}
      <motion.div
        className="relative mt-12 h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80"
        style={{
          border: "4px solid #FADADD",
          boxShadow: "0 8px 40px rgba(220,174,175,0.4)",
        }}
        initial={{ opacity: 1, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <Image
          src="/hero.png"
          alt="Sana.Sealing シーリングスタンプ作品"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Floating stamp accent */}
      <motion.div
        className="stamp-circle mt-10"
        style={{ width: 40, height: 40 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
