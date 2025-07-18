"use client";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <main className="bg-white min-h-screen relative flex items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background Image */}
      <div className="hidden md:flex absolute inset-0 w-screen h-full justify-center z-0">
        <img
          src="/assets.png"
          alt="Login Illustration"
          className="w-screen h-[100%] object-contain
           opacity-90"
        />
      </div>

      {/* Login Form */}
      <div
        className="
          relative z-10 
          w-full max-w-md 
          bg-purple-50 p-8 rounded-xl shadow-2xl 
          md:absolute lg:right-[19%] 
          
          mt-10 md:mt-0
        "
      >
        <div className="mb-6 text-center">
          <p className="text-2xl font-semibold">Welcome</p>
          <p className="text-base text-neutral-800">
            to <span className="text-4xl text-purple-600 font-bold">Library</span>
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Email Id</label>
            <input
              type="email"
              placeholder="Enter email id..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter password..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              required
            />
          </div>

          <div className="flex justify-end">
            <span className="text-sm text-gray-500 hover:text-purple-600 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <Link href="/users/home">
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </main>
  );
}
