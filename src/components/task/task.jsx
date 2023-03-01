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

  const handleSetPriority = (priority) => {
    // we create a new function that has priority lifted from OptionsList, in this function we call a function with 2 values (task.id and priority) since we need both values. in Main a function of changing priority is described (handleSetPriorityClick)
    onSetPriority(task.id, priority);
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

      {hasPriorityList && (
        <PriorityOptions
          onClick={handleSetPriority}
          className="task__priority-options"
          hasPriorityList={hasPriorityList}
        />
      )}
      {task.priority}
      <div className="task__buttons-wrapper">
        <OptionsButton
          className="task__options-button"
          onClick={handleOptionsButtonClick}
          hasOptionsList={hasOptionsList}
          hasPriorityList={hasPriorityList}
        />
        <DeleteButton className="task__delete-button" onClick={() => onDelete(task.id)} />
      </div>
    </li>
  );
};
