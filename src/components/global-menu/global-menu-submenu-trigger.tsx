import React, { forwardRef, useContext } from "react";
import { LuChevronRight, LuChevronDown } from 'react-icons/lu';
import { GlobalMenuLevelContext } from "./global-menu-nav"; // Corrected import path
import { GlobalMenuItemContext } from "./global-menu-item";
import { styleTransitionDelay } from "../../utils/style-transition-delay"; // Corrected import path

interface GlobalMenuSubmenuTriggerProps {
  index: number;
  label: string;
  isVisible?: boolean;
  isOpen: boolean; // Directly receive open state from parent
  onClick: () => void; // Receive click handler from parent
}

export const GlobalMenuSubmenuTrigger = forwardRef<
  HTMLButtonElement,
  GlobalMenuSubmenuTriggerProps
>(({ label, index, isVisible, isOpen, onClick }, ref) => {
  const { id: controls } = useContext(GlobalMenuItemContext);
  const { level } = useContext(GlobalMenuLevelContext);

  // Simplified styling classes
  const buttonClasses = `
    flex items-center justify-between w-full
    px-4 py-3 text-lg font-medium
    ${level === 0 ? "text-white bg-gray-700 hover:bg-gray-600" : "text-gray-300 hover:bg-gray-700"}
  `;

  return (
    <button
      ref={ref}
      className={buttonClasses}
      onClick={onClick} // Use the onClick prop from parent
      aria-controls={controls}
      aria-expanded={isOpen}
    >
      <div
        className="flex-1 text-left"
        style={styleTransitionDelay({ index, isVisible })}
      >
        {label}
      </div>
      <span className="ml-2">
        {isOpen ? <LuChevronDown className="h-5 w-5" /> : <LuChevronRight className="h-5 w-5" />}
      </span>
    </button>
  );
});

GlobalMenuSubmenuTrigger.displayName = 'GlobalMenuSubmenuTrigger';