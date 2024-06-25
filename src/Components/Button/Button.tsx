import { FC, CSSProperties } from "react";
import classes from "./button.module.scss";

interface ButtonProps {
  type: "submit" | "reset" | "button";
  style?: CSSProperties;
  title: string;
  onClick: () => void;
  buttonSize?: "small" | "medium" | "big";
  rounded?: boolean;
  bgColor?: string;
  txtColor?: string;
}

export const Button: FC<ButtonProps> = ({
  type = "submit",
  style,
  title = "",
  onClick,
  buttonSize = "medium",
  rounded = false,
  bgColor,
  txtColor,
}) => {
  return (
    <button
      className={`${classes.root} ${classes[buttonSize]} ${rounded && classes.rounded}`}
      type={type}
      style={{
        ...style,
        backgroundColor: bgColor,
        color: txtColor,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
