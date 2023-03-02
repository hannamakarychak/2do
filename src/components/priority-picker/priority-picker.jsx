import classNames from "classnames";
import { useState } from "react";

export const PriorityPicker = ({ className, value, onChange }) => {
  const PRIORITIES = [
    {
      text: "High ⬆",
      value: "high",
    },
    {
      text: "Medium ➡",
      value: "medium",
    },
    {
      text: "Low ⬇",
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
    <div className="priority-picker">
      {isOpen ? (
        <ul className="priority-picker__options">
          {PRIORITIES.map((item) => {
            return (
              <li
                key={item.value}
                className="priority-picker__item"
                onClick={() => handleChange(item.value)}
              >
                {item.text}
              </li>
            );
          })}
        </ul>
      ) : (
        <button
          className={classNames(className, "priority-picker__label")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedPriority.text}
        </button>
      )}
    </div>
  );
};
