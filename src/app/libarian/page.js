import Sidebar from "../components/libarian/sidebar";
import Home from "../components/libarian/home";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
export default function Librarian(){
     const { loading, authorized } = useAuthRedirect("librarian");
      
        if (loading) return null; // Prevent UI flicker
        if (!authorized) return null; // Prevent rendering for unauthorized
    return(
        <main className="flex flex-col md:flex-row">
            <Sidebar/>
            <Home/>
        </main>
    );
}