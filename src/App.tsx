import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import TerminalLine from "./components/TerminalLine";
import TextSphere from "./components/TextSphere";

function App() {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div className="px-4 py-12 text-center">
          <Heading />
        </div>
        <div className="flex">
          <TextSphere />
          {/* <Navigation /> */}
          <TerminalLine />
        </div>
      </div>
    </>
  );
}

export default App;
