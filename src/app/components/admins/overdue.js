"use client";
export default function Overdue(params) {
     const overdueRecords = [
        {
            userId: "U1001",
            userName: "Alex Roy",
            bookId: "B-2023-01",
            title: "The Psychology of Money",
            author: "Morgan Housel",
            overdue: 5,
            status: "Overdue",
            fine: 50, // 10 rs per day
        },
        {
            userId: "U1002",
            userName: "Sophia Sharma",
            bookId: "B-2023-05",
            title: "Atomic Habits",
            author: "James Clear",
            overdue: 2,
            status: "Overdue",
            fine: 20,
        },
        {
            userId: "U1003",
            userName: "Rahul Verma",
            bookId: "B-2023-03",
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            overdue: 0,
            status: "Returned",
            fine: 0,
        },
        {
            userId: "U1004",
            userName: "Anjali Mehta",
            bookId: "B-2023-08",
            title: "Educated",
            author: "Tara Westover",
            overdue: 7,
            status: "Overdue",
            fine: 70,
        },
    ];
    return (
        <>
            <div className="bg-white rounded-lg p-4">
                <h2 className="text-xl font-semibold">Overdue Book List</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left mt-4 border border-gray-200 rounded-lg ">
                        <thead className="bg-purple-100 text-purple-800 font-semibold">
                            <tr>
                                <th className="px-4 py-3">User ID</th>
                                <th className="px-4 py-3">User Name</th>
                                <th className="px-4 py-3">Book ID</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Author</th>
                                <th className="px-4 py-3">Overdue</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3">Fine</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {overdueRecords.map((book, index) => (
                                <tr
                                    key={index}
                                    className="border-t hover:bg-purple-50 transition duration-150 ease-in-out"
                                >
                                    <td className="px-4 py-3">{book.userId}</td>
                                    <td className="px-4 py-3">{book.userName}</td>
                                    <td className="px-4 py-3">{book.bookId}</td>
                                    <td className="px-4 py-3">{book.title}</td>
                                    <td className="px-4 py-3">{book.author}</td>
                                    <td className="px-4 py-3">{book.overdue} Days</td>
                                    <td className="px-4 py-3">{book.status}</td>
                                    <td className="px-4 py-3">{book.fine} Rs.</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}