import { useState } from "react"
import { Boilerplate } from "@/components/boilerplate"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return <Boilerplate count={count} setCount={setCount} />
}

export default App
