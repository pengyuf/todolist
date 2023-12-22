import { useEffect, useState } from "react";
import "./module.scss";
import { ProgressCircle } from "@/components/ProgressCircle";
import { Modal, Input, message } from "antd";

const timeTabs = [
  { label: "番茄计时", value: "tomatoTimer" },
  { label: "正计时", value: "positiveTimer" },
];

const progressSize = 360;
const progressWidth = 8;
const progressR = progressSize / 2 - progressWidth / 2;

let timer;

export default function Focus() {
  const [messageApi, contextHolder] = message.useMessage();
  const [timeTab, setTimeTab] = useState("tomatoTimer");

  const [curProgressL, setProgressL] = useState(0);
  const [progressStatus, setProgressStatus] = useState(0); // 0:开始 ，1：执行中 ，2：暂停 ,3：完成
  const [curTomato, setCurTomato] = useState(5); // 分钟
  const [keepingTime, setKeepingTime] = useState(0); // 秒
  const [showTime, setShowTime] = useState(formatSeconds(curTomato * 60, 0));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    if (progressStatus != 0) return;
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (isNaN(curTomato)) {
      messageApi.open({
        type: "warning",
        content: "请输入数字",
      });
      return;
    }
    setIsModalOpen(false);
    setShowTime(formatSeconds(curTomato * 60, 0));
  };
  const handleCancel = () => {
    setCurTomato(5);
    setIsModalOpen(false);
  };

  function changeTimeTab(type) {
    setTimeTab(type);
  }

  function changeMaxTomato(e) {
    // console.log(e)
    setCurTomato(e.currentTarget.value);
  }

  useEffect(() => {
    const maxTime = curTomato * 60;
    if (progressStatus == 0) {
      clearTimeout(timer);
      setProgressL(0);
      setKeepingTime(0);
      setShowTime(formatSeconds(maxTime, 0));
    }
    if (progressStatus == 1) {
      if (keepingTime <= maxTime) {
        timer = setTimeout(() => {
          setKeepingTime((k) => k + 1);
          setProgressL(arcL(keepingTime));
          setShowTime(formatSeconds(maxTime, keepingTime));
        }, 1000);
      } else {
        clearTimeout(timer);
        setProgressStatus(3);
      }
    }
    if (progressStatus == 2) {
      clearTimeout(timer);
    }
  }, [keepingTime, progressStatus]);

  function formatSeconds(maxTime, keepTime) {
    const seconds = maxTime - keepTime;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  // 计算进度条弧长
  function arcL(curTime) {
    const maxTime = curTomato * 60;
    const p = (100 / maxTime) * curTime;
    const l = (2 * 3.14 * progressR * p) / 100;
    return l;
  }

  function clickTime() {
    alert("clickTime");
  }

  function clickProgressBtn(type) {
    if (type == "start") {
      setProgressStatus(1);
    }
    if (type == "stop") {
      setProgressStatus(2);
    }
    if (type == "keeping") {
      setProgressStatus(1);
    }
    if (type == "end") {
      setProgressStatus(0);
    }
    if (type == "complete") {
      setProgressStatus(0);
    }
  }

  function progressOptBtn() {
    if (progressStatus == 0) {
      return (
        <div
          className="focus-timer-btn focus-timer-btn-0"
          onClick={() => clickProgressBtn("start")}
        >
          开始
        </div>
      );
    }
    if (progressStatus == 1) {
      return (
        <div
          className="focus-timer-btn focus-timer-btn-1"
          onClick={() => clickProgressBtn("stop")}
        >
          暂停
        </div>
      );
    }
    if (progressStatus == 2) {
      return (
        <>
          <div
            className="focus-timer-btn focus-timer-btn-0"
            onClick={() => clickProgressBtn("keeping")}
          >
            继续专注
          </div>
          <div
            className="focus-timer-btn focus-timer-btn-1"
            onClick={() => clickProgressBtn("end")}
          >
            结束
          </div>
        </>
      );
    }
    if (progressStatus == 3) {
      return (
        <div
          className="focus-timer-btn focus-timer-btn-1"
          onClick={() => clickProgressBtn("complete")}
        >
          退出
        </div>
      );
    }
  }

  function tomatoHtml() {
    if (progressStatus == 3) {
      return (
        <>
          <img
            className="tomato-img"
            src={require("@/statics/img/tomato.png")}
            alt=""
          />
          <div className="complete-text">您刚收获了一个番茄</div>
          <div className="focus-timer-btn-box">{progressOptBtn()}</div>
        </>
      );
    } else {
      return (
        <>
          <div className="focus-opt-body-title" onClick={showModal}>
            专注:{curTomato}分钟
            <span
              className="iconfont icon-arrow-right"
              style={{ fontSize: "12px", marginLeft: "5px" }}
            ></span>
          </div>
          <div className="focus-timer-box">
            <div className="timer-progress">
              <ProgressCircle
                size={progressSize}
                width={progressWidth}
                progress={curProgressL}
              />
            </div>
            <div className="cur-time-box" onClick={clickTime}>
              {showTime}
            </div>
          </div>
          <div className="focus-timer-btn-box">{progressOptBtn()}</div>
        </>
      );
    }
  }

  return (
    <div className="focus-wrapper">
      {contextHolder}
      <Modal
        title="设置专注时间"
        okText="确认"
        cancelText="取消"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Input
          placeholder="请输入专注时间（分钟）"
          defaultValue={curTomato}
          onChange={changeMaxTomato}
        />
      </Modal>
      <div className="focus-opt-wrapper">
        <div className="focus-opt-header">
          <div className="focus-title">专注</div>
          <div className="focus-time-tab">
            {timeTabs.map((item) => {
              return (
                <div
                  key={item.value}
                  className={`time-tab-item ${
                    timeTab == item.value ? "active-time-tab-item" : ""
                  }`}
                  onClick={() => changeTimeTab(item.value)}
                >
                  {item.label}
                </div>
              );
            })}
          </div>
          <div className="focus-opt-box">
            <div className="iconfont icon-opt"></div>
          </div>
        </div>
        <div className="focus-opt-body">{tomatoHtml()}</div>
      </div>
      <div className="focus-record-wrapper">
        <div className="focus-stat-box">
          <div className="focus-record-title">概览</div>
          <div className="focus-stat-body">
            <div className="focus-stat-item">
              <div className="stat-item-title">今日番茄</div>
              <div className="stat-item-value">1</div>
            </div>
            <div className="focus-stat-item">
              <div className="stat-item-title">今日番茄</div>
              <div className="stat-item-value">1</div>
            </div>
            <div className="focus-stat-item">
              <div className="stat-item-title">今日番茄</div>
              <div className="stat-item-value">1</div>
            </div>
            <div className="focus-stat-item">
              <div className="stat-item-title">今日番茄</div>
              <div className="stat-item-value">1</div>
            </div>
          </div>
        </div>
        <div className="focus-record-box">
          <div className="focus-record-title">记录</div>
        </div>
      </div>
    </div>
  );
}
