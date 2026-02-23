import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main
        id="main"
        tabIndex={-1}
        className="ui-container py-10 scroll-mt-16 focus:outline-none"
      >
        <Outlet />
      </main>
    </div>
  );
}
