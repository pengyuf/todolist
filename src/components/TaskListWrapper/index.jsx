import "./module.scss";

export default function TaskListWrapper() {
  return (
    <div className="task-list-wrapper">
      <div className="opt-box">
        <div className="opt-left">
          <div className="iconfont icon-shousuo left-icon"></div>
          <div className="take-name">今天</div>
        </div>
        <div className="opt-right">
          <div className="iconfont icon-opt right-icon"></div>
          <div className="iconfont icon-opt right-icon"></div>
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
              <div className="check-box"></div>
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
        <div className="task-item">
          <div className="task-item-wrapper">
            <div className="task-prefix">
              <div className="check-box-error"></div>
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
