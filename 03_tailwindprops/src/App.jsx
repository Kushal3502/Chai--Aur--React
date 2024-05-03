import "./App.css";
import Card from "./components/Card";

function App() {
  let user = {
    name: "Kushal",
    age: 22,
  };
  return (
    <>
      <h1 className="bg-green-500 text-gray-900 p-5 rounded-3xl mb-5">
        Tailwind Test
      </h1>
      <Card user="Kushal" btnText="Click me" />
      <Card user="Aniket" btnText="Visit here" />
    </>
  );
}

export default App;
