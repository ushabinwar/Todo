import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Header from '../src/components/Header'
import Create from '../src/components/Create'
import Show from '../src/components/Show'

function App() {
  const [task, settask] = useState([])

  return (
    
    <div className='bg-[#0D0D0D] w-full h-screen text-[#C4B59E] overflow-y-auto '>
      <div className='nav w-full h-[13vh] flex justify-between px-32 items-center '>
        <h4 className='text-xl font-bold '>XERO<span className='text-red-500'>TODO</span></h4>
        <i className="text-[1.4rem] ri-arrow-right-line"></i>
      </div>
      <div className='h-[87vh] w-[26%]  mx-auto '>
       <Header task={task}/>
       <Create task={task} settask={settask}/>
       <Show  task={task} settask={settask}/>
       </div>
    </div>

  )
}

export default App
