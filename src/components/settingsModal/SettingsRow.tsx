import DropdownArrow from "../icons/DropdownArrow";
import Dropdown from "../ui/Dropdown";

interface settinfsRowProps {
  icon: React.ReactNode;
  title: string;
  defaultOption: string;
  dropdownItems: string[];
}

const SettingsRow = ({
  icon,
  title,
  defaultOption,
  dropdownItems,
}: settinfsRowProps) => {
  return (
    <div className="w-full mt-5 flex items-center justify-between gap-5">
      <div className="w-1/2 flex items-center gap-2.5 text-sm">
        {icon}
        {title}
      </div>

      <div className="relative w-1/2 h-11 px-4 flex items-center justify-center rounded-xl border bg-card border-border hover:bg-muted cursor-pointer transition-all duration-200">
        <div className="w-full h-full flex items-center justify-between text-sm">
          {defaultOption}
          <DropdownArrow />
        </div>

        <Dropdown itemsList={dropdownItems} />
      </div>
    </div>
  );
};

export default SettingsRow;
