interface DropdownProps {
  itemsList: string[];
}

const Dropdown = ({ itemsList }: DropdownProps) => {
  return (
    <div className="hidden absolute left-0 top-12 cursor-default bg-card rounded-xl w-full p-2 z-9999999999 border border-border shadow-card flex flex-col gap-1 animate-fade-in">
      {itemsList.map((item) => (
        <div
          key={item}
          className="w-full flex items-center justify-between text-sm cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors duration-200"
        >
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
