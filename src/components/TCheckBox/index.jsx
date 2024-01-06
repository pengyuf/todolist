import { useEffect, useState } from "react";
import style from "./index.module.scss";

export default function CheckBox({ clickTrigger, status = "" }) {
  const [curClass, SetCurClass] = useState("");

  useEffect(() => {
    if (status == "") {
      SetCurClass("");
    }
    if (status == "finish") {
      SetCurClass(style.check_box_finish);
    }
    if (status == "cancel") {
      SetCurClass(style.check_box_cancel);
    }
  }, [status]);

  return (
    <div
      className={`${style.check_box} ${curClass}`}
      onClick={() => clickTrigger(status)}
    ></div>
  );
}