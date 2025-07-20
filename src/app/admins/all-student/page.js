import Sidebar from "@/app/components/admins/sideBar"
import Allstudnts from "@/app/components/admins/allStudents"
export default function Home() {
    return (
        <main className="flex flex-col md:flex-row">
           <Sidebar/> 
           <Allstudnts/>
        </main>
    )
}