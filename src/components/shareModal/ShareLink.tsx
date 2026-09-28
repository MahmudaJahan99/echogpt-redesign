import type { ReactNode } from "react";
import Share from "../icons/Share";
import Hyperlink from "../icons/Hyperlink";

interface ShareLinkProps {
  imageURL?: string;
  label: string;
  icon?: ReactNode;
  onShare: () => void;
}

const ShareLink = ({ imageURL, label, icon, onShare }: ShareLinkProps) => {
  return (
    <div className="w-full flex items-center justify-between text-sm p-2 rounded-xl">
      <div className="flex items-center gap-3 font-medium">
        {imageURL ? (
          <img
            alt={label}
            loading="lazy"
            width="20"
            height="20"
            src={imageURL}
          />
        ) : (
          <span aria-hidden="true">{icon}</span>
        )}
        <span>{label}</span>
      </div>

      <button
        type="button"
        onClick={onShare}
        aria-label={`Share on ${label}`}
        className="flex items-center gap-2.5 w-11 h-11 justify-center rounded-xl cursor-pointer text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {label === "Copy Link" ? (
          <Hyperlink aria-hidden="true" />
        ) : (
          <Share aria-hidden="true" />
        )}
      </button>
    </div>
  );
};

export default ShareLink;
