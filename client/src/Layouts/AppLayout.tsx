import Navbar from "@/features/Navbar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <>
      <Outlet />
      <Navbar />
    </>
  );
}
