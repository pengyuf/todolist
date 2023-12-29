import axios from "axios";
import style from "./index.module.scss";

export default function Calendar() {
  function testMongose() {
    axios
      .post("http://localhost:3000/users/add", {
        username: "peng",
        password: "ssss",
      })
      .then((res) => {
        debugger;
        console.log(res);
      });
  }

  return (
    <div className={style.calendarWrapper} onClick={testMongose}>
      日历
    </div>
  );
}
