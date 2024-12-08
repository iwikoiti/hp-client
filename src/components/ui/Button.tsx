import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  onClick?: () => void; // Функция, вызываемая при клике
  navigateTo?: string; // Путь для навигации (опционально)
  children: React.ReactNode; // Текст или содержимое кнопки
  className?: string; // Дополнительные классы для кнопки
  type?: "button" | "submit" | "reset"; // Тип кнопки
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  navigateTo,
  children,
  className = "",
  type = "button",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-yellow-300 text-black px-2 py-1 rounded-md my-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
