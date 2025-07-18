'use client';
import { BsThreeDots } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
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

// Chart data: 4 weeks
const data = [
  { name: "Week 1", Borrow_books: 25 },
  { name: "Week 2", Borrow_books: 20 },
  { name: "Week 3", Borrow_books: 31 },
  { name: "Week 4", Borrow_books: 19 },
];

export default function Issue() {
  const users = [
  {
    UserId: 1,
    Name: "Sk Dilraj",
    BookId: 101,
    BookName: "The Alchemist",
    Author: "Paulo Coelho",
    RequestTime: "2025-07-17 10:30",
    Action: { Grant: false, Reject: false },
  },
  {
    UserId: 2,
    Name: "Shubbhranil",
    BookId: 102,
    BookName: "A Brief History of Humankind",
    Author: "Yuval Noah Harari",
    RequestTime: "2025-07-17 11:00",
    Action: { Grant: true, Reject: false },
  },
  {
    UserId: 3,
    Name: "Surjendu",
    BookId: 103,
    BookName: "To Kill a Mockingbird",
    Author: "Harper Lee",
    RequestTime: "2025-07-17 09:45",
    Action: { Grant: false, Reject: true },
  },
  {
    UserId: 4,
    Name: "Arpita",
    BookId: 104,
    BookName: "The Great Gatsby",
    Author: "F. Scott Fitzgerald",
    RequestTime: "2025-07-17 12:15",
    Action: { Grant: true, Reject: false },
  },
  {
    UserId: 5,
    Name: "Sumana",
    BookId: 123,
    BookName: "The Lion King",
    Author: "Irene Mecchi",
    RequestTime: "2025-07-17 1:15",
    Action: { Grant: true, Reject: false },
  },
];


  return (
    <main className="p-4 md:p-6 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-600">Book Issue</h2>

      <div className="bg-slate-100 p-4 md:p-6 rounded-sm w-full">
        {/* Top Cards Section */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Total Request Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg flex justify-between items-center p-6 min-h-[120px] shadow">
            {/* Left: Text section */}
            <div className="flex flex-col lg:ml-4">
              <p className="text-2xl lg:text-4xl text-gray-500">Total Requests</p>
              <p className="text-3xl lg:text-6xl font-bold text-gray-800">{users.length}</p>
            </div>

            {/* Right: Icon section */}
            <div className="text-purple-600 text-[100px] md:text-[200px] lg:text-[250px]">
              <IoIosPeople />
            </div>
          </div>


          {/* Bar Chart */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 shadow">
            <div className="w-full h-[220px] sm:h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="Borrow_books"
                    fill="#82ca9d"
                    activeBar={<Rectangle fill="gold" stroke="purple" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="w-full mt-6 bg-white rounded-lg p-4 shadow ">
          <h2 className="text-2xl md:text-3xl mb-4 font-semibold">Borrow Book Requests</h2>
          <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border border-gray-200 rounded-lg min-w-[600px] ">
            <thead className="bg-purple-100 text-purple-800 font-semibold">
              <tr>
                <th className="px-4 py-3">User ID</th>
                <th className="px-4 py-3">User Name</th>
                <th className="px-4 py-3">Book ID</th>
                <th className="px-4 py-3">Book Name</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Request Time</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {users.map((user, index) => (
                <tr
                  key={index}
                  className="h-[50px] border-t hover:bg-purple-50 transition duration-150"
                >
                  <td className="px-4 py-2">{user.UserId}</td>
                  <td className="px-4 py-2">{user.Name}</td>
                  <td className="px-4 py-2">{user.BookId}</td>
                  <td className="px-4 py-2">{user.BookName}</td>
                  <td className="px-4 py-2">{user.Author}</td>
                  <td className="px-4 py-2">{user.RequestTime}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button className="px-2 py-1 mb-2 lg:mb-0 bg-green-500 text-white rounded hover:bg-green-600">
                      Grant
                    </button>
                    <button className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </main>
  );
}
