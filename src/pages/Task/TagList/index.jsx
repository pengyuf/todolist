import "./module.scss";
import TextareaWrapper from "@/components/TextareaWrapper";
import TaskListWrapper from "@/components/TaskListWrapper";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TagList() {
  const [listTitle, setListTitle] = useState("标签");
  const { statusType } = useParams();

  useEffect(() => {

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
