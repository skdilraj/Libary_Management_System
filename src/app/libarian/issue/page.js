import Sidebar from "../../components/libarian/sidebar"
import Issue from "../../components/libarian/issue_page"
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
export default function Home() {
    const { loading, authorized } = useAuthRedirect("librarian");
      
    if (loading) return null; // Prevent UI flicker
    if (!authorized) return null; // Prevent rendering for unauthorized
    return (
        <main className="flex flex-col md:flex-row">
           <Sidebar/> 
           <Issue/>
        </main>
    )
}