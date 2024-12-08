import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string; // Для добавления дополнительных классов, если нужно
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`border border-custom-input-border p-1 rounded-md bg-custom-input-bg placeholder-custom-placeholder ${
        className || ""
      }`}
    />
  );
};

export default Input;
