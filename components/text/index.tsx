import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "sm" | "lg" | "xl" | "2xl";
  color?: "primary" | "secondary" | "white" | "black" | "brand";
  bgColor?: "white" | "black" | "brand";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = "div">({
  size,
  color,
  bgColor,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";

  console.log(size);

  return (
    <div>
      <Component
        className={`${size ? `text-${size}` : ""} ${
          color ? `text-${color}` : ""
        } ${bgColor ? `bg-${bgColor}` : ""}`}
      >
        {children}
      </Component>
    </div>
  );
};

export default Text;
