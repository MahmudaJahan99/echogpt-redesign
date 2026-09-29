import Hyperlink from "../icons/Hyperlink";
import Mic from "../icons/Mic";
import Send from "../icons/Send";

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
          {/* Mic Icon */}
          <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-primary active:scale-[0.95] transition-all duration-200">
            <Mic />
          </div>

          {/* Mic Tooltip */}
          <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 transform top-0 -left-8.75 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
            Speech to Text
            <svg
              className="absolute text-foreground h-2 top-full left-1/2 transform -translate-x-1/2"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              ></polygon>
            </svg>
          </div>
        </div>

        <div className="relative inline-block group">
          {/* Send icon */}
          <div className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-primary text-white shadow-glow hover:bg-primary-600 active:scale-[0.95] transition-all duration-200">
            <Send />
          </div>

          {/* Send Tooltip */}
          <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 transform top-0 -left-3 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
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
  );
};

export default ChatInput;
