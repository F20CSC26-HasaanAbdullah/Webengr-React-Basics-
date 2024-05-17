import React from 'react'
import { Button } from './ui/button';
type  ComponentType = {
  counter: number;
  setcounter: React.Dispatch<React.SetStateAction<number>>
}
 
 
const ComponentC = ({counter, setcounter}: ComponentType) => {
  return (
    <div className='border border-black bg-orange-300 h-[75%] w-[75%] rounded-lg items-center justify-center flex flex-col'>
        ComponentC
        <div className='flex gap-2 items-center justify-center'>
          <Button variant="destructive" onClick={ () => setcounter (prev => prev-1)}> - </Button>
          <div>{counter}</div>
          <Button onClick={ () => setcounter (prev => prev+1)}> + </Button>
        </div>
     
    </div>
  )
}
 
export default ComponentC