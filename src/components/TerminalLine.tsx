import { useEffect, useState } from "react";

const TerminalLine = () => {
  const terminalText =
    "Welcome to my terminal-like interface built with React, Tailwind, and TypeScript.";
  const words = terminalText.split(" ");
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentWordIndex, words]);

  return (
    <div className="text-green-600 font-pixelify">
      {"> "}
      {displayedText.join(" ")}
      {currentWordIndex < words.length && (
        <span className="animate-pulse">|</span>
      )}
    </div>
  );
};

export default TerminalLine;
