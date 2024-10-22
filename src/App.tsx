import Heading from "./components/Heading";
import TextSphere from "./components/TextSphere";

function App() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="h-96">
          <Heading />
        </div>
        <div className="">
          <TextSphere />
        </div>
      </div>
    </>
  );
}

export default App;
