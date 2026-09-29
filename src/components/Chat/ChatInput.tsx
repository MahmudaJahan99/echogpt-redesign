import Hyperlink from "../icons/Hyperlink";
import Mic from "../icons/Mic";
import Send from "../icons/Send";
import Tooltip from "../ui/Tooltip";

const ChatInput = () => {
  return (
    <div className="w-full bg-card flex justify-between gap-3 border rounded-xl transition-all duration-200 border-border">
      {/* **********File Upload********** */}
      <div className="ml-3 mb-3">
        <label
          htmlFor="chat-file-upload"
          className="
            w-10 h-10
            rounded-lg
            cursor-pointer
            flex items-center justify-center
            text-muted-foreground
            hover:bg-muted
            hover:text-primary
            focus-within:outline-none
            focus-within:ring-2
            focus-within:ring-primary/40
            transition-all duration-200
          "
          aria-label="Attach a file"
        >
          <Hyperlink aria-hidden="true" />

          <input
            id="chat-file-upload"
            name="attachment"
            type="file"
            accept=".pdf,.jpg,.jpeg,.docx"
            className="sr-only"
            aria-describedby="file-upload-help"
          />
        </label>

        <span id="file-upload-help" className="sr-only">
          Accepted file types: PDF, JPG, JPEG, and DOCX.
        </span>
      </div>

      {/* **********Message Input********** */}
      <div className="flex-1">
        <label htmlFor="chat-message" className="sr-only">
          Message
        </label>

        <textarea
          id="chat-message"
          name="message"
          rows={1}
          placeholder="Ask a question..."
          className="
            custom-scrollbar
            w-full
            resize-none
            p-3
            text-foreground
            placeholder:text-muted-foreground
            bg-transparent
            focus:outline-none
          "
        />
      </div>

      {/* **********Actions********** */}
      <div className="w-22.5 h-15 flex items-center justify-end gap-2 mr-3">
        {/* Speech to Text */}
        <Tooltip text="Speech to Text" leftOffset="-left-8.75">
          <button
            type="button"
            aria-label="Speech to text"
            className="
              w-10 h-10
              rounded-full
              cursor-pointer
              flex items-center justify-center
              text-muted-foreground
              hover:bg-muted
              hover:text-primary
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              active:scale-[0.95]
              transition-all duration-200
            "
          >
            <Mic aria-hidden="true" />
          </button>
        </Tooltip>

        {/* Send */}
        <Tooltip text="Send message" leftOffset="-left-8.75">
          <button
            type="submit"
            aria-label="Send message"
            className="
              w-10 h-10
              rounded-full
              cursor-pointer
              flex items-center justify-center
              bg-primary
              text-white
              shadow-glow
              hover:bg-primary-600
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/40
              active:scale-[0.95]
              transition-all duration-200
            "
          >
            <Send aria-hidden="true" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default ChatInput;
