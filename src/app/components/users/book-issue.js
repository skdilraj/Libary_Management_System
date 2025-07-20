"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "../utils/pagination";

export default function BookIssue() {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`Searching: ${query}`);
    };

    return (
        <main className="flex flex-col md:ml-2 p-2 md:p-6 w-full">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-3xl">Books Issue</h2>
            </div>

            <section className="flex flex-col mt-6 bg-slate-100 rounded-sm p-2 md:p-4">
                {/* Search Form */}
                <form
                    onSubmit={handleSearch}
                    className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0 bg-white rounded-xl shadow-md border border-purple-600 w-full p-4"
                >
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search here..."
                        className="w-full outline-none px-4 py-2 border rounded-md border-purple-300"
                    />
                    <button
                        type="submit"
                        className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-600 flex items-center gap-2 w-full md:w-auto justify-center"
                    >
                        <FaSearch />
                        Search
                    </button>
                </form>

                {/* New Heading */}
                <h3 className="text-2xl font-semibold mt-6 mb-2 px-2 text-purple-800">Your Result</h3>

                {/* Table Section */}
                <div className="overflow-x-auto rounded-md">
                    <table className="min-w-[800px] w-full text-left text-md border border-gray-200">
                        <thead className="bg-purple-100 text-purple-800 font-semibold">
                            <tr>
                                <th className="px-4 py-3">Book</th>
                                <th className="px-4 py-3">Book ID</th>
                                <th className="px-4 py-3">Book Name</th>
                                <th className="px-4 py-3">Author</th>
                                <th className="px-4 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {[...Array(10)].map((_, index) => (
                                <tr
                                    key={index}
                                    className="h-[60px] border-t hover:bg-purple-50 transition duration-150"
                                >
                                    <td className="px-4 py-2">
                                        <img
                                            src="https://via.placeholder.com/40"
                                            alt="book"
                                            className="w-10 h-10 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-4 py-2">#B-10021-30</td>
                                    <td className="px-4 py-2">Ancestor Trouble</td>
                                    <td className="px-4 py-2">Maud Newton</td>
                                    <td className="px-4 py-2 text-center">
                                        <form>
                                            <button
                                                type="submit"
                                                className="bg-transparent hover:bg-blue-600 text-blue-700 font-semibold hover:text-white py-1 px-3 border border-blue-500 hover:border-transparent rounded"
                                            >
                                                Issue
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Pagination totalPages={10} visiblePages={3} />
            </section>
        </main>
    );
}
