import Button from ".";
import ButtonProps from "./types";

function IconButton({
  children,
  className,
  iconName,
  disabled,
  onClick,
  ...rest
}: ButtonProps) {
  const btnStyles =
    "text-slate-200 bg-slate-900 dark:bg-slate-600 dark:highlight-white/20 font-semibold";
  const btnInteractions = "hover:bg-slate-500 dark:hover:bg-slate-400";
  const themeStyles = "dark:highlight-white/20";
  const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles;
  const disabledStyles = btnStyles + " " + themeStyles;

  return (
    <Button
      className={`${disabled ? disabledStyles : defaultStyles} ${
        className ? className : ""
      }`}
      onClick={onClick}
      iconName={iconName}
      disabled={disabled}
      {...rest}
    >
      {iconName}
      {children}
    </Button>
  );
}

export default IconButton;
