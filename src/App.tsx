import Heading from "./components/Heading";
import TextSphere from "./components/TextSphere";

function App() {
  return (
    <>
      <div className="container ">
        <div className=" h-96">
          <Heading />
        </div>
        <div className="ml-96">
          <TextSphere />
        </div>
      </div>
    </>
  );
}

export default App;
