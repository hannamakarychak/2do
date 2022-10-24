import "./filters.scss";
import { Button } from "../button/button";

const FILTERS = ["All", "Active", "Completed"];

export const Filters = ({ onClick }) => {
  const listItems = FILTERS.map((filter) => {
    return (
      <li className="filters__item" key={filter}>
        <Button text={filter} className="filters__button" onClick={() => onClick(filter)} />
      </li>
    );
  });
  return (
    <div className="filters">
      <ul className="filters__list">{listItems}</ul>
    </div>
  );
};
