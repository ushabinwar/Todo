import React from 'react'

const Show = (props) => {
    const {task, settask} = props

  const DeleteHandler = (i) =>{
    const copyTask = [...task];
    let isValid = false;
    if(!copyTask[i].completed){
      isValid = confirm("Do you really want to delte")
    } 

    if(isValid || copyTask[i].completed ){
      copyTask.splice(i,1)
      settask(copyTask)
    }
  }

  const CompleteTaskToggele = (e , i)=>{
    // e.target.classList.toggle("bg-green-500")
    // e.target.classList.toggle("border-2")
    // e.target.nextSibling.classList.toggle("line-through")
    
    const copyTask = [...task]
    copyTask[i].completed = !task[i].completed
    settask(copyTask) 
  }
  
    let taskrender = (
        <h1 className="text-center text-[#FD5531]  font-semibold mt-32  text-2xl">
            No pending Tasks...
        </h1>
      );
      if(task.length > 0){
         taskrender = task.map((task, index)=>{
          return(
            <li key={index} >
              
              <div className='border-2 border-[#C4B59E] flex justify-between p-5 rounded-lg mt-4  '>
              <div className='flex items-center gap-5'>
              <div onClick={(e)=>CompleteTaskToggele(e, index)}
               className={`${task.completed ? "bg-green-500" : "border-2"} samllcircle w-[3vh] h-[3vh] rounded-full  border-red-600`}></div>
              
              <h1 className={`${task.completed && "line-through"} font-semibold text-[1.3rem]`}>{task.title}</h1>
              </div>
              <div className='flex gap-7 '>
              <i className="text-[1.4rem] ri-edit-2-line"></i>
              <i  onClick={() => DeleteHandler(index)}className="text-[1.4rem] ri-delete-bin-line"></i>
              </div>
            </div>
            </li>
          )
         })
      }
  return (
    <div>
        <ul >{taskrender}</ul>
    </div>
  )
}

export default Show