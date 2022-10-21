import classNames from "classnames";

import "./heading.scss";

const Heading = ({ text, isSecondary }) => {
  if (isSecondary) {
    return (
      <h2 className={classNames({ heading: true, "heading--secondary": isSecondary })}>{text}</h2>
    );
  }
  return <h1 className={classNames({ heading: true })}>{text}</h1>;
};

export default Heading;
