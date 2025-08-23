import { useEffect, useState } from "react";

export default function CategoryBook({ CategoryName }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!CategoryName || CategoryName === "All Books") CategoryName = "All";

    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `http://localhost:8000/api/student/books?category=${CategoryName}`,
          { credentials: "include" }
        );

        if (!res.ok) throw new Error("Failed to fetch books");

        const data = await res.json();
        setBooks(data.books || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [CategoryName]);

  // 🔹 Borrow request
  const handleBorrowRequest = async (bookId) => {
    try {
      const response = await fetch("http://localhost:8000/api/student/issue-request", {
        method: "POST",
        credentials: "include", // send session cookie
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Request failed");

      alert(data.message);
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="p-4 text-gray-500">Loading books...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
  if (!books.length)
    return (
      <div className="p-4 text-red-500">
        No books found for: <strong>{CategoryName}</strong>
      </div>
    );

  return (
    <div className="w-full p-2">
      <h2 className="text-3xl font-semibold mb-4 text-purple-700">
        {CategoryName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {books.map((book, i) => (
          <div
            key={i}
            className="bg-white lg:flex h-full rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={book.bookImage}
              alt={book.title}
              className="w-full lg:w-[200px] lg:h-[300px] object-cover rounded-2xl"
            />
            <div className="p-2 lg:flex lg:flex-col lg:justify-center">
              <h3 className="mt-2 font-bold">{book.title}</h3>
              <p>{book.author}</p>
              <p className="text-sm text-gray-600">
                Total: {book.totalCopies} | Available: {book.copiesAvailable}
              </p>
              {book.copiesAvailable > 0 && (
                <button
                  onClick={() => handleBorrowRequest(book._id)}
                  className="w-[130px] mt-2 px-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 "
                >
                  Borrow Request
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
