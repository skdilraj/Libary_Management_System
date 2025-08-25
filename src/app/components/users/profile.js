'use client';
import React, { useEffect, useState } from "react";
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

const chartData = [
  { name: "Jan", Borrow_books: 24 },
  { name: "Feb", Borrow_books: 39 },
  { name: "Mar", Borrow_books: 15 },
  { name: "Apr", Borrow_books: 9 },
  { name: "May", Borrow_books: 34 },
  { name: "Jun", Borrow_books: 18 },
  { name: "Jul", Borrow_books: 20 },
  { name: "Aug", Borrow_books: 30 },
  { name: "Sep", Borrow_books: 11 },
  { name: "Oct", Borrow_books: 19 },
  { name: "Nov", Borrow_books: 6 },
  { name: "Dec", Borrow_books: 24 },
];

export default function Profile() {
  const [profile, setProfile] = useState({});
  const [borrows, setBorrows] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingBorrows, setLoadingBorrows] = useState(true);

  // Fetch profile
  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch("http://localhost:8000/api/student/profile", {
          credentials: "include",
        });
        const data = await res.json();
        setProfile(data || {});
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoadingProfile(false);
      }
    }
    fetchProfile();
  }, []);

  // Fetch borrowed books
  useEffect(() => {
    async function fetchBorrows() {
      try {
        const res = await fetch("http://localhost:8000/api/student/my-borrows", {
          credentials: "include",
        });
        const data = await res.json();
        setBorrows(data.data || []);
      } catch (err) {
        console.error("Error fetching borrows:", err);
      } finally {
        setLoadingBorrows(false);
      }
    }
    fetchBorrows();
  }, []);
  const approvedBorrows = borrows.filter(b => b.status === "approved");
  return (
    <main className="p-4 md:p-6 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">Student Profile</h2>

      <div className="bg-slate-100 p-4 md:p-6 rounded-sm w-full">
        {/* Profile + Chart */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Profile */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg flex items-center p-4 min-h-[300px]">
            {loadingProfile ? (
              <p>Loading profile...</p>
            ) : (
              <>
                <img
                  src={profile.img || "/default-avatar.png"}
                  className="bg-slate-100 shadow-sm mr-4 w-[100px] md:w-[150px] h-[100px] md:h-[150px] object-fill rounded-full"
                />
                <div>
                  <p className="text-base md:text-lg mb-2">
                    <span className="font-semibold pr-2">Name:</span> {profile.name}
                  </p>
                  <p className="text-base md:text-lg mb-2">
                    <span className="font-semibold pr-2">Roll:</span> {profile.roll}
                  </p>
                  <p className="text-base md:text-lg">
                    <span className="font-semibold pr-2">Email:</span> {profile.email}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Chart */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4">
            <div className="w-full h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
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

        {/* Summary Cards + Table */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full">
          {/* Cards */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg flex flex-wrap justify-evenly p-4 ">
            <div className="bg-slate-100 w-[48%] md:w-[190px] h-[116px] rounded-lg text-center pt-6 mr-2">
              <p>Borrow Book</p>
              <p className="mt-2 font-bold">{borrows.length}</p>
            </div>
            <div className="bg-slate-100 w-[48%] md:w-[190px] h-[116px] rounded-lg text-center pt-6 ">
              <p>Fine Due</p>
              <p className="mt-2 font-bold">₹{borrows.reduce((acc, b) => acc + (b.fine || 0), 0)}</p>
            </div>
            <div className="flex bg-slate-100  h-[116px] rounded-lg text-center   justify-between items-center px-10 cursor-pointer hover:scale-105 transition-transform duration-300">
              <p>Borrow Request</p>
              <img src=" /icon_borrow.png" alt="icon not found" />
            </div>
          </div>

          {/* Table */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4">
            <h2 className="text-3xl mb-4">Borrowed Books</h2>
            {loadingBorrows ? (
              <p>Loading borrowed books...</p>
            ) : borrows.length === 0 ? (
              <p>No borrowed books yet.</p>
            ) : (
              <div className="overflow-y-auto h-[250px]">
                <table className="w-full text-left text-sm border border-gray-200 rounded-lg">
                  <thead className="bg-purple-100 text-purple-800 font-semibold">
                    <tr>
                      <th className="px-4 py-3">Book ID</th>
                      <th className="px-4 py-3">Title</th>
                      <th className="px-4 py-3">Author</th>
                      <th className="px-4 py-3">Fine</th>
                      <th className="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white text-gray-700">
                    {approvedBorrows.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center py-4">No approved borrowed books yet.</td>
                      </tr>
                    ) : (
                      approvedBorrows.map((book, index) => (
                        <tr key={index} className="h-[50px] border-t hover:bg-purple-50 transition duration-150">
                          <td className="px-4 py-2">{book.book._id}</td>
                          <td className="px-4 py-2">{book.book.title}</td>
                          <td className="px-4 py-2">{book.book.author}</td>
                          <td className="px-4 py-2">₹{book.fine || 0}</td>
                          <td className="px-4 py-2 font-semibold">
                            <span className="text-green-600">Approved</span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>

                </table>
                <Link href="/users/borrow" className="text-purple-600 text-right mr-2 hover:underline mt-2 block">
                  See more
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
