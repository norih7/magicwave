"use client";
import { useState } from "react";
import Menu from "./Menu";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden p-2 text-gray-600 font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>

      {/* スマホ時のみメニューを表示 */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white p-4 shadow-lg z-50">
          <Menu />
        </div>
      )}
    </>
  );
}
