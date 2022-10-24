import classNames from "classnames";
import "./button.scss";

export const Button = ({ text, className, onClick, disabled }) => {
  //onClick calls onClick function because function call is imbedded in input tag
  const classes = classNames("button", className);
  // console.log({ text });
  return (
    <button className={classes} type="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
