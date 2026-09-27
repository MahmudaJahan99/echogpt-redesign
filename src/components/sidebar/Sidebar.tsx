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

const Sidebar = () => {
  return (
    <div className="w-[288px] transition-all duration-300 hidden md:flex">
      <div className="w-full h-full flex flex-col justify-between bg-surface dark:bg-surface border-r border-border relative">
        {/* **********LOGO********** */}
        <Logo />

        {/* **********SIDEBAR MENU********** */}
        <div className="w-full h-[calc(100%-88px)] overflow-x-auto pt-2 pb-14 custom-scrollbar">
          {/* New Chat Button */}
          <Button text="New Chat" icon={<NewChatIcon />} />

          {/* Engagement Options */}
          <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mt-5 mb-2 px-6">
            Engagement
          </div>
          <div className="px-4 flex flex-col gap-1">
            {engagementSidebarItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                icon={item.icon}
                badge={item.badge}
              />
            ))}
          </div>

          {/* Horizontal rule */}
          <div className="w-full px-6 my-4">
            <div className="w-full h-px bg-border"></div>
          </div>

          {/* Support Options */}
          <div className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground mb-2 px-6">
            Help & Support
          </div>
          <div className="px-4 flex flex-col gap-1">
            {supportSidebarItems.map((item) => (
              <SidebarItem
                key={item.label}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        <SettingsModal />

        <ShareModal />

        {/* **********BOTTOM OPTIONS********** */}
        <div className="absolute left-0 bottom-0 w-full h-12 border-t border-border px-5 flex items-center justify-around bg-surface dark:bg-surface">
          <Tooltip
            children={
              <a target="_blank" href="https://appifydevs.com">
                <Website />
              </a>
            }
            text="Website"
          />

          <Tooltip children={<Share />} text="Share" />

          <Tooltip children={<Settings />} text="Settings" />

          <Tooltip children={<LightMode />} text="Light Mode" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
