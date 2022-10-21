import { Task } from "../task/task";
import "./list.scss";

export const List = ({ tasks, onDone }) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return <Task task={task} onDone={onDone} key={task.id} />;
      })}
    </ul>
  );
};
