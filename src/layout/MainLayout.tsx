import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/ui/TopNav";

const MainLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />

      <div className="flex flex-1 flex-col min-w-0 h-full overflow-hidden">
        <TopNav />

        <main className="flex-1 min-h-0 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
