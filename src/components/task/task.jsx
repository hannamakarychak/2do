import classNames from "classnames";
import { DeleteButton } from "../delete-button/delete-button";
import { PriorityPicker } from "../priority-picker/priority-picker";
import "./task.scss";

export const Task = ({ task, onDone, onDelete, className, onSetPriority }) => {
  const handlePriorityPick = (value) => {
    onSetPriority(task.id, value);
  };

  return (
    <li key={task.id} className={classNames("task", className)}>
      <input
        className="task__checkbox"
        type="checkbox"
        id={task.id}
        name={task.text}
        onClick={() => onDone(task.id)}
      />
      <label
        htmlFor={task.id}
        className={classNames({
          task__label: true,
          "task__label--completed": task.isDone,
        })}
      >
        {task.text}
      </label>
      <PriorityPicker className="toADD" value={task.priority} onChange={handlePriorityPick} />
      <div className="task__buttons-wrapper">
        <DeleteButton className="task__delete-button" onClick={() => onDelete(task.id)} />
      </div>
    </li>
  );
};
