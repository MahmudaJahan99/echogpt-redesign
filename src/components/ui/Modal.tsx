import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Close from "../icons/Close";

interface ModalProps {
  title: string;
  titleId: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ title, titleId, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed h-screen w-screen inset-0 z-1000000000 grid place-items-center bg-black/50 backdrop-blur-sm px-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className=" text-foreground border border-border rounded-2xl w-[95%] max-w-112.5 flex flex-col bg-card shadow-card animate-fade-up focus:outline-none"
      >
        {/* Modal Header */}
        <div className="w-full flex items-center justify-between gap-5 p-5 border-b border-border">
          <h2 id={titleId} className="text-lg font-semibold tracking-tight">
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label={`Close ${title}`}
            className="w-11 h-11 -mr-2 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Close aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
