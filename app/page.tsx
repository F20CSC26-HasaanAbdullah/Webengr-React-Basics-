import { ComponentA } from '@/components/ComponentA';
import { UseEffectComponents } from '@/components/UseEffectComponents';
import { UseStateComponent } from '@/components/UseStateComponents';

import React from 'react'

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <UseStateComponent/> */}
      {/* <UseEffectComponents/> */}
      <ComponentA/>
    </div>
  )
}

export default Home
