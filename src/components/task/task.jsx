import classNames from "classnames";
import "./task.scss";

export const Task = ({ task, onDone }) => {
  // onDone(task.id) we use to lift up id of the clicked element (it is being lifted up to Main). Callback in onClick calls onDone function
  return (
    <li key={task.id} className="task">
      <input type="checkbox" id={task.id} name={task.text} onClick={() => onDone(task.id)} />
      <label
        htmlFor={task.id}
        className={classNames({
          task__label: true,
          "task__label--completed": task.isDone,
        })}
      >
        {task.text}
      </label>
    </li>
  );
};
