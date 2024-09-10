import DashboardLayout from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import UserBookings from "@/pages/Dashboard/UserBookings/UserBookings";
import UserProfile from "@/pages/Dashboard/UserProfile/UserProfile";
import FacilityPage from "@/pages/FacilityPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/facility/:id",
        element: <FacilityPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <UserProfile />,
      },
      {
        path: "/dashboard/user/bookings",
        element: <UserBookings />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
