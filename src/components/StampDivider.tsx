"use client";

import { motion } from "framer-motion";

const stamps = [
  { size: 10, delay: 0 },
  { size: 14, delay: 0.15 },
  { size: 10, delay: 0.3 },
];

export default function StampDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-6">
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-dusty-pink opacity-50" />

      {stamps.map((s, i) => (
        <motion.div
          key={i}
          className="stamp-circle"
          style={{ width: s.size * 4, height: s.size * 4 }}
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: s.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="h-px w-20 bg-gradient-to-l from-transparent to-dusty-pink opacity-50" />
    </div>
  );
}
