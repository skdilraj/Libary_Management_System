"use client"; 
import Sidebar from "../components/librarian/sidebar";
import Home from "../components/librarian/home";
import useAuthRedirect from "@/app/hooks/useAuthRedirect";
import { useEffect } from "react";
export default function Librarian() {
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
            <Home />
        </main>
    );
}