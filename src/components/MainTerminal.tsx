import { FormEvent, useState } from "react";
import { commands } from "./commands/commands";

interface HistoryItem {
  type: "input" | "output";
  content: string;
}

const MainTerminal = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const typeOutput = (output: string) => {
    let index = 0;
    const typingSpeed = 20;

    const typeNextChar = () => {
      if (index < output.length) {
        setHistory((prevHistory) => {
          const newHistory = [...(prevHistory || [])];

          if (
            newHistory.length > 0 &&
            newHistory[newHistory.length - 1].type === "output"
          ) {
            const lastOutput = { ...newHistory[newHistory.length - 1] };
            lastOutput.content += output[index];
            newHistory[newHistory.length - 1] = lastOutput;
          } else {
            newHistory.push({ type: "output", content: output[index] });
          }

          return newHistory;
        });

        index++;
        setTimeout(typeNextChar, typingSpeed);
      }
    };

    setHistory((prevHistory) => [
      ...prevHistory!,
      { type: "output", content: "" },
    ]);

    typeNextChar();
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === "") return "";

    const command = commands[trimmedCmd];
    if (command) {
      return command.execute();
    } else {
      return ` Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (trimmedInput) {
      setHistory((prev) => [
        ...(prev || []),
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
        {history!.map((item, i) => (
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
        />
      </form>
    </main>
  );
};

export default MainTerminal;
