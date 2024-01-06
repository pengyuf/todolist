import { Outlet, NavLink } from "react-router-dom";
import style from "./index.module.scss";
import { useEffect, useState } from "react";
import TPopover from "@/components/TPopover";

export default function Home() {
  const [showSideMenu, setShowSideMenu] = useState(true);
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
      icon: "icon-suoyoupeizhi",
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
      icon: "icon-mingtian",
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
      icon: "icon-zhaiyao1",
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
    <div className={style.home_page}>
      <div className={style.home_side}>
        <div
          className={style.side_menu_box}
          style={{ display: showSideMenu ? "block" : "none" }}
        >
          <TPopover visible={visible} top={top} left={left}>
            <div className={style.float_menu_box}>
              {rightMenus.map((item) => (
                <div
                  onClick={() => floatMenuClick(item)}
                  className={style.float_menu_item}
                  key={item.value}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </TPopover>
          <div className={style.card_box}>
            <div className={style.card_body}>
              {defaultMenus.map((item) => (
                <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
                  <NavLink
                    to={`${item.path}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${style.menu_item} ${style.active_menu}`
                        : `${style.menu_item}`
                    }
                  >
                    <div className={style.item_left}>
                      <div
                        className={`iconfont ${item.icon} ${style.menu_icon}`}
                      ></div>
                      <div className={style.item_label}>{item.label}</div>
                    </div>
                    <div className={style.item_right}>
                      <div className={style.item_nums}>4</div>
                      <div
                        className={`iconfont icon-opt ${style.right_icon}`}
                      ></div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className={style.card_box}>
            {/* 清单 */}
            <div className={style.card_title}>清单</div>
            <div className={style.card_body}>
              {projectMenus.map((item) => (
                <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
                  <NavLink
                    to={`project/${item.value}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${style.menu_item} ${style.active_menu}`
                        : `${style.menu_item}`
                    }
                  >
                    <div className={style.item_left}>
                      <div
                        className={`iconfont ${item.icon} ${style.menu_icon}`}
                      ></div>
                      <div className={style.item_label}>{item.label}</div>
                    </div>
                    <div className={style.item_right}>
                      <div
                        className={style.rounded}
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div className={style.item_nums}>4</div>
                      <div
                        className={`iconfont icon-opt ${style.right_icon}`}
                      ></div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
            {/* 标签 */}
            <div className={style.card_title}>标签</div>
            <div className={style.card_body}>
              {tagMenus.map((item) => (
                <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
                  <NavLink
                    to={`tag/${item.value}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${style.menu_item} ${style.active_menu}`
                        : `${style.menu_item}`
                    }
                  >
                    <div className={style.item_left}>
                      <div
                        className={`iconfont ${item.icon} ${style.menu_icon}`}
                      ></div>
                      <div className={style.item_label}>{item.label}</div>
                    </div>
                    <div className={style.item_right}>
                      <div className={style.item_nums}>4</div>
                      <div
                        className={`iconfont icon-opt ${style.right_icon}`}
                      ></div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className={style.card_box}>
            <div className={style.card_body}>
              {statusMenus.map((item) => (
                <div key={item.value} onContextMenu={(e) => mouseRightClick(e)}>
                  <NavLink
                    to={`status/${item.value}`}
                    className={({ isActive }) =>
                      isActive
                        ? `${style.menu_item} ${style.active_menu}`
                        : `${style.menu_item}`
                    }
                  >
                    <div className={style.item_left}>
                      <div
                        className={`iconfont ${item.icon} ${style.menu_icon}`}
                      ></div>
                      <div className={style.item_label}>{item.label}</div>
                    </div>
                    <div className={style.item_right}>
                      <div
                        className={`iconfont icon-opt ${style.right_icon}`}
                      ></div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={style.home_body}>
        <Outlet context={[showSideMenu, setShowSideMenu]} />
      </div>
    </div>
  );
}
