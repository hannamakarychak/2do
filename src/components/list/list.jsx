import { Task } from "../task/task";
import "./list.scss";

export const List = ({ tasks, onDone }) => {
  return (
    <ul className="list">
      {tasks.map((task) => {
        return <Task className="list__item" task={task} onDone={onDone} key={task.id} />;
      })}
    </ul>
  );
};
