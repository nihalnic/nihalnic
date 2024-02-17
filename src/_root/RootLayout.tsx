import { Outlet } from "react-router-dom";
import LeftSideBar from "../components/shared/Leftsidebar";
import TopBar from "../components/shared/Topbar";


const RootLayout = () => {
  return (
    <div className="md:flex w-full">
      <LeftSideBar />
      <section className="flex flex-1 flex-col h-full">
        <TopBar />
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
