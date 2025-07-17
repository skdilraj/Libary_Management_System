import Dashboard from "../components/admins/dashBoard";
import Sidebar from "../components/admins/sideBar";
export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
