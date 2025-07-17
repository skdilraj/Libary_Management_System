import Image from "next/image";

export default function Login() {
  return (
    <main className="bg-slate-300 w-screen h-screen flex justify-end items-center">
       <from className="w-[350px] h-[380px] bg-blue-50 mr-[50px] rounded-xl shadow-xl  mu">
         
          <div className="mt-[20px]">
          <p className="text-xl ml-[20px] mt-[10px]">Wellcome</p>
         <span className="text-base text-neutral-800 ml-[25px]">to</span>
         <span className="text-3xl  text-purple-600 font-semibold "> Library</span>
         
         </div>
             <div className="mt-[30px] ml-[20px] ">
                <label>Email Id</label><br/>
                 <input type="text" placeholder="enter email id.." className="cursor-pointer  w-[300px] bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/><br/>
                <label>Password</label><br/>
                 <input type="password" placeholder="enter password.." className="cursor-pointer  w-[300px] bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/><br/>
                 <span className="text-gray-400 cursor-pointer flex justify-end mr-[27px] hover:underline hover:text-purple-600">forget password?</span>
                 <button className="bg-blue-500 w-[200px] rounded-lg text-blue-50 mt-[20px] ml-[50px] cursor-pointer h-[40px]">Sign in</button>
             </div>
             <div className="  mt-[40px]">
              
              
             </div>
       </from>
    </main>
  );
}

