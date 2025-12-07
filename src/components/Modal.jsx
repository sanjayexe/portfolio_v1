import React from "react";
import { XIcon, SparklesIcon } from "./Icons.jsx";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg border border-slate-700 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-slate-700">
          <h3 className="font-bold text-lg text-white flex items-center gap-2">
            <SparklesIcon className="w-5 h-5 text-teal-400" /> {title}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <XIcon />
          </button>
        </header>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
