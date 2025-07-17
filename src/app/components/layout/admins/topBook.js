export default function TopBook() {
    const topBooks = [
        {
            title: "The Midnight Library",
            author: "Matt Haig",
            cover: "https://i0.wp.com/bibliosini.com/wp-content/uploads/2021/06/The-Midnight-Library.jpg?resize=1329%2C2048&ssl=1",
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            cover: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
        },
        {
            title: "The Psychology of Money",
            author: "Morgan Housel",
            cover: "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
        },
        {
            title: "Educated",
            author: "Tara Westover",
            cover: "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
        },
        {
            title: "The Alchemist",
            author: "Paulo Coelho",
            cover: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
        },
        {
            title: "Rich Dad Poor Dad",
            author: "Robert T. Kiyosaki",
            cover: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
        },
    ];
    return (
        <>
            <div className="mt-4">
                <h2 className="text-3xl">Top Choices</h2>
                <div className="flex flex-wrap mt-4 justify-center">

                    {topBooks.map((item, index) => (

                        <div key={index} className="flex flex-col w-[50%] md:w-[16%] p-2 md:items-center">
                            <img src={item.cover} alt="book" className="w-[180px] h-[280px] object-cover rounded-2xl" />
                            <p className="text-lg font-semibold">{item.title}</p>
                            <span className="text-slate-500">{item.author}</span>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}