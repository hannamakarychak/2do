import classNames from "classnames";
import { Button } from "../button/button";
import "./priority-options.scss";

export const PriorityOptions = ({ onClick, className }) => {
  const priorities = [
    {
      text: "high",
      value: "high",
    },
    {
      text: "medium",
      value: "medium",
    },
    {
      text: "low",
      value: "low",
    },
  ];

  const priorityItem = priorities.map((item, index) => {
    return (
      <li className="priority-options__item" key={index}>
        <Button
          className="priority-options__button"
          text={item.text}
          value={item.value}
          onClick={() => onClick(item.value)}
        />
      </li>
    );
  });

  return <ul className={classNames(className, "priority-options")}>{priorityItem}</ul>;
};
