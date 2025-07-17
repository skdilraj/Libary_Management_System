export default function Latest_issue() {
    const issuedBooks = [
        {
            userId: "U1001",
            book: "The Psychology of Money",
            issueDate: "2025-07-01",
            returnDate: "2025-07-15",
            details: "Renewed once"
        },
        {
            userId: "U1002",
            book: "Atomic Habits",
            issueDate: "2025-07-05",
            returnDate: "2025-07-20",
            details: "First-time borrower"
        },
        {
            userId: "U1003",
            book: "Deep Work",
            issueDate: "2025-07-08",
            returnDate: "2025-07-18",
            details: "Requested extension"
        },
        {
            userId: "U1004",
            book: "Rich Dad Poor Dad",
            issueDate: "2025-07-03",
            returnDate: "2025-07-17",
            details: "Returned early"
        },
        {
            userId: "U1005",
            book: "Clean Code",
            issueDate: "2025-07-02",
            returnDate: "2025-07-16",
            details: "Overdue by 2 days"
        }
    ];
    return (
        <>
            <div className="w-full lg:w-3/5 bg-white shadow-md rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Latest Book Issue List</h2>
                    <button className="border px-3 py-1 rounded hover:text-purple-600">Issue Book</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-md mt-3 border border-gray-200 rounded-lg ">
                        <thead className="bg-purple-100 text-purple-800 font-semibold">
                            <tr>
                                <th className="px-4 py-3">User ID</th>
                                <th className="px-4 py-3">Book</th>
                                <th className="px-4 py-3">Issued Date</th>
                                <th className="px-4 py-3">Return Date</th>
                                <th className="px-4 py-3">Details</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {issuedBooks.map((book, index) => (
                                <tr
                                    key={index}
                                    className="h-[60px] border-t hover:bg-purple-50 transition duration-150"
                                >
                                    <td className="px-4 py-3">{book.userId}</td>
                                    <td className="px-4 py-3">{book.book}</td>
                                    <td className="px-4 py-3">{book.issueDate}</td>
                                    <td className="px-4 py-3">{book.returnDate}</td>
                                    <td className="px-4 py-3 text-purple-600 underline">{book.details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-purple-600 text-right mr-2 hover:underline">see more</div>
            </div>
        </>
    )
}