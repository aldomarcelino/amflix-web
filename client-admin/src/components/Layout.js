import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Sidebar />
      <Outlet />
    </>
  );
}
