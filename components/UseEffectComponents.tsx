'use client';
import React, { useEffect, useState } from 'react'
import { Component1 } from './component1';
import Component4 from './component4';

export const UseEffectComponents = () => {
    //  const [a, setA] = useState(0);


    // useEffect(()=> {
    //     console.log("useEffect for component 1 called")
    //     setA(10);
    // }, []); // if dependency array is empty, it will run only once


  return (
    <div className='font-bold text-5xl'>
        {/* <Component1 /> */}
        {/* <Component3 /> */}
        <Component4 />
        

    </div>
  )
}
