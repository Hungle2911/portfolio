import { FormEvent, useState } from "react";
import { commands } from "./commands/commands";

const MainTerminal = () => {
  const [input, setInput] = useState<string>("");

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    if (trimmedCmd === "") return;

    const command = commands[trimmedCmd];
    if (command) {
      command.execute();
    } else {
      return `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim().toLowerCase();
    handleCommand(trimmedInput);
    if (trimmedInput !== "") {
      setInput("");
    }
  };

  return (
    <main>
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
