import Image from "next/image";

export default function Login() {
  return (
    <main className="bg-slate-300 min-h-screen flex flex-col md:flex-row justify-center items-center p-6">
      
      {/* Left Image Section */}
      <div className="hidden md:flex justify-center md:mr-[80px]  lg:mr-[100px]">
        {/* Either use <img> or <Image> — here's the <img> version: */}
        <img 
          src="/login.png" 
          alt="Login Illustration"
          className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] h-auto max-h-[90vh] object-contain"
        />
      </div>

      {/* Login Form */}
      <form className="w-full max-w-sm bg-blue-50 p-8 rounded-xl shadow-xl md:mr-[100px] mt-10 md:mt-0">
        <div>
          <p className="text-2xl mb-1">Welcome</p>
          <span className="text-base text-neutral-800">to </span>
          <span className="text-4xl text-purple-600 font-semibold">Library</span>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block mb-1">Email Id</label>
            <input
              type="text"
              placeholder="Enter email id.."
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password.."
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end">
            <span className="text-sm text-gray-500 hover:text-purple-600 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
        </div>
      </form>
    </main>
  );
}
