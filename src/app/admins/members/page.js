import Sidebar from "@/app/components/admins/sideBar";
import Members from "@/app/components/admins/members";
export default function Home() {
  return (
    <main className="flex gap-5">
      <Sidebar/>
      <Members/>
    </main>
  );
}