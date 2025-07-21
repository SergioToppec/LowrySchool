import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function AppLayout() {
  return (
    <div>
      <Navbar/>
      <main className="min-h-[80vh] bg-gray-50">
        <Outlet />
      </main>
      <Footer className="flex flex-col h-full w-full"/>
    </div>
  );
}
