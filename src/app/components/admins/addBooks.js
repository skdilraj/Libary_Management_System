"use client";

import { useState, useRef } from "react";
import { FaUpload } from "react-icons/fa";

export default function AddBooks() {
  // ------------------------------
  // State & Refs for Form
  // ------------------------------
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);

  const [formData, setFormData] = useState({
    resourceType: "",
    category: "",
    title: "",
    author: "",
    isbn: "",
    publisherName: "",
    totalQuantity: "",
  });

  // --- File Handling Logic ---

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Please upload an image file.");
    }
  };

  const handleBrowseClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Please select a valid image file.");
    }
  };

  // --- Form Data and Submission Logic ---

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // This function now only resets the form and clears any messages
  const handleReset = () => {
    setFormData({
      resourceType: "",
      category: "",
      title: "",
      author: "",
      isbn: "",
      publisherName: "",
      totalQuantity: "",
    });
    setSelectedFile(null);
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const data = new FormData();
    data.append("resourceType", formData.resourceType);
    data.append("category", formData.category);
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("isbn", formData.isbn);
    data.append("publisherName", formData.publisherName);
    data.append("totalQuantity", formData.totalQuantity);
    
    if (selectedFile) {
      data.append("bookImage", selectedFile);
    }

    try {
      const response = await fetch("http://localhost:8000/api/admin/add-book", {
        method: "POST",
        credentials: "include", 
        body: data,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "An error occurred.");
      }

      // --- THIS IS THE UPDATED SUCCESS LOGIC ---
      setMessage("Book added successfully!");
      
      // 1. Reset the form fields directly
      setFormData({
          resourceType: "",
          category: "",
          title: "",
          author: "",
          isbn: "",
          publisherName: "",
          totalQuantity: "",
      });
      setSelectedFile(null);

      // 2. Set a timer to clear the success message after 5 seconds
      setTimeout(() => {
        setMessage("");
      }, 5000);
      // ------------------------------------------

    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full overflow-y-auto bg-gray-100 flex flex-col justify-center items-center py-12">
      {/* Card Container */}
      <div className="bg-white flex m-4 rounded-xl p-8 border shadow-lg max-w-4xl w-full">
        {/* Main Content Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add New Book</h2>

          {/* Upload Box with Drag & Drop */}
          <div
            onClick={handleBrowseClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-dashed border-2 rounded-xl h-40 flex flex-col justify-center items-center mb-6 text-gray-500 transition-colors cursor-pointer ${
              dragActive ? "border-purple-500 bg-purple-50" : "border-gray-400"
            }`}
          >
            {selectedFile ? (
              <img 
                src={URL.createObjectURL(selectedFile)} 
                alt="Book Preview" 
                className="w-full h-full object-contain rounded-xl p-2" 
              />
            ) : (
              <>
                <FaUpload className="text-3xl mb-2 text-gray-400" />
                <p>
                  Drop book image here or{" "}
                  <span className="text-purple-700 underline font-semibold">
                    Browse
                  </span>
                </p>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {/* Book Details Form */}
          <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="resourceType" value={formData.resourceType} onChange={handleChange} placeholder="Resource Type" required className="border p-3 rounded-md outline-purple-400" />
              <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" required className="border p-3 rounded-md outline-purple-400" />
              <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required className="border p-3 rounded-md outline-purple-400" />
              <input name="author" value={formData.author} onChange={handleChange} placeholder="Author" required className="border p-3 rounded-md outline-purple-400" />
              <input name="isbn" value={formData.isbn} onChange={handleChange} placeholder="ISBN" required className="border p-3 rounded-md outline-purple-400" />
              <input name="publisherName" value={formData.publisherName} onChange={handleChange} placeholder="Publisher Name" required className="border p-3 rounded-md outline-purple-400" />
              <input name="totalQuantity" value={formData.totalQuantity} onChange={handleChange} placeholder="Total Quantity" required type="number" className="border p-3 rounded-md outline-purple-400" />
            </div>

            {/* Action Buttons */}
            <div className="flex w-full gap-4 pt-4">
              <button type="submit" disabled={loading} className="flex-1 bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-purple-800 transition-colors disabled:bg-purple-400">
                {loading ? "Saving..." : "Save Book"}
              </button>
              <button type="reset" className="flex-1 border border-gray-400 px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                Cancel
              </button>
            </div>
          </form>

          {/* Response Message */}
          {message && (
            <p className={`mt-4 text-center p-2 rounded-md ${message.startsWith("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
