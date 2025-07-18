import Sidebar from "@/app/components/admins/sideBar";
import Members from "@/app/components/admins/members";
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <Sidebar/>
      <Members/>
    </main>
  );
}