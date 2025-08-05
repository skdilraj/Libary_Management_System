"use client";
import { IoNotifications } from "react-icons/io5";
import { FaUsers, FaBookOpen, FaClock, FaUserPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import TopBook from "./topBook";
import Overdue from "./overdue";
import Latest_issue from "./LatestIssueList";
import { BsThreeDots } from "react-icons/bs";
import Chart from "./chart";
import Link from "next/link";

export default function Dashboard() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const items = [
        {
            label: "Total Visitor",
            value: 12300,
            icon: <FaUsers />,
        },
        {
            label: "Borrowed Books",
            value: 2300,
            icon: <FaBookOpen />,
        },
        {
            label: "Overdue Books",
            value: 100,
            icon: <FaClock />,
        },
        {
            label: "New Member",
            value: 300,
            icon: <FaUserPlus />,
        },
    ];


    const users = [
        { id: "10021", name: "Alex Roy", books: 12, dept: "Psychology" },
        { id: "12034", name: "Sophia", books: 7, dept: "Business" },
        { id: "22987", name: "Jhon", books: 17, dept: "Computer Science" },
        { id: "53272", name: "Rose", books: 25, dept: "Pharmacy" },
    ];
    const books = [
        { id: "#B-10021-30", title: "Ancestor Trouble", author: "Maud Newton", available: 30 },
        { id: "#B-32521-31", title: "Life Is Everywhere", author: "Lucy Ives", available: 23 },
        { id: "#G-95501-31", title: "Stroller", author: "Amanda Parrish", available: 90 },
        { id: "#R-773521-67", title: "The Secret Syllabus", author: "Terence C. Burnhum", available: 6 },
    ];




    return (
        <main className="flex flex-col md:ml-2 p-2 md:p-6 w-full">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-3xl">Dashboard</h2>
                <div className="flex items-center space-x-5">
                    {mounted && (
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className="px-3 py-2 hidden md:block text-sm border border-purple-600 rounded-md shadow-md focus:outline-none focus:ring-3 focus:ring-purple-400"
                        />
                    )}
                    <div className="text-3xl"><IoNotifications /></div>
                </div>
            </div>
            <section className=" flex flex-col mt-6 bg-slate-100 rounded-sm p-4">
                <h2 className="text-2xl">Hello, <span className="text-purple-600 text-4xl">Dilraj</span></h2>

                <div className="flex flex-wrap md:justify-between my-3">
                    {items.map((item, index) => (

                        <div key={index} className="flex flex-col  p-5 my-2 md:my-0 w-full md:w-[22%] bg-white rounded-lg" >
                            <div className="flex justify-between my-2">
                                <p className="text-2xl">{item.value}</p>
                                <div className="text-3xl text-purple-600 m">{item.icon}</div>
                            </div>
                            <p>{item.label}</p>

                        </div>

                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-6 mt-4">
                    {/* Users List */}
                    <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-4 ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Latest Users List</h2>
                           <Link href="/admins/add-student" className="border px-3 py-1 rounded hover:text-purple-600">Add New student</Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-md mt-3 border border-gray-200 rounded-lg">
                                <thead className="bg-purple-100 text-purple-800 font-semibold">
                                    <tr>
                                        <th className="px-4 py-3">User ID</th>
                                        <th className="px-4 py-3">User Name</th>
                                        <th className="px-4 py-3">Book Issued</th>
                                        <th className="px-4 py-3">Department</th>
                                        <th className="px-4 py-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-gray-700">
                                    {users.map((user, index) => (
                                        <tr
                                            key={index}
                                            className="h-[60px] border-t hover:bg-purple-50 transition duration-150"
                                        >
                                            <td className="px-4 py-3">{user.id}</td>
                                            <td className="px-4 py-3">{user.name}</td>
                                            <td className="px-4 py-3">{user.books}</td>
                                            <td className="px-4 py-3">{user.dept}</td>
                                            <td className="px-4 py-3 text-center text-2xl text-purple-600">
                                                <BsThreeDots />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="text-purple-600 text-right mr-2 hover:underline">see more</div>
                    </div>

                    {/* Books List */}
                    <div className="w-full lg:w-1/2 bg-white shadow-md rounded-lg p-4 ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Latest Books List</h2>
                            <Link href="/admins/books" className="border px-3 py-1 rounded hover:text-purple-600">Add New Book</Link>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm mt-3 border border-gray-200 rounded-lg ">
                                <thead className="bg-purple-100 text-purple-800 font-semibold">
                                    <tr>
                                        <th className="px-4 py-3">Book ID</th>
                                        <th className="px-4 py-3">Title</th>
                                        <th className="px-4 py-3">Author</th>
                                        <th className="px-4 py-3">Available</th>
                                        <th className="px-4 py-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white text-gray-700">
                                    {books.map((book, index) => (
                                        <tr
                                            key={index}
                                            className="h-[60px] border-t hover:bg-purple-50 transition duration-150"
                                        >
                                            <td className="px-4 py-3">{book.id}</td>
                                            <td className="px-4 py-3">{book.title}</td>
                                            <td className="px-4 py-3">{book.author}</td>
                                            <td className="px-4 py-3">{book.available}</td>
                                            <td className="px-4 py-3 text-center text-2xl text-purple-600">
                                                <BsThreeDots />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="text-purple-600 text-right mr-2  hover:underline">see more</div>
                    </div>
                </div>

                <TopBook />

                <Overdue />

                <div className="flex flex-col lg:flex-row gap-6 mt-4 ">

                    <Latest_issue />
                    <Chart />
                </div>

            </section>
        </main>
    );
}
