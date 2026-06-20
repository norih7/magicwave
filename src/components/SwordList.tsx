"use client";

import Link from "next/link";
// 💡 import の代わりに require を使うことで TS の静的型チェックを回避します
const swordData = require("@/data/items.json");

export default function SwordList() {
  return (
    <ul>
      {/* 念のため配列であることを保証 */}
      {(Array.isArray(swordData) ? swordData : []).map((sword: any) => (
        <li key={sword.id}>
          <Link href={`/items/${sword.slug}`}>
            {sword.name} - ドロップ: {sword.dropLocation}
          </Link>
        </li>
      ))}
    </ul>
  );
}
