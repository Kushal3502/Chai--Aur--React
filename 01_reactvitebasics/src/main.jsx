import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const element = (
  <a href="https://github.com/Kushal3502" target="_blank"><button>Click Me</button></a>
)

const reactElement = React.createElement(
  'a',
  { href: "https://github.com/Kushal3502", target: "_blank" },
  'Click Here...'
)

ReactDOM.createRoot(document.getElementById("root")).render(

  <App />
  // element
  // reactElement

);
