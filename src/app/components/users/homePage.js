"use client";
import { useState, useEffect } from "react";
import { IoNotifications } from "react-icons/io5";
import CategoryBook from "./category_book";
import Filter from "./Filter";

export default function Homepage() {
  const [mounted, setMounted] = useState(false);
  const [selectedName, setSelectedName] = useState("All Books");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <main className="flex flex-col md:ml-2 p-2 md:p-6 w-full">
        {/* Header */}
        <div className="sticky top-9 md:top-0 flex items-center justify-between px-2 bg-white h-[80px]">
          {/* Category Select */}
          <div>
            <label className="p-2 text-2xl font-medium">Categories:</label>
          <select
            value={selectedName} // <-- bind state
            onChange={(e) => setSelectedName(e.target.value)} // <-- update state
            className="w-50 px-4 py-2 bg-white border border-purple-600 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="All Books">All Books</option>
            <option value="Science">Science</option>
            <option value="Technology">Technology</option>
            <option value="Arts">Arts</option>
            <option value="Literature">Literature</option>
            <option value="History">History</option>
            <option value="Geography">Geography</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Religion">Religion</option>
            <option value="Social-science">Social Science</option>
            <option value="Language">Language</option>
          </select>
          </div>
          

          {/* Search + Notifications */}
          <div className="flex items-center space-x-5">
            <input
              type="text"
              placeholder="Search for Book..."
              className="px-3 py-2 hidden md:block text-sm border border-purple-600 rounded-md shadow-md focus:outline-none focus:ring-3 focus:ring-purple-400"
            />
            <div className="text-3xl">
              <IoNotifications />
            </div>
          </div>
        </div>

        {/* Categories & Books */}
        <section className="flex flex-col bg-slate-100 rounded-sm p-4">
          {/* If you still want clickable categories */}
          <Filter onSelect={setSelectedName} />

          {/* Books filtered by selectedName */}
          <CategoryBook CategoryName={selectedName} />
        </section>
      </main>
    </>
  );
}
