import { useEffect, useState,useCallback, useRef, use } from 'react'
import './App.css'
import { set } from 'mongoose'

function App() {
const [length, setLength]=useState(8)
const[numberAll,setNumAll]=useState(false)
const[charAll,setCharAll]=useState(false)
const[password,setPassword]=useState("")
const passwordRef=useRef(null)
const passwordGen=useCallback(()=>{let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAll) str+="0123456789"
  if(charAll) str+="!@#$%^&*()_+"
  for(let i=0;i<length;i++){
   let char =Math.floor(Math.random()*str.length+1)
   pass+=str.charAt(char)
  }
  setPassword(pass)
},[length,numberAll,charAll,setPassword])
const copyPasswordToClipboard =useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,9999);
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{
  passwordGen()
},[length,numberAll,charAll,passwordGen])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'> 
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'> 
        <input type="text"
        value={password}
        className='outline-none  w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='bg-orange-500 text-white py-1 px-3 rounded-lg'
        >Copy</button>
         </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={numberAll}
          id='numberInput'
          onChange={()=>{
            setNumAll((prev)=>!prev)
          }}
          />
          <label htmlFor='numberInput'>Include Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
          <input type='checkbox'
          defaultChecked={charAll}
          id='charInput'
          onChange={()=>{
            setCharAll((prev)=>!prev)
          }}
          />
          <label htmlFor='charInput'>Include Symbols</label>
         </div>
     </div>
</div>
    </>
  )
}

export default App
