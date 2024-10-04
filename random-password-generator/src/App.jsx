import { useState, useCallback, useEffect , useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copy")

  const passwordRef = useRef(null)

  //coping password to clipboard
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  //generating random password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) {
      str += "0123456789";
    }

    if (character) {
      str += "!@#$%^&*_++[]{}~";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, number, character, setPassword]);

  //rendering 
  useEffect(()=>{
    passwordGenerator()
  }, [length, number, character, passwordGenerator])

  return (
    <div>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-slate-300">
        <h1 className="text-center font-bold text-xl m-4 p-4">
          Random Password Generator !
        </h1>

        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4 text-slate-900">
          <input
            type="text"
            placeholder="password"
            value={password}
            className="outline-none w-full py-2 px-3 items-center"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {copyText}
          </button>
        </div>

        <div className="flex justify-around text-md gap-x-5">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              name=""
              id=""
              onChange={() => setNumber((prev) => !prev)}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={character}
              name=""
              id=""
              onChange={() => setCharacter((prev) => !prev)}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
