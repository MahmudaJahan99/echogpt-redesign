import { useState } from "react";
import ModelDetails from "./ModelDetails";
import ModelModal from "./ModelModal";
import { models, type Model } from "./Models";

const ChatMain = () => {
  const [selectedModel, setSelectedModel] = useState<Model>(models[0]);
  const [isModelModalOpen, setIsModelModalOpen] = useState(true);

  const handleSelectModel = (model: Model) => {
    setSelectedModel(model);
  };

  const handleToggleModal = () => {
    setIsModelModalOpen((prev) => !prev);
  };

  return (
    <div className="w-full relative flex flex-col gap-3 glass border border-border p-4 r-rounded-2xl shadow-card">
      <ModelDetails
        selectedModel={selectedModel}
        isModalOpen={isModelModalOpen}
        onToggleModal={handleToggleModal}
      />

      {isModelModalOpen && (
        <ModelModal
          selectedModel={selectedModel}
          onSelectModel={handleSelectModel}
        />
      )}
      <div className="w-full bg-card flex justify-between gap-3 border rounded-xl transition-all duration-200 border-border">
        <div className="ml-3 mt-3 w-6 h-6 rounded-lg cursor-pointer flex items-center justify-center">
          <svg
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13.06 10.94a5.74 5.74 0 0 1 0 8.13c-2.25 2.24-5.89 2.25-8.13 0-2.24-2.25-2.25-5.89 0-8.13"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10.59 13.41c-2.34-2.34-2.34-6.14 0-8.49 2.34-2.35 6.14-2.34 8.49 0 2.35 2.34 2.34 6.14 0 8.49"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <input
            type="file"
            accept=".pdf, .jpg, .jpeg, .docx"
            style={{ display: "none" }}
          />
        </div>
        <textarea
          rows={1}
          className="custom-scrollbar w-[calc(100%-100px)] resize-none p-3 text-foreground placeholder:text-muted-foreground bg-transparent focus:outline-none"
          placeholder="Ask a question..."
        ></textarea>
        <div className="w-22.5 h-15 flex items-center justify-end gap-2 mr-3">
          <div className="relative inline-block group">
            <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-primary active:scale-[0.95] transition-all duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 15.5c2.21 0 4-1.79 4-4V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5.5c0 2.21 1.79 4 4 4Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4.35 9.65v1.7C4.35 15.57 7.78 19 12 19c4.22 0 7.65-3.43 7.65-7.65v-1.7M10.61 6.43c.9-.33 1.88-.33 2.78 0M11.2 8.55c.53-.14 1.08-.14 1.61 0M12 19v3"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 transform top-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Speech to Text
              <svg
                className="absolute text-foreground h-2 top-full left-1/2 transform -translate-x-1/2"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                // xml:space="preserve"
              >
                <polygon
                  className="fill-current"
                  points="0,0 127.5,127.5 255,0"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="relative inline-block group">
            <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-primary text-white shadow-glow hover:bg-primary-600 active:scale-[0.95] transition-all duration-200">
              <svg
                className="text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="m7.4 6.32 8.49-2.83c3.81-1.27 5.88.81 4.62 4.62l-2.83 8.49c-1.9 5.71-5.02 5.71-6.92 0l-.84-2.52-2.52-.84c-5.71-1.9-5.71-5.01 0-6.92ZM10.11 13.65l3.58-3.59"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 transform top-0 left-1/2 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
              Send
              <svg
                className="absolute text-foreground h-2 top-full left-1/2 transform -translate-x-1/2"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                // xml:space="preserve"
              >
                <polygon
                  className="fill-current"
                  points="0,0 127.5,127.5 255,0"
                ></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMain;
