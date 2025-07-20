import Sidebar from "@/app/components/libarian/sidebar"
import Bookreturn from "@/app/components/libarian/book_return"
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
export default function Home() {
     const { loading, authorized } = useAuthRedirect("librarian");
      
        if (loading) return null; // Prevent UI flicker
        if (!authorized) return null; // Prevent rendering for unauthorized
    return (
        <main className="flex flex-col md:flex-row">
            <Sidebar/> 
            <Bookreturn/>
        </main>
    )
}