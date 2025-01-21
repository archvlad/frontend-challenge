import { Outlet } from "react-router";
import { Nav } from "@components/Nav";

function MainLayout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default MainLayout;
