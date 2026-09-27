type SidebarItemProps = {
  label: string;
  icon: React.ReactNode;
  badge?: string;
};

const SidebarItem = ({ label, icon, badge }: SidebarItemProps) => {
  return (
    <div className="group relative select-none h-11 w-full flex items-center gap-3 px-3 rounded-xl text-[15px] cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-muted hover:text-foreground">
      {icon}
      <span>{label}</span>
      {badge && (
        <span className="ml-auto text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary">
          {badge}
        </span>
      )}
    </div>
  );
};

export default SidebarItem;
