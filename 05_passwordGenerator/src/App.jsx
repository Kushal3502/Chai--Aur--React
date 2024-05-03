import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [length, setLength] = useState(10);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [characterAllowed, setCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (characterAllowed) str += "~`!@#$%^&*()_+-=*/{}[]";

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed]);

  const refElement = useRef(null);

  const copyToClipBoard = () => {
    refElement.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-2/3 bg-slate-800 text-center rounded-2xl p-8 flex-col gap-8">
          <h1 className="text-white text-5xl mb-8">Password Generator</h1>
          <div className="flex-col justify-center items-center">
            <div className="w-2/3 text-3xl bg-white flex ml-auto mr-auto">
              <input
                type="text"
                readOnly
                placeholder="Password"
                className="outline-none w-full py-1 px-3"
                value={password}
                ref={refElement}
              />
              <button
                className="outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5 shrink-0"
                onClick={copyToClipBoard}
              >
                Copy
              </button>
            </div>
            <div className="flex items-center justify-center gap-12 text-orange-500 text-2xl mt-7">
              <div className="flex items-center justify-center gap-3">
                <input
                  type="range"
                  min={5}
                  max={25}
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <label>Length : {length}</label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                />
                <label>Numbers Allowed</label>
              </div>
              <div className="flex items-center justify-center gap-3">
                <input
                  type="checkbox"
                  defaultChecked={characterAllowed}
                  onChange={() => {
                    setCharacterAllowed((prev) => !prev);
                  }}
                />
                <label>Characters Allowed</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
