import { X } from "lucide-react";

export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-soft border border-funeka-divider">
        <div className="flex items-center justify-between border-b border-funeka-divider px-5 py-4">
          <div className="text-sm font-semibold text-funeka-anchor">{title}</div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-funeka-bg transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-5 py-4">{children}</div>
      </div>
    </div>
  );
}
