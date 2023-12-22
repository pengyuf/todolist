import "./module.scss";

export function ProgressCircle({
  progressColor = "rgb(71, 114, 250)",
  width = 10,
  size = 200,
  progress = 0,
}) {
  const r = size / 2 - width / 2;

  const dash2 = 3.14 * size;

  return (
    <svg
      className="progress-circle"
      style={{ width: size + "px", height: size + "px" }}
    >
      <circle
        stroke="#ccc"
        cx={`${size / 2 + "px"}`}
        cy={`${size / 2 + "px"}`}
        r={`${r + "px"}`}
        strokeWidth={`${width + "px"}`}
      />
      <circle
        cx={`${size / 2 + "px"}`}
        cy={`${size / 2 + "px"}`}
        r={`${r + "px"}`}
        stroke={`${progressColor}`}
        strokeWidth={`${width + "px"}`}
        strokeDasharray={`${progress} ${dash2}`}
      />
    </svg>
  );
}
