import { useState } from 'react'


function App() {
  
  let [counter, setCount] = useState(0)
  const addfunction=() =>{
    counter=counter+1;
    setCount(counter);

  }
  const remove=()=>{
    counter=counter-1;
    setCount(counter);
  }

  return (
    <>
    <div >Jai Shri Ramchandra
      <br />{counter}
    </div>
    <button onClick={addfunction}>Add Counter {counter}</button><br />
    <button onClick={remove}>remove Counter  {counter}</button>
      
    </>
  )
}

export default App
