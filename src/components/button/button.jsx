import classNames from "classnames";

export const Button = ({ text, className, onClick }) => {
  //onClick calls onClick function because function call is imbedded in input tag
  const classes = classNames("button", className);
  // console.log({ text });
  return (
    <button className={classes} type="button" onClick={onClick}>
      {text}
    </button>
  );
};
