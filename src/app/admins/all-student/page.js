import Sidebar from "@/app/components/admins/sideBar"
import Allstudnts from "@/app/components/admins/allStudents"
// import useAuthRedirect from "../hooks/useAuthRedirect";
export default function Home() {
// const { loading, authorized } = useAuthRedirect("admin");

//   if (loading) return null; // Prevent UI flicker
//   if (!authorized) return null; // Prevent rendering for unauthorized
    return (
        <main className="flex flex-col md:flex-row">
           <Sidebar/> 
           <Allstudnts/>
        </main>
    )
}