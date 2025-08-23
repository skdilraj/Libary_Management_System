"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaHome, FaBook, FaSignOutAlt, FaChevronLeft, FaChevronRight, FaUndoAlt } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.clear(); // Clear any client-side auth info
      router.replace("/login"); // Redirect to login page
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const navItems = [
    { label: "Home", route: "/librarian", icon: <FaHome /> },
    { label: "Books Issue", route: "/librarian/issue", icon: <FaBook /> },
    { label: "Book Return", route: "/librarian/return", icon: <FaUndoAlt /> },
    { label: "Logout", route: "/login", icon: <FaSignOutAlt />, onClick: handleLogout },
  ];

  return (
    <>
      {/* Sidebar for md+ */}
      <div className={`${isCollapsed ? "w-20" : "w-60"} sticky top-0 hidden md:flex h-screen bg-white shadow-md flex-col px-4 py-6 space-y-6 transition-all duration-300`}>
        {/* Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl text-purple-600"><IoBookSharp /></div>
            {!isCollapsed && <span className="text-lg font-bold text-purple-600">Liby</span>}
          </div>
          {mounted && (
            <button onClick={toggleSidebar} className="bg-slate-200 p-2 rounded-sm mr-[-30px]">
              {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          )}
        </div>

        {/* Navigation */}
        <div className="space-y-1">
          {!isCollapsed && <div className="text-xs text-gray-400 uppercase">Sidebar</div>}
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.route}
              onClick={item.onClick}
              className={`flex h-[50px] my-2 items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer px-3 py-1 rounded hover:bg-purple-50 transition ${pathname === item.route ? "bg-purple-50 text-purple-600 font-medium" : ""
                }`}
            >
              <div className="text-2xl">{item.icon}</div>
              {!isCollapsed && <span className="text-md">{item.label}</span>}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow px-4 py-2 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl text-purple-600"><IoBookSharp /></div>
            <span className="text-lg font-bold text-purple-600">Liby</span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-purple-600">
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-3 bg-white rounded-lg py-2 space-y-1 transition-all duration-300">
            {navItems.map((item) => (
              <div
                key={item.label}
                onClick={item.onClick}
                className={`flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 ${pathname === item.route ? "text-purple-600 font-semibold bg-purple-50" : ""}`}
              >
                <div className="text-xl">{item.icon}</div>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
