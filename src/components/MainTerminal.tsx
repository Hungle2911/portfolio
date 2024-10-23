import { FormEvent, useState } from "react";
import { commands } from "./commands/commands";

interface HistoryItem {
  type: "input" | "output";
  content: string;
}

const MainTerminal = () => {
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<HistoryItem[] | undefined>([]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === "") return;

    const command = commands[trimmedCmd];
    if (command) {
      return command.execute();
    } else {
      return `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    setHistory((prev) => [
      ...prev,
      { type: "input", content: `> ${trimmedInput}` },
      { type: "output", content: handleCommand(trimmedInput) },
    ]);
    setInput("");
  };

  return (
    <main>
      <div>
        {history!.map((item, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap ${
              item.type === "input" && "text-blue-600"
            }`}
          >
            {item.content}
          </div>
        ))}
      </div>
      <form className="" onSubmit={handleSubmit}>
        <span className="text-blue-600 font-pixelify">{"> "}</span>
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
