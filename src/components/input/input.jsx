import classNames from "classnames";
import { useState } from "react";
import { Button } from "../button/button";
import "./input.scss";

export const Input = ({ name, id, placeholder, className, type, onCreate }) => {
  const [value, setValue] = useState(""); // we use state to make input controlled and add value there manually

  const handleInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleButtonClick = () => {
    onCreate(value); // we call onCreate function (which is actually handleCreate) with new value so the value is lifted up to Main component
    setValue(""); // we set empty string so that once new task is added to the list, input is cleared
  };

  const handleEnterPress = (evt) => {
    if (evt.key === "Enter" && value !== "") {
      onCreate(value); // same as above happens on Enter press
      setValue("");
    }
  };

  return (
    <div className="input">
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        className={classNames("input__element", className)}
        type={type}
        value={value}
        onChange={handleInputChange} // we set new value from evt.target.value.
        onKeyDown={handleEnterPress} // we call handleEnterPress once onKeyDown action happens, and below we call handleButtonClick once click happens
      />
      <Button
        className="input__button"
        disabled={value === ""}
        onClick={handleButtonClick}
        text={value !== "" ? "add" : ""}
      />
    </div>
  );
};
