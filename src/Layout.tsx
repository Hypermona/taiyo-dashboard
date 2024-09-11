import { Outlet } from "react-router-dom";
import SidePanel from "./components/SidePanel";
import { Toaster } from "./components/ui/sonner";

function Layout() {
  return (
    <div>
      <div className="flex max-h-fit bg-gray-100 dark:bg-gray-800">
        <SidePanel />
        <div className="rounded-lg my-3 sm:m-5 w-full min-h-[90vh]">
          <Outlet />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Layout;
