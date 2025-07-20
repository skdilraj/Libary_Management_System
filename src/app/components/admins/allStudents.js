"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "../utils/pagination";

export default function Allstudnts() {
    const [searchBy, setSearchBy] = useState("name"); // 'name' or 'roll'
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`Searching by ${searchBy}: ${query}`);
    };

    return (
        <main className="flex flex-col md:ml-2 p-2 md:p-6 w-full">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-3xl">All Students</h2>
            </div>

            <section className="flex flex-col mt-6 bg-slate-100 rounded-sm p-2 md:p-4">
                {/* Search Form */}
                <form
                    onSubmit={handleSearch}
                    className="flex flex-col md:flex-row md:items-center md:space-x-2 space-y-2 md:space-y-0 bg-white rounded-xl shadow-md border border-purple-600 w-full p-4"
                >
                    {/* Toggle Buttons */}
                    <div className="flex space-x-2 w-full md:w-auto">
                        <button
                            type="button"
                            onClick={() => setSearchBy("name")}
                            className={`w-full md:w-auto px-4 py-2 rounded-md border font-medium ${searchBy === "name"
                                ? "bg-purple-700 text-white border-purple-700"
                                : "bg-white text-purple-700 border-purple-500"
                                }`}
                        >
                            Name
                        </button>
                        <button
                            type="button"
                            onClick={() => setSearchBy("roll")}
                            className={`w-full md:w-auto px-4 py-2 rounded-md border font-medium ${searchBy === "roll"
                                ? "bg-purple-700 text-white border-purple-700"
                                : "bg-white text-purple-700 border-purple-500"
                                }`}
                        >
                            Roll
                        </button>
                    </div>

                    {/* Input */}
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={`Enter ${searchBy === "name" ? "Name" : "Roll"}`}
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

                {/* Table */}
                <div className="overflow-x-auto mt-4 rounded-md">
                    <table className="min-w-[800px] w-full text-left text-md border border-gray-200">
                        <thead className="bg-purple-100 text-purple-800 font-semibold">
                            <tr>
                                <th className="px-4 py-3">Student ID</th>
                                <th className="px-4 py-3">Name</th>
                                <th className="px-4 py-3">Roll</th>
                                <th className="px-4 py-3">Department</th>
                                <th className="px-4 py-3">Year</th>
                                <th className="px-4 py-3">Total Borrow</th>
                                <th className="px-4 py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {[...Array(10)].map((_, index) => (
                                <tr
                                    key={index}
                                    className="h-[50px] border-t hover:bg-purple-50 transition duration-150"
                                >
                                    <td className="px-4 py-2">ST-{1000 + index}</td>
                                    <td className="px-4 py-2">Student {index + 1}</td>
                                    <td className="px-4 py-2">ROLL{index + 101}</td>
                                    <td className="px-4 py-2">CSE</td>
                                    <td className="px-4 py-2">3rd</td>
                                    <td className="px-4 py-2">4</td>
                                    <td className="px-4 py-2 text-center space-x-2">
                                        <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                                            Block
                                        </button>
                                        <button className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600">
                                            Unblock
                                        </button>
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
