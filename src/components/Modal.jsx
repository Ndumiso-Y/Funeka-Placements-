import { X } from "lucide-react";

export default function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-soft border border-funeka-dividerGrey">
        <div className="flex items-center justify-between border-b border-funeka-dividerGrey px-5 py-4">
          <div className="text-sm font-semibold text-funeka-charcoal">{title}</div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-funeka-lightBlueTint transition"
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
