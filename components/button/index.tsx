import { MouseEvent } from "react";
import ButtonProps from "./types";

function Button({
  children,
  className,
  disabled = false,
  onClick = () => {},
  ...rest
}: ButtonProps) {
  const defaultStyles =
    "flex items-center justify-center h-12 px-6 shadow-md focus:cursor-pointer disabled:text-grey-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-md";

  return (
    <button
      /** Handle click on Button or Link */
      onClick={(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (disabled) {
          return;
        }
        event.preventDefault();
        onClick();
      }}
      className={`${defaultStyles} ${className ? className : ""}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
