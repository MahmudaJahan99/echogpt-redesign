import CheckMark from "../icons/CheckMark";

interface PaymentOptionProps {
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  logo: string;
  logoAlt: string;
  label: string;
}
const PaymentOption = ({
  value,
  selectedValue,
  onSelect,
  logo,
  logoAlt,
  label,
}: PaymentOptionProps) => {
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      aria-pressed={isSelected}
      className={`w-full flex items-center justify-between p-4 border rounded-xl transition-all duration-200 ${
        isSelected
          ? "border-primary bg-primary/10"
          : "border-border bg-card hover:bg-muted"
      }`}
    >
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt={logoAlt}
          loading="lazy"
          width="500"
          height="500"
          className="h-10 w-10"
        />

        <span className="text-foreground font-medium">{label}</span>
      </div>

      {isSelected && (
        <div className="h-5 w-5 rounded-md bg-primary flex items-center justify-center text-white text-xs">
          <CheckMark />
        </div>
      )}
    </button>
  );
};

export default PaymentOption;
