import React, { useRef, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const previousValue = useRef();

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const videoRef = useRef();

  useEffect(() => {
    console.log("App Rendered");
    renderCount.current = renderCount.current + 1;
    previousValue.current = count;
  });

  return (
    <div className="App">
      <div>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button onClick={() => inputRef.current.focus()}>FOCUS</button>
      </div>

      <div>
        <div>{renderCount.current}</div>
        <button onClick={() => setCount((previous) => previous + 1)}>
          INCREASE COUNT
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <video
          controls
          ref={videoRef}
          src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          width="620"
        ></video>
        <button onClick={() => videoRef.current.play()}>PLAY</button>
        <button onClick={() => videoRef.current.pause()}>PAUSE</button>
      </div>
    </div>
  );
}

export default App;
