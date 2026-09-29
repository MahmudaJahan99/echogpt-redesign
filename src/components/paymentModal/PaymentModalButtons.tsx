interface ModalActionButtonProps {
  label: string;
  onClick: () => void;
  variant: "close" | "submit";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const ModalActionButton = ({
  label,
  onClick,
  variant,
  type = "button",
  disabled = false,
}: ModalActionButtonProps) => {
  const baseClasses =
    "select-none h-11 px-5 min-w-28 justify-center items-center text-center rounded-xl font-medium transition-all duration-200 active:scale-[0.98] flex cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    close:
      "border border-destructive text-destructive bg-destructive/10 hover:bg-destructive hover:text-white",

    submit: "text-white shadow-glow bg-primary hover:bg-primary-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {label}
    </button>
  );
};

export default ModalActionButton;
