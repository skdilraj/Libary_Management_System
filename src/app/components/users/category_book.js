export default function CategoryBook({ CategoryName }) {
    const bookCategories = [
        {
            category: "All Books",
            books: [
                {
                    imageUrl: "https://m.media-amazon.com/images/I/81+8sluiHiL._SL1500_.jpg",
                    name: "JavaScript Essentials",
                    author: "Marijn Haverbeke",
                    rating: 4.5,
                    totalQuantity: 20,
                    availableQuantity: 5,
                },
                {
                    imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781638356035/react-in-action-9781638356035_hr.jpg",
                    name: "React in Action",
                    author: "Mark T. Green",
                    rating: 4.7,
                    totalQuantity: 15,
                    availableQuantity: 7,
                },
                {
                    imageUrl: "https://cache1.deslegte.nl/images/cached/resample/jpg/data/uploads/520/640/cms_visual_213824.jpg_1426692228000_520x640.jpg",
                    name: "HTML & CSS Mastery",
                    author: "Jon Duckett",
                    rating: 4.2,
                    totalQuantity: 10,
                    availableQuantity: 6,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1527430253228-e93688616381",
                    name: "Node.js for Beginners",
                    author: "Brad Dayley",
                    rating: 4.6,
                    totalQuantity: 12,
                    availableQuantity: 4,
                },
                {
                    imageUrl: "https://m.media-amazon.com/images/I/71UOvmBw4CL._SL1481_.jpg",
                    name: "Understanding Git",
                    author: "Jon Loeliger & Matthew McCullough",
                    rating: 4.1,
                    totalQuantity: 8,
                    availableQuantity: 2,
                },
                {
                    imageUrl: "https://images.thalia.media/00/-/9bc00cef816c434ea0347849b02d3684/mongodb-in-action-taschenbuch-kyle-banker-englisch.jpeg",
                    name: "Learning MongoDB",
                    author: "Kyle Banker",
                    rating: 4.3,
                    totalQuantity: 9,
                    availableQuantity: 3,
                },
            ],
        },
        {
            category: "Most Borrowed",
            books: [
                {
                    imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
                    name: "Clean Code",
                    author: "Robert C. Martin",
                    rating: 4.9,
                    totalQuantity: 25,
                    availableQuantity: 3,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136",
                    name: "The Pragmatic Programmer",
                    author: "Andrew Hunt & David Thomas",
                    rating: 4.8,
                    totalQuantity: 18,
                    availableQuantity: 2,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1581091870627-7dfef2f199d7",
                    name: "Designing Data-Intensive Apps",
                    author: "Martin Kleppmann",
                    rating: 4.7,
                    totalQuantity: 22,
                    availableQuantity: 4,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
                    name: "Refactoring",
                    author: "Martin Fowler",
                    rating: 4.6,
                    totalQuantity: 19,
                    availableQuantity: 3,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1612178992930-96caa73f21e6",
                    name: "Effective JavaScript",
                    author: "David Herman",
                    rating: 4.5,
                    totalQuantity: 21,
                    availableQuantity: 6,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1603575005722-3f2ffbbff484",
                    name: "Eloquent JavaScript",
                    author: "Marijn Haverbeke",
                    rating: 4.7,
                    totalQuantity: 20,
                    availableQuantity: 5,
                },
            ],
        },
        {
            category: "Newest",
            books: [
                {
                    imageUrl: "https://images.unsplash.com/photo-1611095564980-017d641ce28b",
                    name: "Next.js Handbook",
                    author: "Flavio Copes",
                    rating: 4.6,
                    totalQuantity: 10,
                    availableQuantity: 10,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1603575005675-3e3fddf0fd1b",
                    name: "Vue.js Basics",
                    author: "Adam Jahr",
                    rating: 4.4,
                    totalQuantity: 8,
                    availableQuantity: 6,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1581091870627-7dfef2f199d7",
                    name: "Deno in Action",
                    author: "Alex Garland",
                    rating: 4.3,
                    totalQuantity: 7,
                    availableQuantity: 5,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1581093588469-41f00c7cbe56",
                    name: "AI for Beginners",
                    author: "Michael Taylor",
                    rating: 4.5,
                    totalQuantity: 12,
                    availableQuantity: 10,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1581093588619-8b9e3f1dc58c",
                    name: "Machine Learning Crash Course",
                    author: "Google AI Team",
                    rating: 4.6,
                    totalQuantity: 13,
                    availableQuantity: 12,
                },
                {
                    imageUrl: "https://images.unsplash.com/photo-1581093588404-1d5b91e89a40",
                    name: "Blockchain Explained",
                    author: "Don Tapscott",
                    rating: 4.2,
                    totalQuantity: 9,
                    availableQuantity: 7,
                },
            ],
        },
    ];



    // Check before use
    const selectedCategory = bookCategories.find(
        (cat) => cat.category === CategoryName
    );

    //  Early return if category not found
    if (!selectedCategory) {
        return (
            <div className="p-4 text-red-500">
                No category found for: <strong>{CategoryName}</strong>
            </div>
        );
    }


    return (
        <div className="w-full p-2">
            <h2 className="text-3xl font-semibold mb-4 text-purple-700">
                {selectedCategory.category}
            </h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {selectedCategory.books.map((book, i) => (
                    <div
                        key={i}
                        className="bg-white lg:flex h-full  rounded-xl shadow p-4 hover:shadow-lg transition"
                    >

                        <img
                            src={book.imageUrl}
                            alt={book.name}
                            className="w-full lg:w-[60%] h-40 lg:h-[300px] object-cover rounded-2xl"
                        />
                        <div className="p-2 lg:flex lg:flex-col lg:justify-center">
                            <h3 className="mt-2 font-bold">{book.name}</h3>
                            <p>{book.author}</p>
                            <p className="text-sm">⭐ {book.rating}</p>
                            <p className="text-sm text-gray-600">
                                Total: {book.totalQuantity} | Available: {book.availableQuantity}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <button className="mt-3 p-2 text-lg text-purple-600 cursor-pointer hover:scale-110 duration-150">
                    See more →
                </button>
            </div>
        </div>
    );
}