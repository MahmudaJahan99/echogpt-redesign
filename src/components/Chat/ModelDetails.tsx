import { useState } from "react";
import DropdownArrow from "../icons/DropdownArrow";
import Connector from "../icons/Connector";
import type { Model } from "../../data/models";
import Tooltip from "../ui/Tooltip";
import UpgradeModal from "../upgradeModal/UpgradeModal";

interface ModelDetailsProps {
  selectedModel?: Model;
  isModalOpen?: boolean;
  onToggleModal?: () => void;
}

const ModelDetails = ({
  selectedModel,
  isModalOpen = false,
  onToggleModal,
}: ModelDetailsProps) => {
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  const modelName = selectedModel?.name || "EchoGPT";
  const modelImage = selectedModel?.imageSrc || "/logo.svg";

  return (
    <div className="w-full flex items-center gap-5 justify-between">
      <div className="relative flex items-center gap-2.5">
        {/* Model Selection Button */}
        <button
          id="model-selection-button"
          type="button"
          onClick={onToggleModal}
          aria-expanded={isModalOpen}
          aria-haspopup="dialog"
          aria-label={`Select model, currently ${modelName}`}
          className="flex items-center gap-2 cursor-pointer rounded-full pl-1 pr-3 py-1 hover:bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-left select-none"
        >
          {/* Current model image */}
          <img
            width={32}
            height={32}
            className="rounded-full ring-1 ring-border object-cover shrink-0"
            src={modelImage}
            style={{ color: "transparent" }}
            alt={modelName}
            loading="lazy"
            aria-hidden="true"
          />

          {/* Current model name */}
          <div className="h-full flex items-center justify-center text-sm font-medium text-foreground">
            {modelName}
          </div>

          <DropdownArrow className={isModalOpen ? "rotate-180" : "rotate-0"} />
        </button>

        <div className="w-px h-5 bg-border"></div>

        {/* Connectors */}
        <div className="relative inline-block group">
          <Tooltip
            children={
              <button
                type="button"
                aria-label="Connectors"
                className="flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200"
              >
                <Connector />
              </button>
            }
            text="Connectors"
            leftOffset="-left-8.75"
          />
        </div>

        <div className="w-px h-5 bg-border"></div>

        {/* Upgrade button */}
        <div className="relative inline-block group">
          <Tooltip
            children={
              <button
                type="button"
                aria-label="Upgrade to pro"
                aria-expanded={isUpgradeOpen}
                aria-haspopup="dialog"
                onClick={() => setIsUpgradeOpen((prev) => !prev)}
                className="flex items-center justify-center w-8 h-8 rounded-full text-muted-foreground hover:text-primary hover:bg-muted transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  alt="up i"
                  loading="lazy"
                  width="20"
                  height="20"
                  aria-hidden="true"
                  className="cursor-pointer"
                  src="upgrade.svg"
                  style={{ color: "transparent" }}
                />
              </button>
            }
            text="Upgrade"
            leftOffset="-left-8.75"
          />
        </div>

        {/* Upgrade Modal */}
        {isUpgradeOpen && (
          <UpgradeModal onClose={() => setIsUpgradeOpen(false)} />
        )}
      </div>
    </div>
  );
};

export default ModelDetails;
