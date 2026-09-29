import { useState, useRef, useEffect } from "react";
import ModelDetails from "./ModelDetails";
import ModelModal from "./ModelModal";
import { models, type Model } from "./models";
import ChatInput from "./ChatInput";

const ChatMain = () => {
  const [selectedModel, setSelectedModel] = useState<Model>(models[0]);
  const [isModelModalOpen, setIsModelModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle model selection & modal toggle
  const handleSelectModel = (model: Model) => {
    setSelectedModel(model);
    setIsModelModalOpen(false);
  };
  const handleToggleModal = () => {
    setIsModelModalOpen((prev) => !prev);
  };

  // Handle click outside modal to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (modalRef.current?.contains(target)) {
        return;
      }
      const modelButton = document.getElementById("model-selection-button");
      if (modelButton?.contains(target)) {
        return;
      }
      setIsModelModalOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModelModalOpen(false);
      }
    };

    if (isModelModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModelModalOpen]);

  return (
    <div className="w-full relative flex flex-col gap-3 glass border border-border p-4 r-rounded-2xl shadow-card">
      {/* Model Details */}
      <ModelDetails
        selectedModel={selectedModel}
        isModalOpen={isModelModalOpen}
        onToggleModal={handleToggleModal}
      />

      {/* Model Modal */}
      {isModelModalOpen && (
        <ModelModal
          modalRef={modalRef}
          selectedModel={selectedModel}
          onSelectModel={handleSelectModel}
        />
      )}

      {/* Chat Input */}
      <ChatInput />
    </div>
  );
};

export default ChatMain;
