import useAuthRedirect from "../hooks/useAuthRedirect";
import Sidebar from "@/app/components/admins/sideBar";
import Members from "@/app/components/admins/members";
export default function Home() {
 const { loading, authorized } = useAuthRedirect("admin");

  if (loading) return null; // Prevent UI flicker
  if (!authorized) return null; // Prevent rendering for unauthorized
  return (
    <main className="flex flex-col md:flex-row">
      <Sidebar/>
      <Members/>
    </main>
  );
}