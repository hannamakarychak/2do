import classNames from "classnames";
import "./options-button.scss";

export const OptionsButton = ({ className, onClick, hasOptionsList }) => {
  return (
    <button
      type="button"
      className={classNames("options-button", className)}
      onClick={() => onClick(!hasOptionsList)}
    >
      <div className="options-button__dot"></div>
      <div className="options-button__dot"></div>
      <div className="options-button__dot"></div>
    </button>
  );
};
