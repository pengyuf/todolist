import { useOutletContext } from "react-router-dom";
import TCheckBox from "../TCheckBox";
import "./module.scss";
import { Popover } from "antd";
import { useState } from "react";

export default function TaskListWrapper({ listTitle }) {
  const [showSideMenu, setShowSideMenu] = useOutletContext();
  const sideClick = () => setShowSideMenu((c) => !c);

  const hoverContent = (
    <div>
      <div>asdf</div>
      <div>iojiji</div>
    </div>
  );

  const [hovered, setHovered] = useState(false);

  const handleHoverChange = (open) => {
    setHovered(open);
  };

  function checkClick(status) {
    console.log("checkClick", status);
  }

  return (
    <div className="task-list-wrapper">
      <div className="opt-box">
        <div className="opt-left">
          <div
            className={`iconfont ${
              showSideMenu ? "icon-shousuo" : "icon-open"
            } left-icon`}
            onClick={sideClick}
          ></div>
          <div className="take-name">{listTitle}</div>
        </div>
        <div className="opt-right">
          <div className="iconfont icon-paixu right-icon"></div>
          <Popover
            style={{
              width: 500,
            }}
            content={hoverContent}
            trigger="hover"
            open={hovered}
            onOpenChange={handleHoverChange}
          >
            <div className="iconfont icon-opt right-icon"></div>
          </Popover>
        </div>
      </div>
      <div className="input-box">
        <input placeholder="添加任务" />
        <div className="input-suffix suffix-display">
          <div className="iconfont icon-rili"></div>
          <div className="iconfont icon-xia"></div>
        </div>
      </div>
      <div className="list-box">
        <div className="task-item">
          <div className="task-item-wrapper">
            <div className="task-prefix">
              <TCheckBox status="finish" clickTrigger={checkClick} />
            </div>
            <div className="task-body">
              <div className="task-content">任务内容</div>
              <div className="task-msg">
                {/* <Tag /> */}
                10月10日
              </div>
            </div>
          </div>
          <div className="task-suffix">
            <div className="iconfont icon-opt"></div>
          </div>
        </div>
        <div className="task-item">
          <div className="task-item-wrapper">
            <div className="task-prefix">
              <TCheckBox status="cancel" clickTrigger={checkClick} />
            </div>
            <div className="task-body">
              <div className="task-content">任务内容</div>
              <div className="task-msg">10月10日</div>
            </div>
          </div>
          <div className="task-suffix">
            <div className="iconfont icon-opt"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
