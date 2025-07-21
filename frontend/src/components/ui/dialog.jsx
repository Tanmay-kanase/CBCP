"use client";

import { createContext, useContext } from "react";

const DialogContext = createContext();

export function Dialog({ children, open, onOpenChange }) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => onOpenChange(false)}
          />
          <div className="relative z-50 max-w-lg w-full mx-4">{children}</div>
        </div>
      )}
    </DialogContext.Provider>
  );
}

export function DialogContent({ children, className = "" }) {
  const { onOpenChange } = useContext(DialogContext);

  return (
    <div className={`bg-white rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function DialogHeader({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function DialogTitle({ children, className = "" }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}
