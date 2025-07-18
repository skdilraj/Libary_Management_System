import AllBooks from "@/app/components/admins/allBooks";
import Sidebar from "@/app/components/admins/sideBar";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-5%">
      <Sidebar className="flex-1" />
      <AllBooks className="flex-1"  />
    </div>
  );
}
