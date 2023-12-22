import { useState } from "react";
import Popover from "../Popover";
import "./module.scss";
import { NavLink } from "react-router-dom";

export default function SideMenu({ showSideMenu }) {
  const [visible, setVisible] = useState(false);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const rightMenus = [
    { label: "有内容时显示", value: "contentShow" },
    { label: "隐藏", value: "hide" },
  ];

  const defaultMenus = [
    {
      label: "所有",
      value: "all",
      nums: 0,
      icon: "icon-today",
      path: "all",
    },
    {
      label: "今天",
      value: "today",
      nums: 0,
      icon: "icon-today",
      path: "today",
    },
    {
      label: "明天",
      value: "tomorrow",
      nums: 0,
      icon: "icon-today",
      path: "tomorrow",
    },
    {
      label: "最近7天",
      value: "week",
      nums: 0,
      icon: "icon-week",
      path: "week",
    },
    {
      label: "收集箱",
      value: "inbox",
      nums: 0,
      icon: "icon-inbox",
      path: "inbox",
    },
    {
      label: "摘要",
      value: "summary",
      nums: 0,
      icon: "icon-inbox",
      path: "summary",
    },
  ];

  const projectMenus = [
    {
      label: "清单1",
      value: "p1",
      nums: 0,
      icon: "icon-project",
      color: "red",
    },
    {
      label: "清单2",
      value: "p2",
      nums: 0,
      icon: "icon-project",
      color: "green",
    },
  ];

  const tagMenus = [
    {
      label: "标签1",
      value: "e1",
      nums: 0,
      icon: "icon-envelope",
      color: "red",
    },
    {
      label: "标签2",
      value: "e2",
      nums: 0,
      icon: "icon-envelope",
      color: "red",
    },
  ];

  const statusMenus = [
    {
      label: "已完成",
      value: "completed",
      icon: "icon-completed",
      color: "red",
    },
    {
      label: "已放弃",
      value: "abandon",
      icon: "icon-abandon",
      color: "red",
    },
    {
      label: "垃圾桶",
      value: "trash",
      icon: "icon-trash",
      color: "red",
    },
  ];

  // 右击打开菜单
  function mouseRightClick(e) {
    e.preventDefault();
    setLeft(e.clientX);
    setTop(e.clientY);
    setVisible(true);
    // 当点击其它地方时关闭菜单
    document.addEventListener("click", function (event) {
      setVisible(false);
    });
  }

  // 悬浮的菜单项
  function floatMenuClick(item) {
    console.log(item);
  }

  return (
    <div
      className="side-menu-box"
      style={{ display: showSideMenu ? "block" : "none" }}
    >
      <Popover visible={visible} top={top} left={left}>
        <div className="float-menu-box">
          {rightMenus.map((item) => (
            <div
              onClick={() => floatMenuClick(item)}
              className="float-menu-item"
              key={item.value}
            >
              {item.label}
            </div>
          ))}
        </div>
      </Popover>
      <div className="card-box">
        <div className="card-body">
          {defaultMenus.map((item) => (
            <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
              <NavLink
                to={`${item.path}`}
                className={({ isActive }) =>
                  isActive ? "menu-item active-menu" : "menu-item"
                }
              >
                <div className="item-left">
                  <div className={`iconfont ${item.icon} menu-icon`}></div>
                  <div className="item-label">{item.label}</div>
                </div>
                <div className="item-right">
                  <div className="item-nums">4</div>
                  <div className="iconfont icon-opt right-icon"></div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="card-box">
        {/* 清单 */}
        <div className="card-title">清单</div>
        <div className="card-body">
          {projectMenus.map((item) => (
            <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
              <NavLink
                to={`project/${item.value}`}
                className={({ isActive }) =>
                  isActive ? "menu-item active-menu" : "menu-item"
                }
              >
                <div className="item-left">
                  <div className={`iconfont ${item.icon} menu-icon`}></div>
                  <div className="item-label">{item.label}</div>
                </div>
                <div className="item-right">
                  <div
                    className="rounded"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="item-nums">4</div>
                  <div className="iconfont icon-opt right-icon"></div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
        {/* 标签 */}
        <div className="card-title">标签</div>
        <div className="card-body">
          {tagMenus.map((item) => (
            <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
              <NavLink
                to={`tag/${item.value}`}
                className={({ isActive }) =>
                  isActive ? "menu-item active-menu" : "menu-item"
                }
              >
                <div className="item-left">
                  <div className={`iconfont ${item.icon} menu-icon`}></div>
                  <div className="item-label">{item.label}</div>
                </div>
                <div className="item-right">
                  <div className="item-nums">4</div>
                  <div className="iconfont icon-opt right-icon"></div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className="card-box">
        <div className="card-body">
          {statusMenus.map((item) => (
            <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
              <NavLink
                to={`status/${item.value}`}
                className={({ isActive }) =>
                  isActive ? "menu-item active-menu" : "menu-item"
                }
              >
                <div className="item-left">
                  <div className={`iconfont ${item.icon} menu-icon`}></div>
                  <div className="item-label">{item.label}</div>
                </div>
                <div className="item-right">
                  <div className="iconfont icon-opt right-icon"></div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
