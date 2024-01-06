import TCheckBox from "../TCheckBox";
import "./module.scss";
import { Tooltip } from "antd";

export default function TextareaWrapper() {
  return (
    <div className="textarea-wrapper">
      <div className="textarea-header">
        <div className="header-left">
          <div className="header-check-box">
            <TCheckBox />
          </div>
          <div className="header-time-box">7天后，12月17日</div>
        </div>
        <div className="header-right">
          <Tooltip title="优先级" placement="left">
            <div>
              <div className="iconfont icon-priority header-priority"></div>
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="textarea-body">文本输入</div>
      <div className="textarea-footer">
        <Tooltip title="移动至" placement="top">
          <div className="footer-left">
            <div className="iconfont icon-yidongzhi"></div>清单1
          </div>
        </Tooltip>
        <div className="footer-right">
          <Tooltip title="文本样式" placement="top">
            <div>
              <div className="iconfont icon-wenben"></div>
            </div>
          </Tooltip>
          <Tooltip title="评论" placement="top">
            <div>
              <div className="iconfont icon-pinglun"></div>
            </div>
          </Tooltip>
          <Tooltip title="更多" placement="top">
            <div>
              <div className="iconfont icon-opt"></div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
