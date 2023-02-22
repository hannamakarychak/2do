import classNames from "classnames";
import { Button } from "../button/button";
import "./options-list.scss";

export const OptionsList = ({ className, hasPriority, onClick, hasPriorityList }) => {
  return (
    <ul className={classNames(className, "task__options-list")}>
      <li className="options-list__item">
        <Button
          className="options-list__button"
          text={hasPriority !== "" ? "Reset Priority" : "Set Priority"}
          onClick={() => onClick(!hasPriorityList)}
        />
      </li>
    </ul>
  );
};
