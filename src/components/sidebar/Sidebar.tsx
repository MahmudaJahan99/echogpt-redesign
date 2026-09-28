import NewChatIcon from "../icons/NewChatIcon";
import Settings from "../icons/Settings";
import Share from "../icons/Share";
import LightMode from "../icons/LightMode";
import Website from "../icons/Website";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Tooltip from "../ui/Tooltip";
import SidebarItem from "./SidebarItem";
import { engagementSidebarItems, supportSidebarItems } from "./SidebarItems";
import SettingsModal from "../settingsModal/SettingsModal";
import ShareModal from "../shareModal/ShareModal";
import { useRef, useState } from "react";
import Border from "../ui/Border";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("History");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const settingsButtonRef = useRef<HTMLButtonElement>(null);
  const shareButtonRef = useRef<HTMLButtonElement>(null);

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);

    // Return focus to the button that opened the modal
    requestAnimationFrame(() => {
      settingsButtonRef.current?.focus();
    });
  };

  const openShare = () => {
    setIsShareOpen(true);
  };

  const closeShare = () => {
    setIsShareOpen(false);

    requestAnimationFrame(() => {
      shareButtonRef.current?.focus();
    });
  };

  return (
    <aside
      aria-label="Sidebar"
      className="w-[288px] transition-all duration-300 hidden md:flex"
    >
      <div className="w-full h-full flex flex-col justify-between bg-surface dark:bg-surface border-r border-border relative">
        {/* **********LOGO********** */}
        <Logo />

        {/* **********SIDEBAR MENU********** */}
        <nav
          aria-label="Main navigation"
          className="w-full h-[calc(100%-88px)] overflow-x-auto pt-2 pb-14 custom-scrollbar"
        >
          {/* New Chat Button */}
          <Button text="New Chat" icon={<NewChatIcon aria-hidden="true" />} />

          {/* Engagement Options */}
          <h2
            id="engagement-heading"
            className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mt-5 mb-2 px-6"
          >
            Engagement
          </h2>
          <section
            aria-labelledby="engagement-heading"
            className="px-4 flex flex-col gap-1"
          >
            {engagementSidebarItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                badge={item.badge}
                active={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </section>

          <Border />

          {/* Support Options */}
          <h2
            id="support-heading"
            className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mb-2 px-6"
          >
            Help & Support
          </h2>
          <section
            aria-labelledby="support-heading"
            className="px-4 flex flex-col gap-1"
          >
            {supportSidebarItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                active={activeItem === item.label}
                onClick={() => setActiveItem(item.label)}
              />
            ))}
          </section>
        </nav>

        {isSettingsOpen && <SettingsModal onClose={closeSettings} />}

        {isShareOpen && <ShareModal onClose={closeShare} />}

        {/* **********BOTTOM OPTIONS********** */}
        <div className="absolute left-0 bottom-0 w-full h-12 border-t border-border px-5 flex items-center justify-around bg-surface dark:bg-surface">
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
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
