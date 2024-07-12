import { useState } from "react"
import { Boilerplate } from "@/components/boilerplate"
// import "./App.css"
import "./App.scss"

export const App = () => {
  const [count, setCount] = useState(0)

  return <Boilerplate count={count} setCount={setCount} />
}
