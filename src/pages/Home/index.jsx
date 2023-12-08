import { Outlet } from "react-router-dom";
import "./module.scss";
import { Tooltip, ConfigProvider } from "antd";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  const sideList = [{ label: "任务", icon: "icon-task", value: "task" }];

  const sideItems = sideList.map((item) => (
    <Tooltip title={item.label} placement="right" key={item.value}>
      <div className={`iconfont ${item.icon} side-icon`}></div>
    </Tooltip>
  ));

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(71, 114, 250)",
        },
      }}
    >
      <div className="home-page">
        <div className="sidebar-wrapper">
          <div className="top-bar">
            <div className="avatar">
              <img src={require("@/statics/img/avatar.png")} alt="" />
            </div>
            {sideItems}
          </div>
          <div className="bottom-bar"></div>
        </div>
        <div className="menu-wrapper">
          <SideMenu />
        </div>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>
    </ConfigProvider>
  );
}
