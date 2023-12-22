import { useEffect, useState } from "react";
import "./module.scss";

export default function CheckBox({ clickTrigger, status = "" }) {
  const [curClass, SetCurClass] = useState("");

  useEffect(() => {
    if (status == "") {
      SetCurClass("");
    }
    if (status == "finish") {
      SetCurClass("check-box-finish");
    }
    if (status == "cancel") {
      SetCurClass("check-box-cancel");
    }
  }, [status]);

  return (
    <div
      className={`check-box ${curClass}`}
      onClick={() => clickTrigger(status)}
    ></div>
  );
}
