export default function Profile() {
  return (
    <main className="p-6 w-[100%] ">
        <div><h2 className="text-3xl">Student Profile</h2></div>
        <div className=" mt-6 bg-slate-100 p-6  rounded-sm w-[100%] ">
            
            <div className=" flex justify-between h-[300px]   w-[100%]">
                <div className="w-[48%] h-[300px] bg-white rounded-lg  flex"> 
                    <div className="bg-amber-500 w-[150px] h-[150px] rounded-full shadow-sm m-[40px]"></div>
                    <div className="bg-amber-300 w-[50%]  pt-[20px]">
                        <p>Name:</p>
                        <p>Id:</p>
                    </div>
                </div>
                <div className="w-[48%] h-[300px] bg-white rounded-lg"></div>
            </div>
            <div className=" flex justify-between h-[300px]  mt-6 w-[100%]">
                <div className="w-[48%] h-[300px] bg-white rounded-lg"> </div>
                <div className="w-[48%] h-[300px] bg-white rounded-lg"></div>
            </div>
            

        </div>
        
    </main>
  );
}