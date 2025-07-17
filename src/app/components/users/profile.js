'use client';
import { BsThreeDots } from "react-icons/bs";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Link from "next/link";
const data = [
  { name: "Jan", Borrow_books: 24 },
  { name: "Feb", Borrow_books: 39 },
  { name: "Mar", Borrow_books: 15 },
  { name: "Apr", Borrow_books: 9 },
  { name: "May", Borrow_books: 34 },
  { name: "Jun", Borrow_books: 18 },
  { name: "July", Borrow_books: 20 },
  { name: "Aug", Borrow_books: 30 },
  { name: "Sep", Borrow_books: 11 },
  { name: "Oct", Borrow_books: 19 },
  { name: "Nov", Borrow_books: 6 },
  { name: "Dec", Borrow_books: 24 },
];

export default function Profile() {
  const books = [
    {
      BookId: 101,
      Title: "The Alchemist",
      Author: "Paulo Coelho",
      Overdue: true,
      Fine: 50,
    },
    {
      BookId: 102,
      Title: "1984",
      Author: "George Orwell",
      Overdue: false,
      Fine: 0,
    },
    {
      BookId: 103,
      Title: "To Kill a Mockingbird",
      Author: "Harper Lee",
      Overdue: true,
      Fine: 30,
    },
    {
      BookId: 104,
      Title: "The Great Gatsby",
      Author: "F. Scott Fitzgerald",
      Overdue: false,
      Fine: 0,
    },
  ];

  return (
    <main className="p-4 md:p-6 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Student Profile</h2>

      <div className="bg-slate-100 p-4 md:p-6 rounded-sm w-full">
        {/* Profile + Chart */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Profile */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg flex items-center p-4 min-h-[300px]">
            <div className="bg-slate-100 w-[100px] md:w-[150px] h-[100px] md:h-[150px] rounded-full shadow-sm mr-4"></div>
            <div>
              <p className="text-base md:text-lg mb-2">
                <span className="font-semibold pr-2">Name:</span> Surjendu Nandi
              </p>
              <p className="text-base md:text-lg mb-2">
                <span className="font-semibold pr-2">Id:</span> MCA2024059
              </p>
              <p className="text-base md:text-lg">
                <span className="font-semibold pr-2">Email:</span> rcciitstudent12345@gmail.com
              </p>
            </div>
          </div>

          {/* Chart */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4">
            <div className="w-full h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />

                  <Bar dataKey="Borrow_books" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />

                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Summary Cards + Table */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full">
          {/* Cards */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg flex flex-wrap justify-evenly p-4 min-h-[300px]">
            <div className="bg-slate-100 w-[45%] md:w-[190px] h-[116px] rounded-lg text-center pt-6 mb-4">
              <p>Borrow Book</p>
              <p className="mt-2 font-bold">150</p>
            </div>
            <div className="bg-slate-100 w-[45%] md:w-[190px] h-[116px] rounded-lg text-center pt-6 mb-4">
              <p>Fine Due</p>
              <p className="mt-2 font-bold">₹400</p>
            </div>

            <div className="flex bg-slate-100  h-[116px] rounded-lg text-center  m-4 justify-between items-center px-10 cursor-pointer hover:scale-105 transition-transform duration-300">
              <p>Borrow Request</p>
              <img src=" /icon_borrow.png" alt="icon not found" />
            </div>

          </div>

          {/* Table */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4">
            <h2 className="text-3xl">Borrow book list</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border border-gray-200 rounded-lg">
                <thead className="bg-purple-100 text-purple-800 font-semibold">
                  <tr>
                    <th className="px-4 py-3">Book ID</th>
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Author</th>
                    <th className="px-4 py-3">Fine</th>

                  </tr>
                </thead>
                <tbody className="bg-white text-gray-700">
                  {books.map((book, index) => (
                    <tr
                      key={index}
                      className="h-[50px] border-t hover:bg-purple-50 transition duration-150"
                    >
                      <td className="px-4 py-2">{book.BookId}</td>
                      <td className="px-4 py-2">{book.Title}</td>
                      <td className="px-4 py-2">{book.Author}</td>
                      <td className="px-4 py-2">₹{book.Fine}</td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/users/borrow" className="text-purple-600 text-right mr-2  hover:underline">
              see more
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
