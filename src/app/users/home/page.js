"use client";
import Sidebar from "@/app/components/users/sidebar";
import Homepage from "@/app/components/users/homePage";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
export default function Home() {
  const { loading, authorized } = useAuthRedirect("student");
  
    if (loading) return null; // Prevent UI flicker
    if (!authorized) return null; // Prevent rendering for unauthorized
  return (
     <main className="flex flex-col md:flex-row">
          <Sidebar/>
          <Homepage/>
     </main>
  );
}
