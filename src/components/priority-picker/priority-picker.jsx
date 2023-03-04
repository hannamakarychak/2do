import classNames from "classnames";
import { useEffect, useState, useRef } from "react";
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

  const wrapperRef = useRef(null);

  const handleChange = (newValue) => {
    onChange(newValue);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    // Alert if clicked on outside of element
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(!isOpen);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, isOpen]);

  const selectedPriority = PRIORITIES.find((item) => value === item.value);

  return (
    <div className={classNames("priority-picker", className)} ref={wrapperRef}>
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
