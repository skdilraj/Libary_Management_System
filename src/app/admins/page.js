import Dashboard from "../components/admins/dashBoard";
import Sidebar from "../components/admins/sideBar";
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row">
      <Sidebar />
      <Dashboard />
    </main>
  );
}
