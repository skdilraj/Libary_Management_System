"use client";

import { FaUpload } from "react-icons/fa6";

export default function Addstudents() {
  return (
    <div className="flex-1 bg-white rounded-lg shadow p-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Add Student</h2>
      </div>

      <div className="w-[200px] h-[180px] mx-auto mb-6 border-2 cursor-pointer border-dashed border-purple-700 rounded-full flex flex-col items-center justify-center text-sm text-gray-400">
        <FaUpload className="text-3xl mb-2" />
        <p className="text-mlg">Drop picture to upload</p>
        <span className="text-purple-700 text-lg">or browse</span>
      </div>

      {/* Form */}
      <form className="grid grid-cols-2 gap-4 text-sm ">
  <input type="text" placeholder="Name" className="border p-2 py-3 text-base rounded outline-purple-400" />
  <input type="text" placeholder="Roll" className="border p-2 py-3 text-base rounded outline-purple-400" />
  <input type="email" placeholder="Email" className="border p-2 py-3 text-base rounded outline-purple-400" />
  <input type="text" placeholder="Phone Number" className="border p-2 py-3 text-base rounded outline-purple-400" />

  <select className="border p-2 py-3 text-base rounded outline-purple-400">
    <option value="">Select Department</option>
    <option value="IT">IT</option>
    <option value="CSE">CSE</option>
    <option value="AI/ML">AI/ML</option>
    <option value="MCA">MCA</option>
    <option value="BCA">BCA</option>
    <option value="ECE">ECE</option>
  </select>

  <select className="border p-2 py-3 text-base rounded outline-purple-400">
    <option value="">Select Year</option>
    <option value="1st">1st Year</option>
    <option value="2nd">2nd Year</option>
    <option value="3rd">3rd Year</option>
    <option value="4th">4th Year</option>
    
  </select>
</form>

      <div className="flex w-full gap-4 mt-6">
        <button type="submit" className="flex-1 bg-purple-900 text-white px-6 py-2 rounded cursor-pointer">Add</button>
        <button type="reset" className="flex-1 border border-gray-400 px-6 py-2 rounded cursor-pointer hover:scale-y-100">Cancel</button>
      </div>
    </div>
  );
}
