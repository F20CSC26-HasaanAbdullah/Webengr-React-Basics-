'use client';
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

export const Component1 = () => {

    const [counter, setCounter] = useState(0)

    const increment = () => {setCounter(counter+1)}
    const decrement = () => {
        if(counter<=0) return;
        setCounter(counter-1)
    }

    useEffect(()=> {
        console.log("Component1 is mounted")
        
    },[])
  return (
    <div>
        <div className='text-3xl font bold flex gap-5 items-center justify-center'>
        <Button onClick={decrement} variant="destructive">-</Button>
        {counter}
        <Button onClick={increment}>+</Button>
        
    </div>
    </div>
  )
}
