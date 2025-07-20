import AllBooks from "@/app/components/admins/allBooks";
import Sidebar from "@/app/components/admins/sideBar";
import useAuthRedirect from "../hooks/useAuthRedirect";
export default function Home() {
  const { loading, authorized } = useAuthRedirect("admin");

  if (loading) return null; // Prevent UI flicker
  if (!authorized) return null; // Prevent rendering for unauthorized
  return (
    <div className="flex flex-col md:flex-row gap-5%">
      <Sidebar className="flex-1" />
      <AllBooks className="flex-1"  />
    </div>
  );
}
