import { Outlet } from "react-router-dom";
import "./module.scss";

export default function Home() {
  const sideList = [{ label: "任务", icon: "icon-task", value: "task" }];

  const sideItems = sideList.map((item) => (
    <div key={item.value} className={`iconfont ${item.icon} side-icon`}></div>
  ));

  return (
    <div className="home-page">
      <div className="sidebar">
        <div className="top-bar">
          <div className="avatar">
           <img src={require('@/statics/img/avatar.png')} alt="" />
          </div>
          {sideItems}
        </div>
        <div className="bottom-bar"></div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
