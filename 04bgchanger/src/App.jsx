import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
  
<div className="cotainer" style={{backgroundColor:color}}>
  <div className="box">
    <button onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>red</button>
    <button onClick={()=>setColor("blue")}style={{backgroundColor:"blue"}}>blue</button>
    <button onClick={()=>setColor("green")}style={{backgroundColor:"green"}}>green</button>
    <button onClick={()=>setColor("FireBrick ")}style={{backgroundColor:"FireBrick "}}>FireBrick </button>
    <button onClick={()=>setColor("Aqua ")}style={{backgroundColor:"Aqua "}}>Aqua </button>
    <button onClick={()=>setColor("Gray  ")}style={{backgroundColor:"Gray"}}>Gray</button>
    <button onClick={()=>setColor("orange")}style={{backgroundColor:"orange"}}>orange</button>
  </div>
</div>
  )

}

export default App; 
