import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import DropdownArrow from "../icons/DropdownArrow";
import Dropdown from "../ui/Dropdown";

interface settinfsRowProps {
  icon: ReactNode;
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
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(
    Math.max(0, dropdownItems.indexOf(defaultOption)),
  );

  const dropdownId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle selection of an option from the dropdown
  const handleSelect = (option: string) => {
    setSelectedOption(option);

    const selectedIndex = dropdownItems.indexOf(option);

    setActiveIndex(selectedIndex);

    setIsOpen(false);

    // Return focus to the trigger after selection
    requestAnimationFrame(() => {
      buttonRef.current?.focus();
    });
  };

  // Handle keyboard navigation for the dropdown
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        setIsOpen((previous) => !previous);
        break;

      case "ArrowDown":
        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
          return;
        }

        setActiveIndex((previous) =>
          Math.min(previous + 1, dropdownItems.length - 1),
        );
        break;

      case "ArrowUp":
        event.preventDefault();

        if (!isOpen) {
          setIsOpen(true);
          return;
        }

        setActiveIndex((previous) => Math.max(previous - 1, 0));
        break;

      case "Home":
        if (isOpen) {
          event.preventDefault();
          setActiveIndex(0);
        }
        break;

      case "End":
        if (isOpen) {
          event.preventDefault();
          setActiveIndex(dropdownItems.length - 1);
        }
        break;

      case "Escape":
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
        }
        break;

      default:
        break;
    }
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="w-full mt-5 flex items-center justify-between gap-5">
      <div className="w-1/2 flex items-center gap-2.5 text-sm">
        <span aria-hidden="true">{icon}</span>
        <span id={`${dropdownId}-label`}>{title}</span>
      </div>

      <div
        ref={dropdownRef}
        className="relative w-1/2 h-11 px-4 flex items-center justify-center rounded-xl border bg-card border-border hover:bg-muted cursor-pointer transition-all duration-200"
      >
        {/* Dropdown */}
        <button
          ref={buttonRef}
          type="button"
          aria-labelledby={`${dropdownId}-label`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={isOpen ? dropdownId : undefined}
          onClick={() => setIsOpen((previous) => !previous)}
          onKeyDown={handleKeyDown}
          className="w-full h-full flex items-center justify-between text-sm"
        >
          <span>{selectedOption}</span>

          <DropdownArrow
            // className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {isOpen && (
          <Dropdown
            id={dropdownId}
            itemsList={dropdownItems}
            selectedItem={selectedOption}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          />
        )}
      </div>
    </div>
  );
};

export default SettingsRow;
