import Sidebar from "../../components/libarian/sidebar"
import Issue from "../../components/libarian/issue_page"
export default function Home() {
    return (
        <main className="flex flex-col md:flex-row">
           <Sidebar/> 
           <Issue/>
        </main>
    )
}