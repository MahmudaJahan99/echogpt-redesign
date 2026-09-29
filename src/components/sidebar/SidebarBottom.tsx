import Settings from "../icons/Settings";
import Share from "../icons/Share";
import LightMode from "../icons/LightMode";
import Website from "../icons/Website";
import Tooltip from "../ui/Tooltip";
import type { RefObject } from "react";

interface SidebarBottomProps {
  openSettings: () => void;
  openShare: () => void;
  isSettingsOpen: boolean;
  isShareOpen: boolean;
  settingsButtonRef: RefObject<HTMLButtonElement | null>;
  shareButtonRef: RefObject<HTMLButtonElement | null>;
}

const SidebarBottom = ({
  openSettings,
  openShare,
  isSettingsOpen,
  isShareOpen,
  settingsButtonRef,
  shareButtonRef,
}: SidebarBottomProps) => {
  return (
    <div className="shrink-0 sticky left-0 bottom-0 w-full h-12 border-t border-border px-5 flex items-center justify-around bg-surface dark:bg-surface">
      <Tooltip
        children={
          <a
            target="_blank"
            href="https://appifydevs.com"
            aria-label="Visit AppifyDevs website"
            rel="noopener noreferrer"
          >
            <Website aria-hidden="true" />
          </a>
        }
        text="Website"
        leftOffset="-left-7"
      />

      <Tooltip
        children={
          <button
            ref={shareButtonRef}
            type="button"
            aria-label="Open share option"
            aria-haspopup="dialog"
            aria-expanded={isShareOpen}
            onClick={openShare}
            className="flex items-center justify-center rounded-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Share aria-hidden="true" />
          </button>
        }
        text="Share"
        leftOffset="-left-5"
      />

      <Tooltip
        children={
          <button
            ref={settingsButtonRef}
            type="button"
            aria-label="Open settings"
            aria-haspopup="dialog"
            aria-expanded={isSettingsOpen}
            onClick={openSettings}
            className="flex items-center justify-center rounded-xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Settings aria-hidden="true" />
          </button>
        }
        text="Settings"
        leftOffset="-left-7"
      />

      <Tooltip
        children={
          <button
            type="button"
            aria-label="Toggle light mode"
            className="flex items-center justify-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <LightMode aria-hidden="true" />
          </button>
        }
        text="Light Mode"
        leftOffset="-left-9"
      />
    </div>
  );
};

export default SidebarBottom;
