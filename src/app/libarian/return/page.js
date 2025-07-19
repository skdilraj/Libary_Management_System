import Sidebar from "@/app/components/libarian/sidebar"
import Bookreturn from "@/app/components/libarian/book_return"
export default function Home() {
    return (
        <main className="flex flex-col md:flex-row">
            <Sidebar/> 
            <Bookreturn/>
        </main>
    )
}