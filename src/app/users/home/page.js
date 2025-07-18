"use client";
import Sidebar from "@/app/components/users/sidebar";
import Homepage from "@/app/components/users/homePage";
export default function Home() {
  return (
     <main className="flex flex-col md:flex-row">
          <Sidebar/>
          <Homepage/>
     </main>
  );
}
