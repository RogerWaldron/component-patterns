import Button from ".";
import ButtonProps from "./types";

function PlayfulButton({
  children,
  className,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const btnStyles = "font-semibold rounded-full";
  const btnInteractions = "hover:bg-slate-500 dark:hover:bg-slate-400";
  const themeStyles =
    "text-slate-200 bg-slate-900 dark:bg-slate-600 dark:highlight-white/20";
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

export default PlayfulButton;
