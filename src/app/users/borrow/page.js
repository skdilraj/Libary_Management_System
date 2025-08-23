// BorrowedList.jsx
"use client";
import React from 'react';
import Sidebar from '@/app/components/users/sidebar';
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
import { useEffect } from "react";
export default function Home ()  {
  const { loading, authorized } = useAuthRedirect("student");
   useEffect(() => {
      // Prevent caching in browser back
      if (typeof window !== "undefined") {
        window.history.replaceState(null, "", window.location.href);
      }
    }, []);
    if (loading) return null; // Prevent UI flicker
    if (!authorized) return null; // Prevent rendering for unauthorized
  const books = [
    {
      id: 1,
      title: 'How innovation works',
      image: 'https://tse4.mm.bing.net/th/id/OIP.5kywR_2C9pelAld8Xwl7VAHaLP?pid=Api&P=0&h=180',
      author: 'Matt Ridley',
      rating: 4,
    },
    {
      id: 2,
      title: 'Rich dad poor dad',
      image: 'https://cdn.kobo.com/book-images/c81ea4de-cfb7-415d-8634-314aad041fdb/1200/1200/False/rich-dad-poor-dad-9.jpg',
      author: 'Robert',
      rating: 5,
    },
    {
      id: 3,
      title: 'Finish what you start',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1521468340l/39322175._SX318_.jpg',
      author: 'Matt Ridley',
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-[Inter] bg-slate-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main */}
      <main className="flex-1 p-8 overflow-hidden">
        <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Your borrowed lists</h1>

          <div className="flex-1 overflow-y-auto pr-4">
            {books.map((book) => (
              <div key={book.id} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm mb-4 relative">
                <img
                  src={book.image}
                  alt={`${book.title} Book Cover`}
                  className="w-24 h-36 object-cover rounded-md mr-6 shadow"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">{book.title}</h2>
                  <div className="star-rating text-sm my-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className={`fas fa-star ${i >= book.rating ? 'text-gray-300' : ''}`}></i>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600 mt-2">
                    <p><span className="font-medium">Resource ID-</span> 328452</p>
                    <p><span className="font-medium">Borrowed date-</span> 12.5.2023</p>
                    <p><span className="font-medium">Author-</span> {book.author}</p>
                    <p><span className="font-medium">Return date-</span> 26.5.2023</p>
                    <p><span className="font-medium">Total Qty-</span> 12</p>
                    <p><span className="font-medium">Available Qty-</span> 12</p>
                  </div>
                </div>
                <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
              Borrow
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};


