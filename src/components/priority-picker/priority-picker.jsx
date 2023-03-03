import classNames from "classnames";
import { useState } from "react";
import "./priority-picker.scss";

export const PriorityPicker = ({ className, value, onChange }) => {
  const PRIORITIES = [
    {
      text: "High",
      value: "high",
    },
    {
      text: "Medium",
      value: "medium",
    },
    {
      text: "Low",
      value: "low",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newValue) => {
    onChange(newValue);
    setIsOpen(false);
  };

  const selectedPriority = PRIORITIES.find((item) => value === item.value);

  return (
    <div className={classNames("priority-picker", className)}>
      {isOpen && (
        <ul className="priority-picker__options">
          {PRIORITIES.map((item) => {
            return (
              <li
                key={item.value}
                className={classNames(
                  "priority-picker__item",
                  `priority-picker__item--${item.value}`
                )}
                onClick={() => handleChange(item.value)}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      )}
      <button
        className={classNames("priority-picker__label", `priority-picker__label--${value}`)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedPriority.text}
      </button>
    </div>
  );
};
