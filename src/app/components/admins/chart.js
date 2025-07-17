"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", Visitors: 4200, Borrowers: 2400 },
  { name: "Tue", Visitors: 3000, Borrowers: 398 },
  { name: "Wed", Visitors: 2000, Borrowers: 800 },
  { name: "Thu", Visitors: 2780, Borrowers: 908 },
  { name: "Fry", Visitors: 1890, Borrowers: 600 },
  { name: "Sat", Visitors: 2390, Borrowers: 800 },
  { name: "Sun", Visitors: 3490, Borrowers: 300 },
];

export default function Chart() {
  return (
    <div className="w-full lg:w-2/5 bg-white shadow-md rounded-lg p-4">
      <div className="w-full h-[300px] md:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Visitors"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Borrowers"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
