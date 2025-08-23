// app/page.tsx or pages/index.js
"use client";
import { FaBook, FaUndo } from "react-icons/fa";
import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import Link from "next/link";

const data = [
  { name: "Week 1", Borrowed: 25,Returned:10 },
  { name: "Week 2", Borrowed: 20,Returned:13 },
  { name: "Week 3", Borrowed: 31,Returned:17 },
  { name: "Week 4", Borrowed: 19,Returned:9 },
];
export default function Home() {
  return (
    <div className="w-screen min-h-screen flex overflow-auto bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 p-7">
        <h1 className="text-4xl font-bold mb-5">
          Welcome, <span className="text-purple-700">librarian</span>
        </h1>

        {/* Action Cards */}
        <div className="w-full h-50 flex flex-wrap gap-5 mb-10">
          <button className="bg-white flex-1 text-purple-500 p-4 rounded-lg shadow-xl cursor-pointer duration-300 border-2 border-white hover:border-2 hover:border-purple-500 flex flex-col items-center justify-center">
            <FaBook className="text-5xl mb-2" />
            <Link href="/libarian/issue">Book Issue</Link>
          </button>
          
          <button className="bg-white flex-1 text-purple-500 p-4 rounded-lg shadow-xl cursor-pointer duration-300 border-2 border-white hover:border-2 hover:border-purple-500 flex flex-col items-center justify-center">
            <FaUndo className="text-5xl mb-2" />
            <Link href="/libarian/return">Book Return</Link>
          </button>

          {/*bar*/}
          <div className="w-[100%] bg-white flex-3 rounded-lg p-4 shadow-xl">
            <div className="w-[100%] h-40 ">
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
                    dataKey="Borrowed"
                    fill="#fcba03"
                  />
                  <Bar
                    dataKey="Returned"
                    fill="#84fc03"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        {/* Table */}
        <h1 className="text-4xl font-bold mb-5">Recent Borrows</h1>
        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full text-left">
            <thead className="bg-purple-100 text-purple-800">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Book ID</th>
                <th className="p-3">Book Name</th>
                <th className="p-3">Book Date</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Placeholder rows */}
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((row) => (
                <tr key={row} className="border-t">
                  <td className="p-3">U0{row}</td>
                  <td className="p-3">User {row}</td>
                  <td className="p-3">B00{row}</td>
                  <td className="p-3">Book Title {row}</td>
                  <td className="p-3">2025-07-1{row}</td>
                  <td className="p-3">Returned</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
