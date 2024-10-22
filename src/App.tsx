import Heading from "./components/Heading";
import Navigation from "./components/Navigation";
import TerminalLine from "./components/TerminalLine";
import TextSphere from "./components/TextSphere";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="">
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
