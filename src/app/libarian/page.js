import Sidebar from "../components/libarian/sidebar";
import Home from "../components/libarian/home";
export default function Librarian(){
    return(
        <main className="flex">
            <Sidebar/>
            <Home/>
        </main>
    );
}