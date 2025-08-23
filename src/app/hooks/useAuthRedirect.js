"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useAuthRedirect(requiredRole) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/auth/me", {
          credentials: "include",
          cache: "no-store", // Prevent browser caching
        });
        const data = await res.json();

        if (res.ok && data.user?.role === requiredRole) {
          setAuthorized(true);
        } else {
          setAuthorized(false); // explicitly set unauthorized
          router.replace("/login"); // redirect if not authorized
        }
      } catch (err) {
        setAuthorized(false);
        router.replace("/login"); // fallback to login
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Optional: handle browser back button by forcing reload
    const handlePopState = () => {
      router.replace("/login"); // redirect if user hits back
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router, requiredRole]);

  return { loading, authorized };
}
