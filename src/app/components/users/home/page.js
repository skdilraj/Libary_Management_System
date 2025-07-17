"use client";
import Sidebar from "../../layout/users/sidebar";
import Homepage from "../../layout/users/homePage";
export default function Home() {
  return (
     <main className="flex">
          <Sidebar/>
          <Homepage/>
     </main>
  );
}
