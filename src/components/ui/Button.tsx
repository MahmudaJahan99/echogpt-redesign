import type { ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ text, icon, onClick, type = "button" }: ButtonProps) => {
  return (
    <div className="w-full px-4 mb-3">
      <button
        type={type}
        onClick={onClick}
        className="w-full justify-center items-center cursor-pointer flex gap-3 rounded-xl bg-primary text-white h-11 px-5 font-medium shadow-glow-sm hover:bg-primary-600 active:scale-[0.98] transition-all duration-200"
      >
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
