import "./module.scss";
import TextareaWrapper from "@/components/TextareaWrapper";
import TaskListWrapper from "@/components/TaskListWrapper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function StatusList() {
  const [listTitle, setListTitle] = useState("");
  const { statusType } = useParams();

  useEffect(() => {
    if (statusType == "completed") {
      setListTitle("已完成");
    }
    if (statusType == "abandon") {
      setListTitle("已放弃");
    }
    if (statusType == "trash") {
      setListTitle("垃圾桶");
    }
  }, [statusType]);

  return (
    <div className="task-root-wrapper">
      <div className="task-root-list">
        <TaskListWrapper listTitle={listTitle} />
      </div>
      <div className="task-root-textarea">
        <TextareaWrapper />
      </div>
    </div>
  );
}
