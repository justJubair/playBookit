import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-black min-h-screen">
        <Sidebar />
      </div>

      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
