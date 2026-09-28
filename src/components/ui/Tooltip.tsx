import type { ReactNode } from "react";

type TooltipProps = {
  text: string;
  children: ReactNode;
};

const Tooltip = ({ text, children }: TooltipProps) => {
  return (
    <div className="relative inline-block group">
      {children}

      <div className="absolute z-1000000000 bg-foreground text-background text-xs rounded-lg shadow-card px-2.5 py-1.5 whitespace-nowrap -mt-8 transform top-0 -left-6 -translate-x-1/2 opacity-0 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
        {text}

        <svg
          className="absolute text-foreground h-2 top-full left-1/2 transform -translate-x-1/2"
          viewBox="0 0 255 255"
        >
          <polygon
            className="fill-current"
            points="0,0 127.5,127.5 255,0"
          ></polygon>
        </svg>
      </div>
    </div>
  );
};

export default Tooltip;
