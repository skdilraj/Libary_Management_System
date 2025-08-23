"use client";
import { TbBooks } from "react-icons/tb";
export default function Filter({ onSelect }) {
    const handleClick = (name) => {
        onSelect(name); // Send to parent
    };
    const items = [
        {
            label: "All Books",
            image: "/allbooks.png"
        },
        {
            label: "Most Borrowed",
            value: 2300,
            image: "/mostborrow.png"
        },
        {
            label: "Newest Books",
            value: 100,
            image: `data:image/svg+xml;utf8,
  <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 24 24'>
    <path d='M6 4h9a3 3 0 0 1 3 3v12H8a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z' fill='%234F46E5'/>
    <path d='M6 6.5h10.5' stroke='%23E5E7EB' stroke-width='1.5' stroke-linecap='round'/>
    <path d='M12 6.5v4.5' stroke='%23FACC15' stroke-width='1.5' stroke-linecap='round'/>
    <circle cx='18' cy='7' r='3.25' fill='%2310B981' stroke='%23065F46' stroke-width='0.5'/>
    <path d='M18 5.75v2.5M16.75 7h2.5' stroke='white' stroke-width='1.6' stroke-linecap='round'/>
  </svg>`
        },

    ];
    return (
        <div>
            <h2 className="text-2xl">Filter</h2>

            <div className="flex flex-wrap md:justify-between m-3">
                {items.map((item, index) => (

                    <div key={index} onClick={() => handleClick(item.label)} className="flex md:flex-col cursor-pointer mx-2 md:m-0 px-2 md:p-5 my-2 md:my-0  md:w-[30%]  bg-purple-400 justify-center rounded-lg transform transition-transform duration-300 hover:scale-110" >
                        <div className="flex justify-between my-2">
                            <div className="hidden md:block text-3xl">
                                <img
                                    className=" w-[100px] h-[100px]"
                                    src={item.image}
                                    alt="img"
                                />
                            </div>
                            <p className="text-lg md:text-2xl mr-2 text-white">{item.label}</p>
                        </div>



                    </div>

                ))}
            </div>
        </div>
    )
}