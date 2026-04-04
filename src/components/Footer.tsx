"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-sakura/40 bg-white px-4 py-10 text-center">
      <motion.div
        className="stamp-circle mx-auto mb-6"
        style={{ width: 32, height: 32 }}
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <p className="font-serif text-xs font-light tracking-widest text-text-sub">
        © 2024 Sana.Sealing All Rights Reserved.
      </p>
    </footer>
  );
}
