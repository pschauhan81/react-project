import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
    <div className="cotainer" style={{backgroundColor: color}}>
    <div className="box" >
    <button onClick={()=>setColor("red")}
    style={{backgroundColor:"red"}}
   >red</button> 
    <button onClick={()=>setColor("green")}
    style={{backgroundColor:"green"}}
   >green</button>
    <button onClick={()=>setColor("olive")}
    style={{backgroundColor:"olive"}}
   >olive</button>
   <button onClick={()=>setColor("blue")} 
   style={{backgroundColor:"blue"}}>blue</button>
    </div>
    </div>
    </>
  )
}

export default App; 
