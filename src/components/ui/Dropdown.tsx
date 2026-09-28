import { useEffect, useRef } from "react";

interface DropdownProps {
  id: string;
  itemsList: string[];
  selectedItem: string;
  activeIndex: number;
  onSelect: (item: string) => void;
}

const Dropdown = ({
  id,
  itemsList,
  selectedItem,
  activeIndex,
  onSelect,
}: DropdownProps) => {
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    optionRefs.current[activeIndex]?.focus();
  }, [activeIndex]);

  return (
    <ul
      id={id}
      role="listbox"
      aria-label="Select an option"
      className="absolute left-0 top-12 z-50 w-full max-h-60 overflow-y-auto overscroll-contain p-2 flex flex-col gap-1 rounded-xl border border-border bg-card shadow-card animate-fade-in"
    >
      {itemsList.map((item, index) => {
        const isSelected = selectedItem === item;
        const isActive = activeIndex === index;

        return (
          <li
            key={item}
            role="option"
            aria-selected={isSelected}
            className="w-full"
          >
            <button
              ref={(element) => {
                optionRefs.current[index] = element;
              }}
              type="button"
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(item)}
              className={`w-full flex items-center justify-between p-2 rounded-lg text-sm text-left transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                isSelected ? "bg-muted font-medium" : ""
              }`}
            >
              <span>{item}</span>

              {isSelected && <span aria-hidden="true">✓</span>}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
