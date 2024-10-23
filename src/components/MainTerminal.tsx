import { useState } from "react";

const MainTerminal = () => {
  const [input, setInput] = useState<string>("");

  return (
    <main>
      <form className="">
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
