"use client";
import { IoNotifications } from "react-icons/io5";
import Category from "./category";
export default function Homepage() {
    return (
        <>
            <main className="flex flex-col md:ml-2 p-2 md:p-6 w-full">
                <div className="flex items-center justify-between px-2">
                    <select
                        defaultValue=""
                        className="w-50 px-4 py-2 bg-white border border-purple-600 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    >
                        <option value="" disabled className="text-gray-400">
                            All Books
                        </option>
                        <option value="option1" className="py-2">
                            Option One
                        </option>
                        <option value="option2" className="py-2">
                            Option Two
                        </option>
                        <option value="option3" className="py-2">
                            Option Three
                        </option>
                    </select>



                    <div className="flex items-center space-x-5">
                        <input
                            type="text"
                            placeholder="Search for anything..."
                            className="px-3 py-2 hidden md:block text-sm border border-purple-600 rounded-md shadow-md focus:outline-none focus:ring-3 focus:ring-purple-400"
                        />
                        <div className="text-3xl"><IoNotifications /></div>
                    </div>
                </div>
                <section className=" flex flex-col mt-6 bg-slate-100 rounded-sm p-4">
                    <Category />
                </section>

            </main>
        </>
    )
}