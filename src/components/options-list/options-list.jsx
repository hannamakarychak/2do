import classNames from "classnames";
import { Button } from "../button/button";
import "./options-list.scss";

export const OptionsList = ({ className, hasHighPriority, onClick }) => {
  return (
    <ul className={classNames(className, "task__options-list")}>
      <li className="options-list__item">
        <Button
          className="options-list__button"
          text={hasHighPriority ? "Reset Priority" : "Set Priority"}
          onClick={() => onClick(!hasHighPriority)}
        />
      </li>
      {/* <li className="options-list__item">
        <Button className="options-list__button" text="Remind me" onClick={onClick} />
      </li> */}
    </ul>
  );
};
