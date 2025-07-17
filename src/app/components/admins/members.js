"use client";

import { FaUsers, FaEdit, FaTrash, FaEllipsisV } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";

export default function Members() {
  return (
    <div className="flex  bg-gray-100 font-sans w-screen">
    
      {/* Main Section */}
      <div className="flex-1 flex flex-wrap p-4 gap-4 md:ml-2">
        {/* All Members List */}
        <div className="w-full md:w-[40%] bg-white rounded-lg shadow p-4 overflow-x-auto overflow-y-auto ">
          <h2 className="text-3xl text-purple-600 font-semibold mb-4">All members</h2>
          <table className="w-full h-[75vh] text-left text-xl">
            <thead>
              <tr className="text-gray-900">
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody className=" gap-3">
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="border-b py-2">
                  <td className="text-[15px] text-gray-800 hover:text-purple-600 cursor-pointer">#154784</td>
                  <td className="text-[15px] hover:text-purple-600 cursor-pointer">Julia</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="mt-6 text-lg text-purple-600 cursor-pointer hover:scale-110 duration-150">See more →</button>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Member latest record</h2>
            <div className="flex gap-3 text-purple-600 text-sm">
              {/* <FaEdit />
              <FaTrash />
              <FaEllipsisV /> */}
            </div>
          </div>

          <div className="w-[200px] h-[180px] mx-auto mb-6 border-2 cursor-pointer border-dashed border-purple-700 rounded-full flex flex-col items-center justify-center text-sm text-gray-400">
            <FaUpload className="text-3xl mb-2" />
            <p className="text-mlg">Drop picture to upload</p>
            <span className="text-purple-700 text-lg">or browse</span>
          </div>

          {/* Form */}
          <form className="grid grid-cols-2 gap-4 text-sm">
            <input type="text" placeholder="Member ID" className="border p-2 rounded outline-purple-400" />
            <input type="text" placeholder="Name" className="border p-2 rounded outline-purple-400" />
            <input type="text" placeholder="Place" className="border p-2 rounded outline-purple-400" />
            <input type="text" placeholder="Phone" className="border p-2 rounded outline-purple-400" />
            <input type="text" placeholder="Address" className="border p-2 rounded col-span-2 outline-purple-400" />
            <input type="email" placeholder="Email" className="border p-2 rounded outline-purple-400" />
            <input type="date" placeholder="Membership date" className="border p-2 rounded outline-purple-400" />
            <input type="text" placeholder="Remark" className="border p-2 rounded col-span-2 outline-purple-400" />
          </form>

          <div className="flex w-full gap-4 mt-6">
            <button className="flex-1 bg-purple-900 text-white px-6 py-2 rounded cursor-pointer">Add</button>
            <button className=" flex-1 border border-gray-400 px-6 py-2 rounded cursor-pointer hover:scale-y-100">Cancel</button>
          </div>
        </div> 
      </div>
    </div>
  );
}
