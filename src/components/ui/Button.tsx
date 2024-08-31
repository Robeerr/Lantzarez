// src/components/ui/Button.tsx

import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const buttonClass = classNames(
    "px-4 py-2 rounded-lg font-semibold focus:outline-none",
    {
      "bg-amber-600 text-stone-100 hover:bg-amber-700": variant === "primary",
      "border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-stone-100":
        variant === "outline",
    },
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
