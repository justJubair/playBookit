import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
