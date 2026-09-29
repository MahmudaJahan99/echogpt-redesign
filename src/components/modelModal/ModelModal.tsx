import type React from "react";
import modelSparkle from "../../assets/images/model-sparkle.svg";
import redRocket from "../../assets/images/red-rocket.svg";
import ModelCards from "./ModelCards";
import type { Model } from "../../data/models";

interface ModelModalProps {
  selectedModel?: Model;
  onSelectModel?: (model: Model) => void;
  modalRef?: React.RefObject<HTMLDivElement | null>;
}

const ModelModal = ({
  selectedModel,
  onSelectModel,
  modalRef,
}: ModelModalProps) => {
  return (
    <div
      ref={modalRef}
      id="model-modal"
      className="absolute left-0 bottom-41.25 grid place-items-center z-1000000000 w-81.75"
    >
      <div className="text-foreground border border-border rounded-2xl py-4 w-full flex flex-col bg-card shadow-card animate-fade-up">
        {/* Heading */}
        <div className="w-full flex items-center gap-5 justify-between px-4">
          <div className="flex items-center gap-1.5 text-sm font-semibold tracking-tight">
            <img
              alt="model"
              width={20}
              height={20}
              src={modelSparkle}
              style={{ color: "transparent" }}
            />
            Models
          </div>

          <div className="h-7 px-3 flex items-center justify-center gap-2 rounded-full bg-primary/10 text-xs font-medium text-primary cursor-pointer hover:bg-primary/20 active:scale-[0.97] transition-all duration-200">
            <img
              alt="red"
              loading="lazy"
              width="12"
              height="15"
              src={redRocket}
              style={{ color: "transparent" }}
            />
            Upgrade
          </div>
        </div>

        {/* Model Selection Options */}
        <div className="w-full max-h-[40vh] sm:max-h-[50vh] flex flex-col gap-2 mt-4 overflow-y-auto custom-scrollbar px-4">
          {/* Default Models */}
          <div>
            <div className="text-xs font-medium mb-2.5 text-muted-foreground">
              Default Model
            </div>
            <div className="w-full h-px bg-border"></div>
          </div>
          <ModelCards
            category="default"
            selectedModelName={selectedModel?.name}
            onSelectModel={onSelectModel}
          />

          {/* Advanced Models */}
          <div className="mt-2.5">
            <div className="text-xs font-medium mb-2.5 text-muted-foreground">
              Advanced Models
            </div>
            <div className="w-full h-px bg-border"></div>
          </div>
          <ModelCards
            category="advanced"
            selectedModelName={selectedModel?.name}
            onSelectModel={onSelectModel}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelModal;
