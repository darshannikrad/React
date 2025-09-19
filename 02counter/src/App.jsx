import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { set } from 'mongoose'

function App() {

  const [counter, setCounter] = useState(15)

  //  let counter=15
   const addValue=()=>{
    console.log("value added",counter);
    // counter=counter+1
    setCounter(counter+1)
   }
   const removeValue=()=>{
    setCounter(counter-1)
   }

  return (
    <>
      <h1>Pani and khari</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add Value{counter}</button>
      <br/>
      <button
      onClick={removeValue}
      >remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
