import React, { useState } from "react";

function Text() {
    let [text, setText] = useState("Kushal");

    const updateText = (e) => {
        setText(e.target.value);
    };

    const reset = () => {
        setText("Kushal");
    };

    return (
        <>
            <h1>Text Changer</h1>
            <input value={text} onChange={updateText}></input>
            <p>You typed : {text}</p>
            <button onClick={reset}>Reset</button>
        </>
    );
}

export default Text;
