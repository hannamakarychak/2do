import "./counter.scss";

export const Counter = ({ activeTasks }) => {
  return (
    <div className="counter">
      {activeTasks}
      {activeTasks > 1 ? " tasks" : " task"}
    </div>
  );
};
