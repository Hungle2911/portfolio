import { FormEvent, useState } from "react";
import { commands } from "./commands/commands";

interface HistoryItem {
  type: "input" | "output";
  content: string;
}

const MainTerminal = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const typeOutput = (output: string) => {
    let index = 0;
    const typingSpeed = 20;
    setIsTyping(true);

    const typeNextChar = () => {
      if (index < output.length) {
        setHistory((prevHistory) => {
          const newHistory = [...prevHistory];

          if (
            newHistory.length > 0 &&
            newHistory[newHistory.length - 1].type === "output"
          ) {
            newHistory[newHistory.length - 1] = {
              type: "output",
              content: output.substring(0, index + 1),
            };
          } else {
            newHistory.push({
              type: "output",
              content: output.substring(0, index + 1),
            });
          }

          return newHistory;
        });

        index++;
        setTimeout(typeNextChar, typingSpeed);
      } else {
        setIsTyping(false);
      }
    };

    setHistory((prevHistory) => [
      ...prevHistory,
      { type: "output", content: "" },
    ]);

    typeNextChar();
  };

  const handleCommand = (cmd: string): string => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === "") return "";

    const command = commands[trimmedCmd];
    if (command) {
      const result = command.execute();
      return result || "";
    }

    return `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput && !isTyping) {
      setHistory((prev) => [
        ...prev,
        { type: "input", content: `> ${trimmedInput}` },
      ]);
      const output = handleCommand(trimmedInput);
      typeOutput(output);
    }

    setInput("");
  };

  return (
    <main>
      <div>
        {history.map((item, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap ${
              item.type === "input" && "text-yellow-400"
            }`}
          >
            {item.content}
          </div>
        ))}
      </div>
      <form className="" onSubmit={handleSubmit}>
        <span className="text-yellow-400 font-pixelify">{"> "}</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent text-white outline-none"
          autoFocus
          disabled={isTyping}
        />
      </form>
    </main>
  );
};

export default MainTerminal;
