import { Outlet, useLocation } from "react-router-dom";
import "./module.scss";
import { Tooltip, ConfigProvider } from "antd";
import SideMenu from "@/components/SideMenu";
import { useEffect, useState } from "react";
import TextareaWrapper from "@/components/TextareaWrapper";
import TaskListWrapper from "@/components/TaskListWrapper";

export default function Home() {
  const [showSideMenu, setShowSideMenu] = useState(true);

  const location = useLocation();

  useEffect(() => {
    console.log("路由改变");
  }, [location]);

  function sideControl() {
    setShowSideMenu(!showSideMenu);
  }

  return (
    <div className="home-page">
      <div className="menu-wrapper">
        <SideMenu showSideMenu={showSideMenu} />
      </div>
      <div className="home-body">
        <Outlet />
      </div>
    </div>
  );
}
