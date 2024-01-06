import { NavLink, Outlet } from "react-router-dom";
import "./module.scss";
import { Tooltip, ConfigProvider } from "antd";
import { useState } from "react";

export default function Home() {
  const [showSideMenu, setShowSideMenu] = useState(true);

  const sideList = [
    { label: "任务", icon: "icon-task", value: "task", path: "/task" },
    { label: "日历", icon: "icon-rili", value: "calendar", path: "/calendar" },
    {
      label: "四象限",
      icon: "icon-quadrant",
      value: "quadrant",
      path: "/quadrant",
    },
    { label: "专注", icon: "icon-zhuanzhu", value: "focus", path: "/focus" },
    { label: "打卡", icon: "icon-daqia", value: "clockIn", path: "/clockIn" },
  ];

  const sideItems = sideList.map((item) => (
    <Tooltip title={item.label} placement="right" key={item.value}>
      <NavLink
        to={`${item.path}`}
        className={({ isActive }) => (isActive ? "active-nav" : "nav")}
      >
        <div
          className={`iconfont ${item.icon} side-icon`}
          onClick={() => setShowSideMenu(!showSideMenu)}
        ></div>
      </NavLink>
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
      <div className="index-page">
        <div className="sidebar-wrapper">
          <div className="top-bar">
            <div className="avatar">
              <img src={require("@/statics/img/avatar.png")} alt="" />
            </div>
            {sideItems}
          </div>
          <div className="bottom-bar"></div>
        </div>
        <div className="index-content-wrapper">
          <Outlet />
        </div>
      </div>
    </ConfigProvider>
  );
}
