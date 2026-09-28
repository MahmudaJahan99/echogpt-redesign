type SidebarItemProps = {
  label: string;
  icon: React.ReactNode;
  badge?: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarItem = ({
  label,
  icon,
  badge,
  active = false,
  onClick,
}: SidebarItemProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`
        group relative select-none
        h-11 w-full
        flex items-center gap-3
        px-3 rounded-xl
        text-[15px]
        cursor-pointer
        transition-colors duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-background

        ${
          active
            ? "bg-muted text-foreground font-medium"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }
      `}
    >
      {/* Icon */}
      <span
        aria-hidden="true"
        className={`
          shrink-0 transition-colors
          ${active ? "text-primary" : ""}
        `}
      >
        {icon}
      </span>

      {/* Label */}
      <span className="truncate">{label}</span>

      {/* Badge */}
      {badge && (
        <span
          className="ml-auto shrink-0 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary"
          aria-label={`${badge} feature`}
        >
          {badge}
        </span>
      )}

      {active && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-2.25 h-6 w-1 rounded-r-full bg-primary"
        />
      )}
    </button>
  );
};

export default SidebarItem;
