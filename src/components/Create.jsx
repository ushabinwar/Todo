import React, { useState } from 'react'


const Create = (props) => {
    const {task , settask} = props

    const [title, settitle] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        const newtask = {title, completed:false}
        const copytask = [...task];
        copytask.push(newtask);
        settask(copytask);
        settitle("")
    
    
      }
  return (
    <div className='w-full px-3 py-4 '>
          <form onSubmit={submitHandler} className='flex justify-between items-center'>
            <input className='w-[85%] bg-[#1E1E1E] text-[#C4B59E] border-2 p-2 rounded-2xl  border-none'
             type="text" 
             value={title}
             placeholder='write new task here'
             onChange={(e)=>settitle(e.target.value)}
             />
            <div className='h-[6vh] w-[6vh] rounded-full  bg-[#FD5531] flex items-center justify-center'>
              <button type='submit'><i className="text-[1.4rem] text-[black] font-bold ri-add-line"></i></button>
            </div>
          </form>
        </div>
  )
}

export default Create