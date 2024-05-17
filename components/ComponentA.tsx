'use client'
import React, { useState } from 'react'
import ComponentB from './ComponentB'
import { Button } from './ui/button'
 
export const ComponentA = () => {
    const [counter, setCounter] = useState(0);
 
    const increment = () => {setCounter(counter+1)}
    const decrement = () => {
        if(counter<=0) return; //exit from function
        setCounter(counter-1)}
  return (
    <div className='border border-black bg-green-400 h-[75%] w-1/2 rounded-lg items-center justify-center flex flex-col'>
       <div className='flex gap-3 items-center justify-center'>
       <Button variant="destructive" onClick={decrement} >-</Button>
      {counter}
      <Button onClick={increment}>+</Button>
       </div>
       
       
        ComponentA
        <ComponentB counter={counter} setcounter={setCounter}/>
     
    </div>
  )
}
 
export default ComponentA