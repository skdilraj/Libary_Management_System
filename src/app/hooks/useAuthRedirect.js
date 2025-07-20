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
        });
        const data = await res.json();

        if (res.ok && data.user?.role === requiredRole) {
          setAuthorized(true);
        } else {
          router.replace("/unauthorized"); // or /login
        }
      } catch (err) {
        router.replace("/unauthorized");
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  return { loading, authorized };
}
