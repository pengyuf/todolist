import "./module.scss";

export default function SideMenu() {
  const defaultMenus = [
    { label: "今天", value: "today", nums: 0, icon: "icon-today" },
    { label: "最近7天", value: "week", nums: 0, icon: "icon-week" },
    { label: "收集箱", value: "inbox", nums: 0, icon: "icon-inbox" },
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
      color: "red",
    },
  ];

  const envelopeMenus = [
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

  return (
    <div className="side-menu-box">
      {defaultMenus.map((item) => (
        <div key={item.value} className="menu-item">
          <div className="item-left">
            <div className={`iconfont ${item.icon} menu-icon`}></div>
            <div className="item-label">{item.label}</div>
          </div>
          <div className="item-right">
            <div className="item-nums">4</div>
            {/* <div className="iconfont icon-opt"></div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
