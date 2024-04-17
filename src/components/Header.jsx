import React from 'react'

const Header = (props) => {
    // const {task} = props
    const task = props.task
  return (
    <div><div>
    <div className='flex justify-between items-center py-5 px-10 border-[#C4B59E] border-2 rounded-[5vh] mb-4' >
      <div>
        <h1 className='font-bold text-2xl'>Todo Done</h1>
        <h5 className='font-semi-bold '>keep it up</h5>
      </div>
      <div className='circle w-[20vh] h-[20vh] bg-[#FD5531] rounded-full flex items-center justify-center'>
        <h1 className='text-4xl text-[black] font-bold'>{task.filter((t) => t.completed === true ).length}/{task.length}</h1>
      </div>
    </div>
</div></div>
  )
}

export default Header

