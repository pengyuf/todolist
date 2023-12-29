import Calendar from "@/components/Calendar";
import style from "./index.module.scss";

export default function ClockIn() {
  return (
    <div className={style.clockInWrapper}>
      <div className={style.clockInLeft}>
        <div className={style.leftTitleBox}>
          <div className={style.leftTitle}>打卡</div>
          <div className={style.headerTabs}>
            <div className={style.tabItem}>坚持中</div>
            <div className={style.tabItem}>已归档</div>
          </div>
          <div className={style.leftOpt}>
            <div
              className={`iconfont icon-add`}
              style={{ marginRight: "10px" }}
            ></div>
            <div className={`iconfont icon-opt`}></div>
          </div>
        </div>
      </div>
      <div className={style.clockInRight}>
        <Calendar />
      </div>
    </div>
  );
}
