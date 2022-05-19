import React, { useState } from 'react'

export default function Input({addItem}) {
   const [inputValue, setInputValue] = useState('')
    
   const SubmitHandler = (e) =>{
     e.preventDefault()
     e.target.reset()
     addItem(inputValue)
   }

   const InputHanlder = (e) =>{
     setInputValue(e.target.value)
   }

  return (

    <form onSubmit={SubmitHandler} className="input-wrapper mb-3">
      <input
       onChange={InputHanlder}  
       className="list-input" 
       type="text"
        name="search" placeholder="Add task" required />
      <button className="button" id="addBtn" type="submit"><i className='bx  bx-plus'></i></button>
    </form>
    
  )
}
