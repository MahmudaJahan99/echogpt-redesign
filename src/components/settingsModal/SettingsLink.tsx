import LinkArrow from "../icons/LinkArrow";
import type { ReactElement } from "react";

interface settingsLinkProps {
  icon: ReactElement;
  title: string;
  link: string;
  external?: boolean;
}

const SettingsLink = ({
  icon,
  title,
  link,
  external = false,
}: settingsLinkProps) => {
  return (
    <div className="w-full flex items-center justify-between text-sm">
      <div className="flex items-center gap-3">
        <span aria-hidden="true">{icon}</span>
        <span>{title}</span>
      </div>
      <a
        href={link}
        {...(external && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        className="
        flex items-center gap-2 h-10 px-3 rounded-xl cursor-pointer text-muted-foreground hover:bg-muted hover:text-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <LinkArrow aria-hidden="true" />
        <span>Visit</span>
      </a>
    </div>
  );
};

export default SettingsLink;
