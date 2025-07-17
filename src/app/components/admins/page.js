
import Dashboard from "../layout/admins/dashBoard";
import Sidebar from "../layout/admins/sideBar";



export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <Dashboard />
    </main>

  );
}
