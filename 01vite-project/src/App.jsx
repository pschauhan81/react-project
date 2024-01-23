import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const AddValue=()=>{
    setCount(count+1);
   }

  const RemoveValue=()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>hello vite this welcome {count}</h1>
      <button onClick={AddValue}>AddValue</button>
      <button onClick={RemoveValue}>RemoveValue</button>
    </>
  )
}

export default App;
