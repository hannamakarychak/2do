import { Task } from "../task/task";
import "./list.scss";

export const List = ({ tasks, onDone, onDelete, onSetPriority, onChange }) => {
  // const tasks = useContext(TasksContext);

  // console.log(TasksContext);
  return (
    <ul className="list">
      {tasks.map((task) => {
        return (
          <Task
            className="list__item"
            task={task}
            onDone={onDone}
            onDelete={onDelete}
            onSetPriority={onSetPriority}
            onChange={onChange}
            key={task.id}
          />
        );
      })}
    </ul>
  );
};
