import React from "react";

const Accordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-t pt-4">
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-sm font-semibold text-gray-800"
      >
        {title}
        <span className="text-lg">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Body */}
      {isOpen && (
        <div className="mt-3 space-y-2 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
