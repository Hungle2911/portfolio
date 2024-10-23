import { FormEvent, useState } from "react";

const MainTerminal = () => {
  const [input, setInput] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();

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
        />
      </form>
    </main>
  );
};

export default MainTerminal;
