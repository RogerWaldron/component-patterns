import Button from ".";
import ButtonProps from "./types";

function PrimaryButton({
  children,
  className,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const btnStyles = "font-bold text-blue-200 bg-blue-700 dark:bg-blue-600";
  const btnInteractions = "hover:bg-blue-800 dark:hover:bg-blue-400";
  const themeStyles = "dark:highlight-white/20";
  const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles;
  const disabledStyles = btnStyles + " " + themeStyles;

  return (
    <Button
      className={`${disabled ? disabledStyles : defaultStyles} ${
        className ? className : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
