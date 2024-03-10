import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TeamCards from "./components/TeamCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TeamCards />
    </>
  );
}

export default App;
