import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState("green")
  
  return (
    <>
      <div style={{
        width: 300,
        height: 300,
        backgroundColor: state,
        alignItems: 'center'
      }}>

      <button onClick={() => setState("red")}>Red</button>
      <button onClick={() => setState("green")}>Green</button>
      <button onClick={() => setState("blue")}>Blue</button>
      </div>

      <div>
        <button onClick={() => setCount((count) => count  + 1)}>Count</button>
        <p>Count is {count}</p>
      </div>
    </>
  )
}

export default App
