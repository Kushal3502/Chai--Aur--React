import { useState } from "react";

function App() {
  let [color, setColor] = useState("black");

  const changeColor = (e) => {
    console.log(e.target.innerHTML);
    setColor(e.target.innerHTML);
  };

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className=" w-full flex flex-wrap justify-center align-middle">
        <div className=" bg-gray-600 text-2xl flex flex-wrap justify-center align-middle gap-8 px-8 py-5 mt-5 rounded-3xl">
          <button
            className="px-3 py-2 rounded-2xl text-white flex justify-center text-center"
            style={{ background: "red" }}
            onClick={changeColor}
          >
            Red
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-white"
            style={{ background: "green" }}
            onClick={changeColor}
          >
            Green
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-white"
            style={{ background: "blue" }}
            onClick={changeColor}
          >
            Blue
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-white"
            style={{ background: "olive" }}
            onClick={changeColor}
          >
            Olive
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-white"
            style={{ background: "gray" }}
            onClick={changeColor}
          >
            Gray
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-black"
            style={{ background: "yellow" }}
            onClick={changeColor}
          >
            Yellow
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-black"
            style={{ background: "pink" }}
            onClick={changeColor}
          >
            Pink
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-white"
            style={{ background: "purple" }}
            onClick={changeColor}
          >
            Purple
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-black"
            style={{ background: "lavender" }}
            onClick={changeColor}
          >
            Lavender
          </button>
          <button
            className="px-3 py-2 rounded-2xl text-black"
            style={{ background: "white" }}
            onClick={changeColor}
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
