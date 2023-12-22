import "./module.scss";

export default function Quadrant() {
  return (
    <div className="quadrant-wrapper">
      <div className="quadrant-header">
        <div className="quadrant-title">四象限</div>
        <div className="quadrant-header-opt">
          <div className="iconfont icon-opt"></div>
        </div>
      </div>
      <div className="quadrant-body">
        <div className="quadrant-item">
          <div className="quadrant-item-header">
            <div className="quadrant-item-title">
              <div className="iconfont icon-roman-1"></div>
              <div className="quadrant-item-title-value-4">重要且紧急</div>
            </div>
            <div className="quadrant-item-header-opt">
              <div className="iconfont icon-opt"></div>
            </div>
          </div>
          <div className="quadrant-item-body"></div>
        </div>
        <div className="quadrant-item">
          <div className="quadrant-item-header">
            <div className="quadrant-item-title">
              <div className="iconfont icon-roman-1"></div>
              <div className="quadrant-item-title-value-3">重要不紧急</div>
            </div>
            <div className="quadrant-item-header-opt">
              <div className="iconfont icon-opt"></div>
            </div>
          </div>
          <div className="quadrant-item-body"></div>
        </div>
        <div className="quadrant-item">
          <div className="quadrant-item-header">
            <div className="quadrant-item-title">
              <div className="iconfont icon-roman-1"></div>
              <div className="quadrant-item-title-value-2">不重要但紧急</div>
            </div>
            <div className="quadrant-item-header-opt">
              <div className="iconfont icon-opt"></div>
            </div>
          </div>
          <div className="quadrant-item-body"></div>
        </div>
        <div className="quadrant-item">
          <div className="quadrant-item-header">
            <div className="quadrant-item-title">
              <div className="iconfont icon-roman-1"></div>
              <div className="quadrant-item-title-value-1">不重要不紧急</div>
            </div>
            <div className="quadrant-item-header-opt">
              <div className="iconfont icon-opt"></div>
            </div>
          </div>
          <div className="quadrant-item-body"></div>
        </div>
      </div>
    </div>
  );
}
