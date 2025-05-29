import { useState } from "react";
import { Boilerplate } from "@/components/boilerplate";
import { getAppMessage } from "@/config"; // Assuming @/config path alias works for Vitest
// import "./App.css"; // Original commented out
import "./App.scss";

export const App = () => {
  const [count, setCount] = useState(0);
  const message = getAppMessage();

  return <Boilerplate count={count} setCount={setCount} message={message} />;
};
