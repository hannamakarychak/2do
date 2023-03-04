import classNames from "classnames";
import { useState } from "react";
import { DeleteButton } from "../delete-button/delete-button";
import { PriorityPicker } from "../priority-picker/priority-picker";
import "./task.scss";

export const Task = ({ task, onDone, onDelete, className, onSetPriority, onChange }) => {
  const handlePriorityPick = (value) => {
    onSetPriority(task.id, value);
  };

  const [isInput, setIsInput] = useState(false);

  const handleLabelDblClick = () => {
    setIsInput(!isInput);
  };

  const handleInputChange = (text, taskId) => {
    onChange(text, taskId);
  };

  return (
    <li key={task.id} className={classNames("task", className)}>
      <input
        className="task__checkbox"
        type="checkbox"
        id={`task-input-${task.id}`}
        onClick={() => onDone(task.id)}
      />
      {isInput ? (
        <input
          className="task__input"
          value={task.text}
          onChange={(e) => handleInputChange(e.target.value, task.id)}
        />
      ) : (
        <label
          onDoubleClick={handleLabelDblClick}
          htmlFor={`task-input-${task.id}`}
          className={classNames({
            task__label: true,
            "task__label--completed": task.isDone,
          })}
        >
          {task.text}
        </label>
      )}

      <PriorityPicker
        className="task__priority-picker"
        value={task.priority}
        onChange={handlePriorityPick}
      />
      <DeleteButton className="task__delete-button" onClick={() => onDelete(task.id)} />
    </li>
  );
};
