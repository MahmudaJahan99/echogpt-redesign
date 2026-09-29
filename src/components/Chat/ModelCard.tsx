import type { Capability } from "./models";
import Reasoning from "../icons/Reasoning";
import TextInput from "../icons/TextInput";
import Vision from "../icons/Vision";

interface ModelCardProps {
  name: string;
  description: string;
  imageSrc: string;
  capabilities?: (Capability | string)[];
  badge?: "Limited" | "Pro" | string;
  onClick?: () => void;
  selected?: boolean;
}

const renderCapabilityIcon = (cap: Capability | string) => {
  switch (cap) {
    case "Text input":
      return <TextInput key="text" />;
    case "Reasoning":
      return <Reasoning key="reasoning" />;
    case "Vision":
      return <Vision key="vision" />;
    default:
      return null;
  }
};

const ModelCard = ({
  name,
  description,
  imageSrc,
  capabilities = [],
  badge,
  onClick,
  selected = false,
}: ModelCardProps) => {
  const hasCapabilities = capabilities && capabilities.length > 0;
  const hasBadge = Boolean(badge);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`w-full p-3 rounded-xl cursor-pointer text-left transition-all duration-200 hover:bg-muted border border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        selected ? "border-primary bg-muted" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
        {/* Model Image */}
        <img
          alt={name}
          loading="lazy"
          width={20}
          height={20}
          decoding="async"
          className="overflow-hidden rounded-full border border-border shrink-0"
          src={imageSrc}
          style={{ color: "transparent" }}
        />
        {/* Model Name */}
        <span className="min-w-0 truncate">{name}</span>

        {/* Capabilities and Badge */}
        {(hasCapabilities || hasBadge) && (
          <span className="ml-auto flex items-center gap-2 shrink-0">
            {/* Capabilities */}
            {hasCapabilities && (
              <span
                aria-label={`Capabilities: ${capabilities.join(", ")}`}
                className="inline-flex items-center gap-1 text-muted-foreground"
              >
                {capabilities
                  .slice(0, 2)
                  .map((cap) => renderCapabilityIcon(cap))}
                {capabilities.length > 2 && (
                  <span className="text-[10px] leading-none">
                    +{capabilities.length - 2}
                  </span>
                )}
              </span>
            )}
            {/* Badge */}
            {hasBadge && (
              <span
                className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                  badge === "Limited"
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {badge}
              </span>
            )}
          </span>
        )}
      </div>

    {/* Model Description */}
      <div className="text-[11px] font-medium mt-2 text-muted-foreground leading-relaxed">
        {description}
      </div>
    </button>
  );
};

export default ModelCard;
