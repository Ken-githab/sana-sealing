"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Store, Tag } from "lucide-react";
import StampBadge from "./StampBadge";

const shops = [
  {
    label: "メルカリ",
    description: "作品・セット販売",
    href: "https://jp.mercari.com/user/profile/231184001",
    icon: Store,
    accent: "#FF0211",
  },
  {
    label: "Yahoo!フリマ",
    description: "お得なセット販売",
    href: "https://paypayfleamarket.yahoo.co.jp/user/p11177500",
    icon: Tag,
    accent: "#E82C2C",
  },
  {
    label: "Creema",
    description: "ハンドメイド作品の販売",
    href: "https://www.creema.jp/c/sana_sealing/item/onsale",
    icon: ShoppingBag,
    accent: "#F5A7B0",
  },
];

export default function ShopLinks() {
  return (
    <section className="px-4 py-16">
      <h2 className="mb-10 text-center font-serif text-xl font-light tracking-widest text-text-sub">
        ショップ
      </h2>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-3">
        {shops.map(({ label, description, href, icon: Icon, accent }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover relative flex flex-col items-center gap-3 rounded-2xl border border-sakura
                       bg-white px-5 py-8 text-center no-underline"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Stamp badge — top-right corner */}
            <div className="absolute -right-2 -top-2">
              <StampBadge size={24} />
            </div>

            {/* Icon */}
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full"
              style={{ backgroundColor: `${accent}22` }}
            >
              <Icon size={24} color={accent} strokeWidth={1.5} />
            </div>

            {/* Label */}
            <span className="font-serif text-base font-medium tracking-wider text-text-main">
              {label}
            </span>

            {/* Description */}
            <span className="font-serif text-xs font-light tracking-wide text-text-sub">
              {description}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
