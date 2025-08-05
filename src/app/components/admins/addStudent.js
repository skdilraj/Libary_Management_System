"use client";

import { useState, useRef } from "react";
import { FaUpload } from "react-icons/fa6";

export default function AddStudents() {
  // --- State Management ---
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    email: "",
    phoneNumber: "",
    department: "",
    year: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  // --- Event Handlers ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // --- Form Submission Handler (Updated to send file) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 1. Create a FormData object. This is essential for sending files.
      const data = new FormData();

      // 2. Append all the text fields from the form state.
      data.append("name", formData.name);
      data.append("roll", formData.roll);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("department", formData.department);
      data.append("year", formData.year);

      // 3. Append the image file if one has been selected.
      if (profileImage) {
        data.append("profileImage", profileImage);
      }

      // 4. Send the POST request with the FormData object.
      // The browser will automatically set the correct 'Content-Type: multipart/form-data' header.
      const response = await fetch("http://localhost:8000/api/admin/add-student", {
        method: "POST",
        body: data, // Use the FormData object as the body
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "An error occurred.");
      }

      setMessage("Student added successfully!");
      handleReset();

    } catch (error) {
      setMessage(`Error: ${error.message}`);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Resets all form fields
  const handleReset = () => {
    setFormData({
      name: "",
      roll: "",
      email: "",
      phoneNumber: "",
      department: "",
      year: "",
    });
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex-1 bg-white rounded-lg shadow-lg p-8 m-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Add Student</h2>
      </div>

      <div
        onClick={handleUploadClick}
        className="w-40 h-40 mx-auto mb-6 border-2 cursor-pointer border-dashed border-purple-700 rounded-full flex flex-col items-center justify-center text-sm text-gray-500 hover:bg-purple-50 transition-colors"
      >
        {profileImage ? (
          <img
            src={URL.createObjectURL(profileImage)}
            alt="Profile Preview"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <>
            <FaUpload className="text-3xl mb-2" />
            <p className="text-center">Drop picture to upload</p>
            <span className="text-purple-700 font-semibold">or browse</span>
          </>
        )}
      </div>
      <input
        type="file"
        name="profileImage"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" required className="border p-3 text-base rounded-md outline-purple-400" />
          <input name="roll" value={formData.roll} onChange={handleChange} type="text" placeholder="Roll" required className="border p-3 text-base rounded-md outline-purple-400" />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" required className="border p-3 text-base rounded-md outline-purple-400" />
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} type="text" placeholder="Phone Number" required className="border p-3 text-base rounded-md outline-purple-400" />

          <select name="department" value={formData.department} onChange={handleChange} required className="border p-3 text-base rounded-md outline-purple-400 bg-white">
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="AI/ML">AI/ML</option>
            <option value="MCA">MCA</option>
            <option value="BCA">BCA</option>
            <option value="ECE">ECE</option>
          </select>

          <select name="year" value={formData.year} onChange={handleChange} required className="border p-3 text-base rounded-md outline-purple-400 bg-white">
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        <div className="flex w-full gap-4 pt-4">
          <button type="submit" disabled={loading} className="flex-1 bg-purple-700 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-purple-800 transition-colors disabled:bg-purple-400">
            {loading ? "Adding..." : "Add"}
          </button>
          <button type="reset" className="flex-1 border border-gray-400 px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
            Cancel
          </button>
        </div>
      </form>

      {message && (
        <p className={`mt-4 text-center p-2 rounded-md ${message.startsWith("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
