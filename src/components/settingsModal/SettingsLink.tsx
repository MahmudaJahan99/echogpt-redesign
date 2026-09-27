import LinkArrow from "../icons/LinkArrow";
import type { ReactElement } from "react";

interface settingsLinkProps {
  icon: ReactElement;
  title: string;
  link: string;
}

const SettingsLink = ({ icon, title, link }: settingsLinkProps) => {
  return (
    <div className="w-full flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        {icon}
        {title}
      </div>
      <a
        target="_blank"
        className="flex items-center gap-2 h-10 px-3 rounded-xl cursor-pointer text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-200"
        href={link}
      >
        <LinkArrow />
        Visit
      </a>
    </div>
  );
};

export default SettingsLink;
