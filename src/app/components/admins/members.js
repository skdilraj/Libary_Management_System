"use client";

import { useState, useEffect } from "react"; // ✨ 1. Import useEffect
import { FaUpload } from "react-icons/fa6";

export default function Members() {
  const [formData, setFormData] = useState({
    memberId: "",
    name: "",
    phone: "",
    address: "",
    email: "",
    dob: "",
    highestQualification: "",
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");
  const [members, setMembers] = useState([]); // ✨ 2. Add state for members list

  // ✅ Fetch all members from the API
  const fetchMembers = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/admin/all-librarian");
      const data = await res.json(); // data is { success: true, total: 1, members: [...] }

      if (res.ok && data.success) {
        // ✅ Correct: Access the array inside the 'members' key
        setMembers(data.members);
      } else {
        throw new Error(data.message || "Failed to fetch members");
      }
    } catch (error) {
      setMessage(`❌ Error fetching members: ${error.message}`);
    }
  };

  // ✨ 3. Use useEffect to fetch members when the component mounts
  useEffect(() => {
    fetchMembers();
  }, []); // The empty array [] ensures this runs only once

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle file selection
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // ✅ Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };

  // ✅ Reset form
  const resetForm = () => {
    setFormData({
      memberId: "",
      name: "",
      phone: "",
      address: "",
      email: "",
      dob: "",
      highestQualification: "",
    });
    setFile(null);
    setPreview(null);
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      if (file) {
        formDataToSend.append("profileImage", file);
      }

      // NOTE: Your endpoint seems to be for adding a 'librarian', update if needed
      const res = await fetch("http://localhost:8000/api/admin/add-librarian", {
        method: "POST",
        credentials: "include",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Member added successfully!");
        resetForm();
        fetchMembers(); // ✨ 4. Refresh the members list after adding a new one
      } else {
        setMessage(` Error: ${data.message || "Failed to add member"}`);
      }
    } catch (error) {
      setMessage(` Error: ${error.message}`);
    }

    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div className="flex bg-gray-100 font-sans w-screen">
      <div className="flex-1 flex flex-wrap p-4 gap-4 md:ml-2">
        {/* All Members List */}
        {/* All Members List */}
        <div className="w-full md:w-[40%] bg-white rounded-lg shadow p-4 overflow-x-auto overflow-y-auto">
          <h2 className="text-3xl text-purple-600 font-semibold mb-4">
            All members
          </h2>

          {/* 👇 Make sure your table looks like this */}
          <table className="w-full text-left text-xl">
            <thead>
              <tr className="text-gray-900">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th> {/*  1. Add the Email header */}
              </tr>
            </thead>
            <tbody>
              {members.length > 0 ? (
                members.map((member) => (
                  <tr key={member.userId || member.memberId} className="border-b">
                    <td className="text-[15px] text-gray-800 p-2">
                      #{member.memberId}
                    </td>
                    <td className="text-[15px] p-2">
                      {member.name}
                    </td>
                    {/*  2. Add the table cell for the email data */}
                    <td className="text-[15px] p-2">
                      {member.email}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  {/* Update colSpan to 3 to cover all columns */}
                  <td colSpan="3" className="text-center text-gray-500 py-4">
                    No members found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* ... rest of the component */}
        </div>

        {/* Member Form */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Add New Member</h2>

          {/* Upload Box */}
          <div
            className="w-[200px] h-[200px] mx-auto mb-6 border-2 cursor-pointer border-dashed border-purple-700 rounded-2xl flex flex-col items-center justify-center text-sm text-gray-400 relative overflow-hidden"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById("fileInput").click()}
          >
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <FaUpload className="text-3xl mb-2" />
                <p className="text-sm">Drop picture to upload</p>
                <span className="text-purple-700 text-lg">or browse</span>
              </>
            )}
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-4 text-sm"
          >
            <input
              type="text"
              name="memberId"
              value={formData.memberId}
              onChange={handleChange}
              placeholder="Member ID"
              className="border p-2 rounded outline-purple-400"
              required
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 rounded outline-purple-400"
              required
            />

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border p-2 rounded outline-purple-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 rounded outline-purple-400"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address"
              className="border p-2 rounded col-span-2 outline-purple-400"
            />

            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="border p-2 rounded outline-purple-400"
            />
            <input
              type="text"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              placeholder="Highest Qualification"
              className="border p-2 rounded outline-purple-400"
            />

            {/* Buttons */}
            <div className="flex w-full gap-4 mt-6 col-span-2">
              <button
                type="submit"
                className="flex-1 bg-purple-900 text-white px-6 py-2 rounded cursor-pointer hover:scale-105 duration-150"
              >
                Add
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="flex-1 border border-gray-400 px-6 py-2 rounded cursor-pointer hover:scale-105 duration-150"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Message */}
          {message && (
            <p
              className={`mt-4 text-center p-2 rounded-md ${message.startsWith("")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
                }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
