import "./App.css";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContextProvider } from "./context/themeContext";

function App() {
  const [defaultTheme, setTheme] = useState("light");

  const darkMode = () => {
    setTheme("dark");
  };

  const lightMode = () => {
    setTheme("light");
  };

  useEffect(() => {
    const body = document.querySelector("html");
    body.classList.remove("dark", "light");
    body.classList.add(defaultTheme);
  }, [defaultTheme]);

  return (
    <ThemeContextProvider value={{ defaultTheme, darkMode, lightMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
