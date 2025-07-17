"use client";
import { TbBooks } from "react-icons/tb";
export default function Category({onSelect}) {
     const handleClick = (name) => {
         onSelect(name); // Send to parent
    };
    const items = [
            {
                label: "All Books",
                
            },
            {
                label: "Most Borrowed",
                value: 2300,
                
            },
            {
                label: "Newest",
                value: 100,
            
            },
           
        ];
    return(
        <div>
            <h2 className="text-2xl">Categories</h2>

                <div className="flex flex-wrap md:justify-between my-3">
                    {items.map((item, index) => (

                        <div key={index} onClick={() => handleClick(item.label)}  className="flex flex-col cursor-pointer  p-5 my-2 md:my-0 w-full md:w-[25%]  bg-purple-400 justify-center rounded-lg" >
                            <div className="flex justify-between my-2">
                                 <div className="text-3xl w-[70px]"><img src="/books.png" alt="img"/></div>
                                <p className="text-2xl mr-2">{item.label}</p>
                               
                            </div>
                            

                        </div>

                    ))}
                </div>
        </div>
    )
}