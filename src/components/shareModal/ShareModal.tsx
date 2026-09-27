import Close from "../icons/Close";
import Hyperlink from "../icons/Hyperlink";
import Border from "../ui/Border";
import ShareLink from "./ShareLink";

const ShareModal = () => {
  return (
    <div className="hidden fixed h-screen w-screen top-0 left-0 right-0 bottom-0 grid place-items-center z-1000000000 bg-black/50 backdrop-blur-sm px-4">
      <div className="text-foreground border border-border rounded-2xl w-[95%] lg:w-112.5 flex flex-col bg-card shadow-card animate-fade-up">
        {/* Modal Header */}
        <div className="w-full flex items-center justify-between gap-5 p-5 border-b border-border">
          <div className="text-lg font-semibold tracking-tight">
            Share Website
          </div>
          <button
            aria-label="Close"
            className="w-11 h-11 -mr-2 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Close />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-5 w-full">
          <div className="w-full flex flex-col gap-1.5">
            <ShareLink imageURL="/facebook.svg" label="Facebook" />
            <ShareLink imageURL="/linkedin.svg" label="LinkeIn" />
            <ShareLink imageURL="/whatsapp.svg" label="WhatsApp" />
            <ShareLink imageURL="/telegram.svg" label="Telegram" />

            <Border/>
            <ShareLink icon={<Hyperlink />} label="Copy Link" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
