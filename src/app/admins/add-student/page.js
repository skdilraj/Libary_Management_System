"use client";
import Sidebar from "@/app/components/admins/sideBar";
import Addstudents from "@/app/components/admins/addStudent";
export default function Home() {
  return (
     <main className="flex flex-col md:flex-row">
          <Sidebar/>
          <Addstudents/>
     </main>
  );
}