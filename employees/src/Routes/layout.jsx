import { Outlet } from "react-router-dom";
import Navbar from "../Ui/component/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
