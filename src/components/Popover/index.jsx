import { useEffect, useState } from "react";
import "./module.scss";

export default function Popover({ children, visible, top, left }) {
  const [style, setStyle] = useState({
    display: "block",
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const nextStyle = Object.assign({}, style);
    nextStyle.display = visible ? "block" : "none";
    nextStyle.top = top + "px";
    nextStyle.left = left + "px";
    setStyle(nextStyle);
  }, [visible,top,left]);

  return visible ? (
    <div className="popover" style={style}>
      {children}
    </div>
  ) : (
    <></>
  );
}
