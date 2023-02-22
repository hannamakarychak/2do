import classNames from "classnames";
import { useState } from "react";
import { DeleteButton } from "../delete-button/delete-button";
import { OptionsButton } from "../options-button/options-button";
import { OptionsList } from "../options-list/options-list";
import { PriorityOptions } from "../priority-options/priority-options";
import "./task.scss";

export const Task = ({ task, onDone, onDelete, className, onSetPriority }) => {
  const [hasOptionsList, setHasOptionsList] = useState(false);
  // onDone(task.id) we use to lift up id of the clicked element (it is being lifted up to Main). Callback in onClick calls onDone function
  const [hasPriorityList, setHasPriorityList] = useState(false);

  const handleOptionsButtonClick = (hasOptionsList) => {
    setHasOptionsList(hasOptionsList);
    setHasPriorityList(false);
  };

  const handleSetPriorityClick = (hasPriorityList) => {
    setHasPriorityList(hasPriorityList);
  };

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

      <div className="task__buttons-wrapper">
        <OptionsButton
          className="task__options-button"
          onClick={handleOptionsButtonClick}
          hasOptionsList={hasOptionsList}
          hasPriorityList={hasPriorityList}
        />
        <DeleteButton className="task__delete-button" onClick={() => onDelete(task.id)} />
      </div>
      {hasPriorityList && (
        <PriorityOptions
          onClick={onSetPriority}
          className="task__priority-options"
          hasPriorityList={hasPriorityList}
        />
      )}
      {hasOptionsList && (
        <OptionsList
          className="task__options-list"
          onClick={handleSetPriorityClick}
          hasPriority={task.priority}
          hasPriorityList={hasPriorityList}
        />
      )}
    </li>
  );
};
