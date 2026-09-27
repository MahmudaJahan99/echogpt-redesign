import type { ReactNode } from "react";
import Share from "../icons/Share";

interface shareLinkProps {
  imageURL?: string;
  label: string;
  icon?: ReactNode;
}

const ShareLink = ({ imageURL, label, icon }: shareLinkProps) => {
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
          icon
        )}
        {label}
      </div>
      <button
        aria-label={`Share on ${label}`}
        className="flex items-center gap-2.5 w-11 h-11 justify-center rounded-xl cursor-pointer text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-200"
      >
        <Share />
      </button>
    </div>
  );
};

export default ShareLink;
