"use client"; 
import Sidebar from "../../components/librarian/sidebar"
import Issue from "../../components/librarian/issue_page"
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
import { useEffect } from "react";
export default function Home() {
    const { loading, authorized } = useAuthRedirect("librarian");
    useEffect(() => {
    // Prevent caching in browser back
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.href);
    }
  }, []);
    if (loading) return null; // Prevent UI flicker
    if (!authorized) return null; // Prevent rendering for unauthorized
    return (
        <main className="flex flex-col md:flex-row">
            <Sidebar />
            <Issue />
        </main>
    )
}