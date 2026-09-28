import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/ui/TopNav";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="main flex-1">
        <TopNav />

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
