import "./counter.scss";

export const Counter = ({ activeTasks }) => {
  return <div className="counter">{activeTasks} tasks left</div>;
};
