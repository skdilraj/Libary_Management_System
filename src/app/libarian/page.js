import Sidebar from "../components/libarian/sidebar";
import Home from "../components/libarian/home";
export default function Librarian(){
    return(
        <main className="flex flex-col md:flex-row">
            <Sidebar/>
            <Home/>
        </main>
    );
}