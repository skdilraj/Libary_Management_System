"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "@/app/components/users/sidebar";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";

export default function BorrowedList() {
  const { loading, authorized } = useAuthRedirect("student");
  const [borrows, setBorrows] = useState([]);
  const [loadingBorrows, setLoadingBorrows] = useState(true);

  const fetchBorrows = async () => {
    try {
      setLoadingBorrows(true);
      const res = await fetch("http://localhost:8000/api/student/my-borrows", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setBorrows(data.data || []); // only take array
    } catch (err) {
      console.error("Error fetching borrows:", err);
    } finally {
      setLoadingBorrows(false);
    }
  };

  useEffect(() => {
    if (authorized) fetchBorrows();
  }, [authorized]);

  if (loading) return null;
  if (!authorized) return null;

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-[Inter] bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Your Borrowed Books
          </h1>

          {loadingBorrows ? (
            <p className="text-gray-500">Loading...</p>
          ) : borrows.length === 0 ? (
            <p className="text-gray-500">No borrowed books yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {borrows.map((issue) => (
                <div
                  key={issue._id}
                  className="flex flex-col sm:flex-row bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm"
                >
                  <img
                    src={issue.book.bookImage || "/default-book.jpg"}
                    alt={issue.book.title}
                    className="w-full sm:w-40 h-full object-cover rounded-md mb-4 sm:mb-0 sm:mr-4 shadow"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
                        {issue.book.title}
                      </h2>
                      <p className="text-sm sm:text-base text-gray-700">
                        Author: {issue.book.author}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700">
                        Publisher: {issue.book.publisherName}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700">
                        Category: {issue.book.category}
                      </p>
                      {issue.dueDate && (
                        <p className="text-sm sm:text-base text-blue-700">
                          Return Date: {new Date(issue.dueDate).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <p
                      className={`mt-2 text-sm sm:text-base font-semibold ${issue.status === "pending"
                          ? "text-gray-600"
                          : issue.status === "approved"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                    >
                      Status: {issue.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
