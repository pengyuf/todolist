import { getCurMonth, getCurYear } from "@/utils/index";
import style from "./index.module.scss";
import { useEffect, useState } from "react";

const weekList = ["日", "一", "二", "三", "四", "五", "六"];

export default function Calendar() {
  const [curYear, setCurYear] = useState(getCurYear());
  const [curMonth, setCurMonth] = useState(getCurMonth());
  const [daysList, setDaysList] = useState([]);

  useEffect(() => {
    const daysList = []; // 7*6 = 42
    // 当前月有多少天
    const days = getDaysInMonth(curYear, curMonth);

    // 当前月的1号是星期几
    const startDay = getStartDayInWeek(curYear, curMonth);

    // 前一个月有多少天
    const frontDays = getFrontMonthDays(curYear, curMonth);

    const frontData = getOtherYearAndMonth(curYear, curMonth, "front");
    const nextData = getOtherYearAndMonth(curYear, curMonth, "next");

    for (let i = startDay, j = frontDays; i > 0; i--, j--) {
      daysList[i] = {
        value: j,
        date: `${frontData.otherYear}-${frontData.otherMonth}-${j}`,
      };
    }

    for (let i = 1; i <= days; i++) {
      daysList[i + startDay] = {
        value: i,
        date: `${curYear}-${curMonth}-${i}`,
      };
    }

    const curLen = daysList.length;
    if (curLen < 42) {
      const backDays = 42 - curLen;
      for (let i = 0; i <= backDays; i++) {
        daysList[curLen + i] = {
          value: i + 1,
          date: `${nextData.otherYear}-${nextData.otherMonth}-${i + 1}`,
        };
      }
    }

    setDaysList(daysList);
  }, [curMonth, curYear]);

  // 获取前/后一个月的年份和月份
  function getOtherYearAndMonth(year, month, type) {
    let otherYear = year;
    let otherMonth = month;
    if (type == "front") {
      if (otherMonth > 1) {
        otherMonth = otherMonth - 1;
      } else {
        otherMonth = 12;
        otherYear = otherYear - 1;
      }
    }
    if (type == "next") {
      if (otherMonth < 12) {
        otherMonth = otherMonth + 1;
      } else {
        otherMonth = 11;
        otherYear = otherYear + 1;
      }
    }
    return {
      otherYear,
      otherMonth,
    };
  }

  // 获取某个月份的前一个月有多少天
  function getFrontMonthDays(year, month) {
    let forntYear = year;
    let forntMonth = month;
    if (curMonth > 1) {
      forntMonth = month - 1;
    } else {
      forntMonth = 12;
      forntYear = forntYear - 1;
    }
    const frontDays = getDaysInMonth(forntYear, forntMonth);
    return frontDays;
  }

  // 获取某月有多少天
  function getDaysInMonth(year, month) {
    // month参数是从0开始的，所以要减去1
    const date = new Date(year, month - 1, 1);
    date.setMonth(date.getMonth() + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
  }

  // 获取某月的1号是星期几
  function getStartDayInWeek(year, month) {
    const date = new Date(year, month - 1, 1);
    return date.getDay();
  }

  function changeMonth(arrow) {
    if (arrow == "left") {
      if (curMonth > 1) {
        setCurMonth(curMonth - 1);
      } else {
        setCurMonth(12);
        setCurYear(curYear - 1);
      }
    }
    if (arrow == "right") {
      if (curMonth < 12) {
        setCurMonth(curMonth + 1);
      } else {
        setCurMonth(1);
        setCurYear(curYear + 1);
      }
    }
  }

  return (
    <div className={style.calendarWrapper}>
      <div className={style.optBox}>
        <div
          data-testid="front"
          className={`iconfont icon-arrow-left ${style.optLeft} ${style.arrowBtn}`}
          onClick={() => {
            changeMonth("left");
          }}
        ></div>
        <div className={style.monthTitle}>
          {curYear}年{curMonth}月
        </div>
        <div
         data-testid="next"
          className={`iconfont icon-arrow-right ${style.optRight} ${style.arrowBtn}`}
          onClick={() => {
            changeMonth("right");
          }}
        ></div>
      </div>
      <div className={style.weekBox}>
        {weekList.map((item) => {
          return (
            <div className={style.weekItem} key={item}>
              {item}
            </div>
          );
        })}
      </div>
      <div className={style.contentBox}>
        {daysList.map((item, index) => {
          return (
            <div key={item.date} className={`${style.dayItemBox}`}>
              <div className={`${style.dayItem} ${style.activeDayItem}`}>
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
