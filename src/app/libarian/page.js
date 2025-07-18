
import Sidebar from "../components/libarian/sidebar"
import Libarian_Home from "../components/libarian/home_page"
export default function Home() {
    return (
        <main className="flex flex-col md:flex-row">
           <Sidebar/> 
           <Libarian_Home/>
        </main>
    )
}