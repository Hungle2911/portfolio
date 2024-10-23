import { useEffect, useState } from "react";

const TerminalLine = () => {
  const terminalText =
    "Hi! Thank you for taking your time to look at this portfolio. I am Billy, your virtual assistant. Feel free to ask me anything related to William. For example, you can ask me about his projects, skills, or even his contact info. I am here to help you! For a list of available commands, type `help`";
  const words = terminalText.split(" ");
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);

  useEffect(() => {
    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
      }, 200);
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
