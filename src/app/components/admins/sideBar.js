"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaUsers,
  FaExchangeAlt,
  FaChartBar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false); // <== key fix

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  const navItems = [
    { label: "Home", route: "/", icon: <FaHome /> },
    { label: "Books", route: "/orders", icon: <IoBookSharp /> },
    { label: "Members", route: "/docs", icon: <FaUsers /> },
    { label: "Issue-Return", route: "/map", icon: <FaExchangeAlt /> },
    { label: "Reports", route: "/stats", icon: <FaChartBar /> },
  ];

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-60"
      } sticky top-0 hidden  h-screen bg-white shadow-md md:flex md:flex-col px-4 py-6 space-y-6 transition-all duration-300`}
    >
      {/* Logo */}
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
            className="bg-slate-200 p-2 rounded-sm mr-[-30px]">
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        )}
      </div>

      {/* Main Navigation */}
      <div className="space-y-1">
        {!isCollapsed && (
          <div className="text-xs text-gray-400 uppercase">Sidebar</div>
        )}

        {navItems.map((item) => (
          <Link key={item.label} href={item.route} passHref>
            <div
              className={`flex h-[50px] my-2 items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer px-3 py-1 rounded hover:bg-purple-50 transition ${
                pathname === item.route
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
  );
}

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaHome,
//   FaUsers,
//   FaExchangeAlt,
//   FaChartBar,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { IoBookSharp } from "react-icons/io5";

// export default function Sidebar() {
//   const pathname = usePathname();
//   const [isCollapsed, setIsCollapsed] = useState(false); // sidebar collapsed state

//   const toggleSidebar = () => setIsCollapsed((prev) => !prev);

//   const navItems = [
//     { label: "Home", route: "/", icon: <FaHome /> },
//     { label: "Books", route: "/orders", icon: <IoBookSharp /> },
//     { label: "Members", route: "/docs", icon: <FaUsers /> },
//     { label: "Issue-Return", route: "/map", icon: <FaExchangeAlt /> },
//     { label: "Reports", route: "/stats", icon: <FaChartBar /> },
//   ];

//   return (
//     <div
//       className={`${
//         isCollapsed ? "w-20" : "w-60"
//       } sticky top-0 hidden  h-screen bg-white shadow-md md:flex md:flex-col px-4 py-6 space-y-6 transition-all duration-300`}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <div className="text-3xl text-purple-600">
//             <IoBookSharp />
//           </div>
//           {!isCollapsed && (
//             <span className="text-lg font-bold text-purple-600">Liby</span>
//           )}
//         </div>

//         <button onClick={toggleSidebar} className="bg-slate-200 p-2 rounded-sm mr-[-30px]">
//           {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
//         </button>
//       </div>

//       {/* Main Navigation */}
//       <div className="space-y-1">
//         {!isCollapsed && (
//           <div className="text-xs text-gray-400 uppercase">Sidebar</div>
//         )}

//         {navItems.map((item) => (
//           <Link key={item.label} href={item.route} passHref>
//             <div
//               className={`flex h-[50px] my-2 items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer px-3 py-1 rounded hover:bg-purple-50 transition ${
//                 pathname === item.route
//                   ? "bg-purple-50 text-purple-600 font-medium"
//                   : ""
//               }`}
//             >
//               <div className="text-2xl">{item.icon}</div>
//               {!isCollapsed && <span className="text-md">{item.label}</span>}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }
