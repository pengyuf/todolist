import "./module.scss";
import TextareaWrapper from "@/components/TextareaWrapper";
import TaskListWrapper from "@/components/TaskListWrapper";

export default function Tomorrow() {
  return (
    <div className="task-root-wrapper">
      <div className="task-root-list">
        <TaskListWrapper listTitle="明天" />
      </div>
      <div className="task-root-textarea">
        <TextareaWrapper />
      </div>
    </div>
  );
}
