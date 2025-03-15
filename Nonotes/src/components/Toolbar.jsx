import React, { useState } from "react";
import { Bot, X } from "lucide-react";
import AiChat from "./AiChat";

const Toolbar = ({ currentNote, handleTitleChange, handleSave, handleNewNote, isSaved, bold, italic, size, font, onBoldToggle, onItalicToggle, onSizeChange, onFontChange }) => {
  const [ai, setAi] = useState(false);

  return (
    <div className="toolbar-wrapper font-comic-sans">
      <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
        <input 
          type="text" 
          value={currentNote?.title || ""} 
          onChange={handleTitleChange}
          className="bg-transparent text-xl font-medium focus:outline-none border-b border-transparent focus:border-gray-300 text-gray-900"
        />

        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded-md bg-white text-neutral-500 hover:bg-gray-300 transition-colors text-sm ${bold ? 'font-bold' : ''}`}
            onClick={onBoldToggle}
          >
            B
          </button>
          <button 
            className={`px-3 py-1 rounded-md bg-white text-neutral-500 hover:bg-gray-300 transition-colors text-sm ${italic ? 'italic' : ''}`}
            onClick={onItalicToggle}
          >
            I
          </button>
          <select 
            className="px-3 py-1 rounded-md bg-white text-neutral-500 hover:bg-gray-300 transition-colors text-sm"
            onChange={(e) => onSizeChange(e.target.value)}
            value={size}
          >
            <option value="small" className="text-xs">Small</option>  {/* Smaller */}
            <option value="normal" className="text-base">Normal</option> {/* Default */}
            <option value="large" className="text-2xl">Large</option>  {/* Much Bigger */}
          </select>
          <select 
            className="px-3 py-1 rounded-md bg-white text-neutral-500 hover:bg-gray-300 transition-colors text-sm"
            onChange={(e) => onFontChange(e.target.value)}
            value={font}
          >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
          </select>
        </div>

        <div className="">
          <button 
            className="flex items-center space-x-2 px-3 py-1 rounded-md bg-white text-neutral-500 hover:bg-gray-300 transition-colors text-sm"
            onClick={() => setAi(true)}
          >
            <Bot size={16} /> {/* AI Icon */}
            <span>AI</span>
          </button>
        </div>

        {ai && (
          <div className='absolute top-0 right-0 bg-white p-4 shadow-lg rounded-lg'>
            <button
              className="absolute top-2 left-2 text-red-500 hover:text-red-700 transition"
              onClick={() => setAi(false)}
            >
              <X size={30} /> {/* Red X Icon */}
            </button>
            <AiChat />
          </div>
        )}

        <div className="flex space-x-2">
          <button 
            onClick={handleSave} 
            className={`px-4 py-2 rounded-md ${isSaved ? 'bg-gray-200 text-gray-700' : 'bg-gray-500 text-white'} hover:bg-gray-600 transition-colors`}
          >
            {isSaved ? "Saved" : "Save"}
          </button>
          <button 
            onClick={handleNewNote} 
            className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
          >
            New Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;