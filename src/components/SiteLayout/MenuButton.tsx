"use client";
import { useState } from "react";
import Menu from "./Menu";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="md:hidden p-1 text-gray-800 font-bold text-xs bg-gray-600 text-white w-15 rounded-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "CLOSE" : "MENU"}
      </button>

      {/* スマホ時のみメニューを表示 */}
      {isOpen && (
        <div className="md:hidden absolute top-13 left-0 w-full bg-white p-4 shadow-lg z-50">
          <Menu />
        </div>
      )}
    </>
  );
}
