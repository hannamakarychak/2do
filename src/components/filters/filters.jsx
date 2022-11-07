import "./filters.scss";
import { Button } from "../button/button";
import classNames from "classnames";

const FILTERS = ["ALL", "ACTIVE", "COMPLETED"];

export const Filters = ({ onClick, activeFilter }) => {
  const listItems = FILTERS.map((filter) => {
    return (
      <li className="filters__item" key={filter}>
        <Button
          text={filter.toLowerCase()}
          className={classNames(
            "filters__button",
            filter === activeFilter ? "filters__button--active" : ""
          )}
          onClick={() => onClick(filter)}
        />
      </li>
    );
  });
  return <ul className="filters">{listItems}</ul>;
};
