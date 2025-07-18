"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUser, FaSignOutAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { MdAssignmentReturn } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi";


export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false); // <== key fix

  const [menuOpen, setMenuOpen] = useState(false);



  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const navItems = [
    { label: "Home", route: "/users/home", icon: <FaHome /> },
    { label: "Borrow Books", route: "/users/borrow", icon: <BsBookHalf /> },
    { label: "Profile", route: "/users/profile", icon: <FaUser /> },
    { label: "Issue", route: "/issue", icon: <MdAssignmentReturn /> },
    { label: "Logout", route: "/logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <>
      {/* Sidebar for md and above */}
      <div
        className={`${isCollapsed ? "w-20" : "w-60"
          } sticky top-0 hidden md:flex h-screen bg-white shadow-md flex-col px-4 py-6 space-y-6 transition-all duration-300`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl text-purple-600">
              <IoBookSharp />
            </div>
            {!isCollapsed && (
              <span className="text-lg font-bold text-purple-600">Liby</span>
            )}
          </div>

          {mounted && (
            <button
              onClick={toggleSidebar}
              className="bg-slate-200 p-2 rounded-sm mr-[-30px]"
            >
              {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </button>
          )}
        </div>

        {/* Navigation */}
        <div className="space-y-1">
          {!isCollapsed && (
            <div className="text-xs text-gray-400 uppercase">Sidebar</div>
          )}

          {navItems.map((item) => (
            <Link key={item.label} href={item.route} passHref>
              <div
                className={`flex h-[50px] my-2 items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer px-3 py-1 rounded hover:bg-purple-50 transition ${pathname === item.route
                    ? "bg-purple-50 text-purple-600 font-medium"
                    : ""
                  }`}
              >
                <div className="text-2xl">{item.icon}</div>
                {!isCollapsed && <span className="text-md">{item.label}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Header menu for small screens */}
      <div className="md:hidden bg-white shadow px-4 py-2 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl text-purple-600">
              <IoBookSharp />
            </div>
            <span className="text-lg font-bold text-purple-600">Liby</span>
          </div>

          {/* Menu Toggle Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-purple-600">
            {menuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="mt-3 bg-white shadow-md rounded-lg py-2 space-y-1 transition-all duration-300">
            {navItems.map((item) => (
              <Link key={item.label} href={item.route}>
                <div
                  className={`flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 ${pathname === item.route ? "text-purple-600 font-semibold bg-purple-50" : ""
                    }`}
                >
                  <div className="text-xl">{item.icon}</div>
                  <span className="text-sm">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
