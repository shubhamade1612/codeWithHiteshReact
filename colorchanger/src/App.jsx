
import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{background: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2 py-1 " >
        <div className="flex flex-wrap justify-center gap-3 bg-white rounded-2xl p-2"> 
          
          <button onClick={()=>{setColor("violet")}} className="outline-none  rounded-full px-4 py-1" style={{backgroundColor:"violet"}}>violet</button>
          <button onClick={()=>{setColor("red")}} className="outline-none px-4 rounded-full  p-1" style={{backgroundColor:"red"}}>red</button>          
          <button onClick={()=>{setColor("green")}}className="outline-none px-4 rounded-2xl  p-1" style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>{setColor("indigo")}}className="outline-none px-4 rounded-2xl  p-1" style={{backgroundColor:"Indigo"}}>Indigo</button>
          <button onClick={()=>{setColor("yellow")}}className="outline-none px-4 rounded-2xl  p-1" style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>{setColor("orange")}}className="outline-none px-4 rounded-2xl  p-1" style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>setColor("blue")}className="outline-none px-4 rounded-2xl  p-1 " style={{backgroundColor:"blue"}}>blue</button>
          
        </div>
      </div>
     </div>
    </>
  )
}

export default App
