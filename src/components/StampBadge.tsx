"use client";

import { motion } from "framer-motion";

interface StampBadgeProps {
  size?: number;
}

export default function StampBadge({ size = 20 }: StampBadgeProps) {
  return (
    <motion.span
      className="stamp-circle absolute"
      style={{ width: size, height: size }}
      initial={{ scale: 0, rotate: -15 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
    />
  );
}
