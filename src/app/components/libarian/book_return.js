"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "../utils/pagination";

export default function Bookreturn() {
    const [searchBy, setSearchBy] = useState("book"); // 'book' or 'user'
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`Searching by ${searchBy}: ${query}`);
    };

    return (
        <main className="flex flex-col md:ml-2 p-2 md:p-6 w-full">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-3xl">Books Return</h2>
            </div>

            <section className="flex flex-col mt-6 bg-slate-100 rounded-sm p-2 md:p-4">
                {/* Search Form */}
                <form
                    onSubmit={handleSearch}
                    className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0 bg-white rounded-xl shadow-md border border-purple-600 w-full p-4"
                >
                    {/* Search by Toggle Buttons */}
                    <div className="flex space-x-2 w-full md:w-auto">
                        <button
                            type="button"
                            onClick={() => setSearchBy("book")}
                            className={`w-full md:w-auto px-4 py-2 rounded-md border font-medium ${searchBy === "book"
                                ? "bg-purple-700 text-white border-purple-700"
                                : "bg-white text-purple-700 border-purple-500"
                                }`}
                        >
                            Book ID
                        </button>
                        <button
                            type="button"
                            onClick={() => setSearchBy("user")}
                            className={`w-full md:w-auto px-4 py-2 rounded-md border font-medium ${searchBy === "user"
                                ? "bg-purple-700 text-white border-purple-700"
                                : "bg-white text-purple-700 border-purple-500"
                                }`}
                        >
                            User ID
                        </button>
                    </div>

                    {/* Search Input */}
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={`Enter ${searchBy === "book" ? "Book ID" : "User ID"}`}
                        className="w-full md:flex-1 outline-none px-4 py-2 border rounded-md border-purple-300"
                    />

                    {/* Search Button */}
                    <button
                        type="submit"
                        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center gap-2 w-full md:w-auto justify-center"
                    >
                        <FaSearch />
                        Search
                    </button>
                </form>

                {/* Table Section */}
                <div className="overflow-x-auto mt-4 rounded-md">
                    <table className="min-w-[800px] w-full text-left text-md border border-gray-200">
                        <thead className="bg-purple-100 text-purple-800 font-semibold">
                            <tr>
                                <th className="px-4 py-3">User ID</th>
                                <th className="px-4 py-3">User Name</th>
                                <th className="px-4 py-3">Book ID</th>
                                <th className="px-4 py-3">Book Name</th>
                                <th className="px-4 py-3">Book Author</th>
                                <th className="px-4 py-3">Book Issued</th>
                                <th className="px-4 py-3">Overdue</th>
                                <th className="px-4 py-3">Fine</th>
                                <th className="px-4 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {[...Array(10)].map((_, index) => (
                                <tr
                                    key={index}
                                    className="h-[50px] border-t hover:bg-purple-50 transition duration-150"
                                >
                                    <td className="px-4 py-2">10021</td>
                                    <td className="px-4 py-2">Rose</td>
                                    <td className="px-4 py-2">#B-10021-30</td>
                                    <td className="px-4 py-2">Ancestor Trouble</td>
                                    <td className="px-4 py-2">Maud Newton</td>
                                    <td className="px-4 py-2">2025-07-01</td>
                                    <td className="px-4 py-2">5 Days</td>
                                    <td className="px-4 py-2">50 Rs.</td>
                                    <td className="px-4 py-2 text-center">
                                        <form>
                                            <button
                                                type="submit"
                                                className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                                            >
                                                Return
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 <Pagination totalPages={10} visiblePages={5} />
            </section>
        </main>
    );
}
