import Sidebar from "@/app/components/users/sidebar";
import Profile from "@/app/components/users/profile";
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
        <Sidebar/>
        <Profile/>
    </main>
  );
}
