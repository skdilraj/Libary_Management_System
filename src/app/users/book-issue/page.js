"use client";
import Sidebar from "@/app/components/users/sidebar";
import BookIssue from "@/app/components/users/book-issue";
export default function Home() {
  return (
     <main className="flex flex-col md:flex-row">
          <Sidebar/>
          <BookIssue/>
     </main>
  );
}