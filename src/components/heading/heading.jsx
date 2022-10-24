import classNames from "classnames";

import "./heading.scss";

export const Heading = ({ text, isSecondary, className }) => {
  if (isSecondary) {
    return (
      <h2
        className={classNames("heading", className, {
          "heading--secondary": isSecondary,
        })}
      >
        {text}
      </h2>
    );
  }
  return <h1 className={classNames("heading", className)}>{text}</h1>;
};
