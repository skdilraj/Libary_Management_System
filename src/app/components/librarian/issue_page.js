"use client";
import { IoIosPeople } from "react-icons/io";
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

export default function Issue() {
  const [users, setUsers] = useState([]);

  // Fetch borrow requests
  const fetchRequests = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/librarian/getAllRequest", {
        credentials: "include",
      });
      const data = await res.json();
      setUsers(data.requests || []);
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // Approve Request
  const handleApprove = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/librarian/${id}/approve`, {
        method: "PUT",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        alert(" Request Approved Successfully!");
        fetchRequests(); // reload API
      } else {
        alert(" Failed to Approve Request: " + data.message);
      }
    } catch (err) {
      alert(" Error approving request");
      console.error("Error approving:", err);
    }
  };

  // Reject Request
  const handleReject = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/librarian/${id}/reject`, {
        method: "PUT",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        alert(" Request Rejected Successfully!");
        fetchRequests(); // reload API
      } else {
        alert(" Failed to Reject Request: " + data.message);
      }
    } catch (err) {
      alert(" Error rejecting request");
      console.error("Error rejecting:", err);
    }
  };

  // Chart data (static for now)
  const data = [
    { name: "Week 1", Borrow_books: 25 },
    { name: "Week 2", Borrow_books: 20 },
    { name: "Week 3", Borrow_books: 31 },
    { name: "Week 4", Borrow_books: 19 },
  ];

  return (
    <main className="p-4 md:p-6 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-purple-600">
        Book Issue
      </h2>

      <div className="bg-slate-100 p-4 md:p-6 rounded-sm w-full">
        {/* Top Cards Section */}
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          {/* Total Request Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg flex justify-between items-center p-6 min-h-[120px] shadow">
            <div className="flex flex-col lg:ml-4">
              <p className="text-2xl lg:text-4xl text-gray-500">Total Requests</p>
              <p className="text-3xl lg:text-6xl font-bold text-gray-800">
                {users.length}
              </p>
            </div>
            <div className="text-purple-600 text-[100px] md:text-[200px] lg:text-[250px]">
              <IoIosPeople />
            </div>
          </div>

          {/* Bar Chart */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg p-4 shadow">
            <div className="w-full h-[220px] sm:h-[250px] md:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
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
                  <th className="px-4 py-3">User Name</th>
                  <th className="px-4 py-3">Book Name</th>
                  <th className="px-4 py-3">Author</th>
                  <th className="px-4 py-3">Request Time</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white text-gray-700">
                {users.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-6 text-gray-500">
                      No requests available
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr
                      key={index}
                      className="h-[50px] border-t hover:bg-purple-50 transition duration-150"
                    >
                      <td className="px-4 py-2">{user.student?.name}</td>
                      <td className="px-4 py-2">{user.book?.title}</td>
                      <td className="px-4 py-2">{user.book?.author}</td>
                      <td className="px-4 py-2">
                        {new Date(user.requestDate).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 font-semibold">
                        {user.status === "pending" && (
                          <span className="text-yellow-600">Pending</span>
                        )}
                        {user.status === "approved" && (
                          <span className="text-green-600">Approved</span>
                        )}
                        {user.status === "rejected" && (
                          <span className="text-red-600">Rejected</span>
                        )}
                      </td>
                      <td className="px-4 py-2 space-x-2">
                        <button
                          onClick={() => handleApprove(user._id)}
                          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
                          disabled={user.status !== "pending"}
                        >
                          Grant
                        </button>
                        <button
                          onClick={() => handleReject(user._id)}
                          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
                          disabled={user.status !== "pending"}
                        >
                          Reject
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
