import { useState } from "react";
import { FaSync } from "react-icons/fa";

export default function Pagination() {
  const totalPages = 10;
  const [currentPage, setCurrentPage] = useState(6);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    // Ensure no duplicate numbers
    return [...new Set(pages)];
  };

  return (
    <div className="flex justify-center py-4">
      <div className="flex items-center border rounded overflow-hidden shadow">
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="px-3 py-2 border-r hover:bg-gray-100"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <button
          onClick={() => goToPage(currentPage)}
          className="px-3 py-2 border-r hover:bg-gray-100"
        >
          <FaSync />
        </button>

        {generatePageNumbers().map((item, idx) => (
          <button
            key={idx}
            disabled={item === "..."}
            onClick={() => typeof item === "number" && goToPage(item)}
            className={`px-3 py-2 border-r font-semibold ${
              item === currentPage
                ? "bg-purple-700 text-white"
                : item === "..."
                ? "cursor-default"
                : "hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          className="px-3 py-2 hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
