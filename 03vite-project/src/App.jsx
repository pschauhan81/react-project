import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue=()=>{
    setCount(count=>count+1);
    setCount(count=>count+1);
    setCount(count=>count+1);
}

const removeValue=()=>{
  setCount(count-1)
}

  return (
    <>
    <h1>hello User count clicked {count}</h1>
    <button onClick={addValue}>+3 addValue</button>
    <button onClick={removeValue}>removeValue</button>

    </>
  )
}

export default App
