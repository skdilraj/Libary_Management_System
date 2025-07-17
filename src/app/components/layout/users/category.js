import { TbBooks } from "react-icons/tb";
export default function Category() {
    const items = [
            {
                label: "Total Visitor",
                value: 12300,
               
            },
            {
                label: "Borrowed Books",
                value: 2300,
                
            },
            {
                label: "Overdue Books",
                value: 100,
            
            },
           
        ];
    return(
        <div>
            <h2 className="text-2xl">Categories</h2>

                <div className="flex flex-wrap md:justify-between my-3">
                    {items.map((item, index) => (

                        <div key={index} className="flex flex-col  p-5 my-2 md:my-0 w-full md:w-[25%] h-[180px] bg-purple-400 justify-center rounded-lg" >
                            <div className="flex justify-between my-2">
                                <p className="text-2xl">{item.value}</p>
                                <div className="text-3xl w-[70px]"><img src="/books.png" alt="img"/></div>
                            </div>
                            <p>{item.label}</p>

                        </div>

                    ))}
                </div>
        </div>
    )
}