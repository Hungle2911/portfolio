import Heading from "./components/Heading";

import TerminalLine from "./components/TerminalLine";
import TextSphere from "./components/TextSphere";

function App() {
  return (
    <>
      <div className="bg-black text-white min-h-screen overflow-x-hidden">
        <div className="px-4 py-12 text-center">
          <Heading />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-between ">
          <TextSphere />
          <TerminalLine />
        </div>
      </div>
    </>
  );
}

export default App;
