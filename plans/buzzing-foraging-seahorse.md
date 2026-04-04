# Sana.Sealing ポートフォリオサイト 実装計画

## Context

シーリングスタンプブランド「Sana.Sealing」のポートフォリオ兼リンク集サイトを新規構築する。
現在のディレクトリは空（`plans/` のみ）なので、Next.js プロジェクトをゼロから作成する。
目的は YouTube・Instagram のファンを各販売プラットフォームへスムーズに誘導すること。

---

## 技術スタック

- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS（カスタムカラー追加）
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Package Manager**: bun

---

## Phase 1: プロジェクト初期化コマンド

```bash
cd "/Users/kentaroono/sana HP"

bun create next-app . \
  --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --no-git

bun add framer-motion lucide-react
```

---

## Phase 2: ファイル構成

```
/Users/kentaroono/sana HP/
├── public/
│   └── hero-placeholder.jpg   ← 実際の写真を配置
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── HeroSection.tsx
│       ├── SnsLinks.tsx
│       ├── ShopLinks.tsx
│       ├── Footer.tsx
│       ├── StampDivider.tsx
│       └── StampBadge.tsx
└── tailwind.config.ts
```

---

## Phase 3: デザインシステム

**カスタムカラー**（`tailwind.config.ts` に追加）:

| トークン | 値 | 用途 |
|---|---|---|
| `ivory` | `#FAF9F6` | 背景 |
| `sakura` | `#FADADD` | ボタン・ボーダー |
| `dusty-pink` | `#DCAEAF` | アクセント |
| `deep-pink` | `#C89496` | ホバー |
| `text-main` | `#3D3535` | 本文 |
| `text-sub` | `#7A6A6A` | サブテキスト |

**フォント**: Google Fonts から `Noto Serif JP`（`globals.css` で `@import`）

**スタンプ装飾** (`.stamp-circle` CSS class):
- `border-radius: 9999px` + `radial-gradient` で封蝋ドームの質感
- `box-shadow` で二重リム + 内側ハイライト

---

## Phase 4: セクション実装内容

### ① HeroSection.tsx
- `h1`: "Sana.Sealing"（Noto Serif JP、`tracking-widest`）
- `p`: "心をつなぐ、一滴のワックス。"
- 丸形ヒーロー画像（`next/image`、`public/hero-placeholder.jpg`）
- 入場アニメーション: `opacity 0→1` + `y 30→0`（stagger）
- 背景: ラジアルグラデーション（ピンクの霞）

### ② StampDivider.tsx
- 3つのスタンプ円 + 両側グラデーションライン
- Framer Motion で無限浮遊アニメーション

### ③ SnsLinks.tsx
- YouTube / Instagram: `link-button` クラス（角丸、ピンクボーダー）
- ホバー: ピンク背景 + `translateY(-2px)` + ピンクシャドウ
- `whileInView` で viewport 進入時にフェードイン

### ④ ShopLinks.tsx
- Creema / メルカリ / PayPayフリマ をカード型で 1列(SP) / 3列(PC) グリッド
- 各カード右上に `StampBadge`（バネアニメーションで出現）
- `card-hover` クラスで `-translate-y-1` + ピンクシャドウ

### ⑤ Footer.tsx
- "© 2024 Sana.Sealing All Rights Reserved."
- スタンプ円を揺れるアニメーション付きで中央配置

---

## Phase 5: アニメーションパターン

| パターン | 使用箇所 | 実装 |
|---|---|---|
| 入場フェードアップ | 全セクション見出し・リスト | `whileInView={{ opacity:1, y:0 }}` + `once:true` |
| スタガー | SNS・ショップリスト | 親 `staggerChildren: 0.15` |
| 無限浮遊 | スタンプ装飾 | `animate={{ y:[0,-6,0] }}` + `repeat:Infinity` |

---

## Phase 6: 重要な実装メモ

- Framer Motion を使うコンポーネントには必ず `"use client"` ディレクティブが必要
- `page.tsx` は Server Component のまま維持（クライアント化不要）
- ヒーロー画像がない場合は `<div className="absolute inset-0 bg-sakura/40" />` で代替
- Tailwind のカスタムカラーは文字列結合せず直書きすること（JIT スキャン対策）

---

## Phase 7: 確認方法

```bash
# 開発サーバー起動
bun run dev
# http://localhost:3000 で確認

# 本番ビルド確認
bun run build && bun run start
```

**チェックリスト**:
- [ ] ブランド名・キャッチコピーが中央表示される
- [ ] YouTube・Instagram リンクが正しく開く
- [ ] Creema・メルカリ・PayPayフリマ リンクが正しく開く
- [ ] ボタン・カードにホバーアニメーションがある
- [ ] スタンプ装飾が浮遊している
- [ ] スマホ幅でボタンが十分な高さ（min 56px）になっている

---

## 変更対象ファイル

- `tailwind.config.ts`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/components/HeroSection.tsx`
- `src/components/SnsLinks.tsx`
- `src/components/ShopLinks.tsx`
- `src/components/Footer.tsx`
- `src/components/StampDivider.tsx`
- `src/components/StampBadge.tsx`
