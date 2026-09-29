import NewChatIcon from "../icons/NewChatIcon";

import Button from "../ui/Button";
import Logo from "../ui/Logo";
import SidebarItem from "./SidebarItem";
import { engagementSidebarItems, supportSidebarItems } from "./SidebarItems";
import SettingsModal from "../settingsModal/SettingsModal";
import ShareModal from "../shareModal/ShareModal";
import { useRef, useState } from "react";
import Border from "../ui/Border";
import SidebarBottom from "./SidebarBottom";

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
      <div className="relative w-full h-full flex flex-col justify-between bg-surface dark:bg-surface border-r border-border">
        {/* **********LOGO********** */}
        <Logo />

        {/* **********SIDEBAR MENU********** */}
        <nav
          aria-label="Main navigation"
          className="w-full min-h-0 overflow-x-auto overflow-y-auto pt-2 pb-14 custom-scrollbar"
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

        {/* **********MODALS********** */}
        {isSettingsOpen && <SettingsModal onClose={closeSettings} />}
        {isShareOpen && <ShareModal onClose={closeShare} />}

        {/* **********BOTTOM OPTIONS********** */}
        <SidebarBottom
          openSettings={openSettings}
          openShare={openShare}
          isSettingsOpen={isSettingsOpen}
          isShareOpen={isShareOpen}
          settingsButtonRef={settingsButtonRef}
          shareButtonRef={shareButtonRef}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
