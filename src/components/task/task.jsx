import classNames from "classnames";
import "./task.scss";

export const Task = ({ task, onDone, className }) => {
  // onDone(task.id) we use to lift up id of the clicked element (it is being lifted up to Main). Callback in onClick calls onDone function
  return (
    <li key={task.id} className={classNames("task", className)}>
      <label
        htmlFor={task.id}
        className={classNames({
          task__label: true,
          "task__label--completed": task.isDone,
        })}
      >
        {task.text}
      </label>
      <input
        className="task__checkbox"
        type="checkbox"
        id={task.id}
        name={task.text}
        onClick={() => onDone(task.id)}
      />
    </li>
  );
};
