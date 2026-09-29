import Hyperlink from "../icons/Hyperlink";
import Mic from "../icons/Mic";
import Send from "../icons/Send";
import Tooltip from "../ui/Tooltip";

const ChatInput = () => {
  return (
    <div className="w-full bg-card flex justify-between gap-3 border rounded-xl transition-all duration-200 border-border">
      <div className="ml-3 mt-3 w-6 h-6 rounded-lg cursor-pointer flex items-center justify-center">
        <Hyperlink />
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
          {/* Mic Tooltip */}
          <Tooltip
            children={
              <button
                type="button"
                aria-label="Speech to Text"
                className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-primary active:scale-[0.95] transition-all duration-200"
              >
                <Mic />
              </button>
            }
            text="Speech to Text"
            leftOffset="-left-8.75"
          />
        </div>

        <div className="relative inline-block group">
          <Tooltip
            children={
              <button
                type="button"
                aria-label="Send message"
                className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-primary text-white shadow-glow hover:bg-primary-600 active:scale-[0.95] transition-all duration-200"
              >
                <Send />
              </button>
            }
            text="Speech to Text"
            leftOffset="-left-8.75"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
