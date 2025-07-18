"use client";

import { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight, FaUpload } from "react-icons/fa";

export default function AllBooks() {
  // ------------------------------
  // State & Refs for Drag-and-Drop
  // ------------------------------
  const [dragActive, setDragActive] = useState(false); // tracks if a file is being dragged
  const [selectedFile, setSelectedFile] = useState(null); // holds the selected image file
  const inputRef = useRef(null); // reference to hidden file input for "Browse"

  // Handle file drag over the drop zone
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  // Handle drag leave event
  const handleDragLeave = () => {
    setDragActive(false);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file); // store only image files
    } else {
      alert("Please upload an image file.");
    }
  };

  // Trigger the hidden input when "Browse" is clicked
  const handleBrowseClick = () => {
    inputRef.current.click();
  };

  // Handle file selected via browse button
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file); // store only image files
    } else {
      alert("Please select a valid image file.");
    }
  };

  // ------------------------------
  // State for Book Form Fields
  // ------------------------------
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

  // Update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Image File:", selectedFile);
  };

  return (
    <div className="h-screen w-full overflow-scroll bg-gray-100 flex flex-col place-content-center place-items-center">
      {/* Card Container */}
      <div className="bg-white flex m-4 rounded-xl p-15 border-[0.5px] border-purple-600 overflow-hidden">

        {/* Left/Main Content Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">Add New Book</h2>

          {/* ------------------------------ */}
          {/* Upload Box with Drag & Drop */}
          {/* ------------------------------ */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-dashed border-2 rounded-xl h-40 flex flex-col justify-center items-center mb-6 text-gray-500 transition ${dragActive ? "border-purple-500 bg-purple-50" : "border-purple-700"
              }`}
          >
            {/* Upload Icon */}
            <FaUpload className="text-xl mb-2" />

            {/* Instruction Text */}
            <p>
              Drop image here or{" "}
              <span
                onClick={handleBrowseClick}
                className="text-purple-700 cursor-pointer underline"
              >
                Browse
              </span>
            </p>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Show selected file name */}
            {selectedFile && (
              <p className="text-sm text-gray-600 mt-2">
                Selected: <strong>{selectedFile.name}</strong>
              </p>
            )}
          </div>

          {/* ------------------------------ */}
          {/* Book Details Form */}
          {/* ------------------------------ */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl">
            <div className="grid grid-cols-2 gap-4">
              <input name="resourceType" value={formData.resourceType} onChange={handleChange} placeholder="Resource type" className="rounded outline-none border-purple-700 border-1 p-1" />
              <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="rounded outline-none border-purple-700 border-1 p-1" />
              <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="rounded outline-none border-purple-700 border-1 p-1" />
              <input name="edition" value={formData.edition} onChange={handleChange} placeholder="Edition" className="rounded outline-none border-purple-700 border-1 p-1" />
              <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" className="rounded outline-none border-purple-700 border-1 p-1" />
              <input name="language" value={formData.language} onChange={handleChange} placeholder="Language" className="rounded outline-none border-purple-700 border-1 p-1" />
              <input name="publisherName" value={formData.publisherName} onChange={handleChange} placeholder="Publisher name" className="rounded outline-none border-purple-700 border-1 p-1" />
              <input name="totalQuantity" value={formData.totalQuantity} onChange={handleChange} placeholder="Total quantity" className="rounded outline-none border-purple-700 border-1 p-1" type="text" />
              <input name="availableQuantity" value={formData.availableQuantity} onChange={handleChange} placeholder="Available quantity" className="rounded outline-none border-purple-700 border-1 p-1" type="text" />
            </div>

            {/* ------------------------------ */}
            {/* Action Buttons */}
            {/* ------------------------------ */}
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
