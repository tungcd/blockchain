"use client";
import { useState } from "react";

interface CopyToClipboardProps {
  text: string;
  isGradient?: boolean;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({
  text,
  isGradient = true,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="flex gap-x-3">
      <span
        className={`text-xl text_CopyToClipboard font-normal letter__spacing ${
          isGradient && "gradient_text"
        } w-fit`}
      >
        {text}
      </span>
      <button onClick={handleCopy}>
        {isCopied ? (
          <p className="w-6 h-6">✓</p>
        ) : (
          <img className="w-6 h-6" src="image/copy_icon.png" />
        )}
      </button>
    </div>
  );
};

export default CopyToClipboard;
