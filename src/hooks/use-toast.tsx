"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Toast = {
  id: string;
  title: string;
  description?: string;
};

type ToastContextType = {
  toast: (t: Omit<Toast, "id">) => void;
};

const ToastContext = createContext<ToastContextType | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ title, description }: Omit<Toast, "id">) => {
    const id = crypto.randomUUID();

    setToasts((prev) => [...prev, { id, title, description }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="bg-black border border-white/10 text-white p-4 rounded-lg shadow-lg max-w-xs"
          >
            <p className="font-semibold">{t.title}</p>
            {t.description && (
              <p className="text-sm text-white/70">{t.description}</p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside ToastProvider");
  }
  return ctx;
}
