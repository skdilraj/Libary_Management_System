"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaUpload } from "react-icons/fa";

export default function AllBooks() {
  const [formData, setFormData] = useState({
    resourceType: "",
    category: "",
    title: "",
    edition: "",
    author: "",
    language: "",
    publisherName: "",
    totalQuantity: "",
    availableQuantity: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="h-screen w-full overflow-scroll bg-gray-100 flex flex-col place-content-center place-items-center">
    <div className=" bg-white flex  m-4 rounded-xl p-15 border-[0.5px] border-purple-600 overflow-hidden">

      {/* Main Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Add New Book</h2>

        {/* Upload box */}
        <div className="border-dashed border-2 border-purple-700 rounded-xl h-40 flex flex-col justify-center items-center mb-6 text-gray-500">
          <FaUpload className="text-xl mb-2" />
          <p>Drop file to upload or <span className="text-purple-700 cursor-pointer">Browse</span></p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
          <div className="grid grid-cols-2 gap-4">
            <input name="resourceType" value={formData.resourceType} onChange={handleChange} placeholder="Resource type" className="rounded outline-none border-purple-700 border-1 p-1" />
            <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="rounded outline-none border-purple-700 border-1 p-1" />
            <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="rounded outline-none border-purple-700 border-1 p-1" />
            <input name="edition" value={formData.edition} onChange={handleChange} placeholder="Edition" className="rounded outline-non border-purple-700 border-1 p-1" />
            <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="rounded outline-none border-purple-700 border-1 p-1" />
            <input name="language" value={formData.language} onChange={handleChange} placeholder="Language" className="rounded outline-none border-purple-700 border-1 p-1" />
            <input name="publisherName" value={formData.publisherName} onChange={handleChange} placeholder="Publisher name" className="outline-none border-purple-700 border-1 p-1" />
            <input name="totalQuantity" value={formData.totalQuantity} onChange={handleChange} placeholder="Total quantity" className="rounded outline-none border-purple-700 border-1 p-1" type="text" />
            <input name="availableQuantity" value={formData.availableQuantity} onChange={handleChange} placeholder="Available quantity" className="rounded outline-none border-purple-700 border-1 p-1" type="text" />
          </div>
          
          <div className="flex gap-5 mt-6">
            <button type="submit" className="bg-purple-700 flex-1 text-white px-6 py-2 rounded cursor-pointer hover:bg-purple-600">Save</button>
            <button type="reset" className="bg-gray-300 px-6 flex-1 py-2 rounded cursor-pointer hover:bg-gray-400">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
