import { useState } from "react";
import { FaSync } from "react-icons/fa";

export default function Pagination({ totalPages = 10, visiblePages = 5 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const sideCount = Math.floor((visiblePages - 1) / 2);
      let start = Math.max(2, currentPage - sideCount);
      let end = Math.min(totalPages - 1, currentPage + sideCount);

      if (currentPage <= sideCount + 1) {
        start = 2;
        end = visiblePages - 1;
      }

      if (currentPage >= totalPages - sideCount) {
        start = totalPages - visiblePages + 2;
        end = totalPages - 1;
      }

      pages.push(1);
      if (start > 2) pages.push("...");
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center py-4 w-full px-2">
      <div className="flex flex-wrap items-center border rounded overflow-x-auto max-w-full shadow text-sm sm:text-base">
        {/* Prev */}
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="min-w-[40px] px-2 sm:px-3 py-2 border-r hover:bg-gray-100 disabled:text-gray-400"
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Refresh */}
        <button
          onClick={() => goToPage(currentPage)}
          className="min-w-[40px] px-2 sm:px-3 py-2 border-r hover:bg-gray-100"
        >
          <FaSync />
        </button>

        {/* Page Numbers */}
        {generatePageNumbers().map((item, idx) => (
          <button
            key={idx}
            disabled={item === "..."}
            onClick={() => typeof item === "number" && goToPage(item)}
            className={`min-w-[40px] px-2 sm:px-3 py-2 border-r font-semibold ${
              item === currentPage
                ? "bg-purple-700 text-white"
                : item === "..."
                ? "cursor-default text-gray-400"
                : "hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => goToPage(currentPage + 1)}
          className="min-w-[40px] px-2 sm:px-3 py-2 hover:bg-gray-100 disabled:text-gray-400"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
