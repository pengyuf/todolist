import "./module.scss";

export default function SideMenu({ showSideMenu }) {
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

  // 右击
  function mouseRightClick(e) {
    e.preventDefault();
    // 创建自定义的菜单
    var customMenu = document.getElementById("customMenu");
    if (!customMenu) {
      customMenu = document.createElement("div");
      customMenu.id = "customMenu";
      customMenu.style.position = "fixed";
      customMenu.style.zIndex = 1000;
      customMenu.style.padding = "10px";
      customMenu.style.backgroundColor = "#f0f0f0";
      customMenu.style.border = "1px solid #ccc";

      var item1 = document.createElement("button");
      item1.innerHTML = "选项一";
      item1.onclick = function () {
        alert("你选择了选项一！");
        customMenu.style.display = "none";
      };
      customMenu.appendChild(item1);

      var item2 = document.createElement("button");
      item2.innerHTML = "选项二";
      item2.onclick = function () {
        alert("你选择了选项二！");
        customMenu.style.display = "none";
      };
      customMenu.appendChild(item2);

      document.body.appendChild(customMenu);
    }

    customMenu.style.display = "block";
    customMenu.style.left = e.clientX + "px";
    customMenu.style.top = e.clientY + "px";

    // 当点击其它地方时关闭菜单
    document.addEventListener("click", function (event) {
      if (customMenu && !customMenu.contains(event.target)) {
        customMenu.style.display = "none";
      }
    });
  }

  return (
    <div
      className="side-menu-box"
      style={{ display: showSideMenu ? "block" : "none" }}
    >
      <div className="card-box">
        <div className="card-body">
          {defaultMenus.map((item) => (
            <div
              key={item.value}
              className="menu-item"
              onContextMenu={(e) => mouseRightClick(e)}
            >
              <div className="item-left">
                <div className={`iconfont ${item.icon} menu-icon`}></div>
                <div className="item-label">{item.label}</div>
              </div>
              <div className="item-right">
                <div className="item-nums">4</div>
                <div className="iconfont icon-opt right-icon"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card-box">
        {/* 清单 */}
        <div className="card-title">清单</div>
        <div className="card-body">
          {projectMenus.map((item) => (
            <div
              key={item.value}
              className="menu-item"
              onContextMenu={(e) => mouseRightClick(e)}
            >
              <div className="item-left">
                <div className={`iconfont ${item.icon} menu-icon`}></div>
                <div className="item-label">{item.label}</div>
              </div>
              <div className="item-right">
                <div className="item-nums">4</div>
                <div className="iconfont icon-opt right-icon"></div>
              </div>
            </div>
          ))}
        </div>
        {/* 标签 */}
        <div className="card-title">标签</div>
        <div className="card-body">
          {envelopeMenus.map((item) => (
            <div
              key={item.value}
              className="menu-item"
              onContextMenu={(e) => mouseRightClick(e)}
            >
              <div className="item-left">
                <div className={`iconfont ${item.icon} menu-icon`}></div>
                <div className="item-label">{item.label}</div>
              </div>
              <div className="item-right">
                <div className="item-nums">4</div>
                <div className="iconfont icon-opt right-icon"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-box">
        <div className="card-body">
          {statusMenus.map((item) => (
            <div
              key={item.value}
              className="menu-item"
              onContextMenu={(e) => mouseRightClick(e)}
            >
              <div className="item-left">
                <div className={`iconfont ${item.icon} menu-icon`}></div>
                <div className="item-label">{item.label}</div>
              </div>
              <div className="item-right">
                <div className="iconfont icon-opt right-icon"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
