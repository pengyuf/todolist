import "./module.scss";
import TextareaWrapper from "@/components/TextareaWrapper";
import TaskListWrapper from "@/components/TaskListWrapper";

export default function Inbox() {
  return (
    <div className="task-root-wrapper">
      <div className="task-root-list">
        <TaskListWrapper listTitle="收集箱" />
      </div>
      <div className="task-root-textarea">
        <TextareaWrapper />
      </div>
    </div>
  );
}
