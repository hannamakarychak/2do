import { Button } from "../button/button";

export const PriorityOptions = ({ onClick }) => {
  const Priorities = [
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

  const priorityItem = Priorities.map((item, index) => {
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

  return <ul className="priority-options">{priorityItem}</ul>;
};
