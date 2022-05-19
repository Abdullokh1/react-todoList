import React from 'react'
import './Output.css'

export default function Output({item,completed,removed}) {
  return (
    <>
      <li onClick={() => completed(item.id)} className='d-flex justify-content-between align-items-center'>
        <div onClick={() => completed(item.id)}  style={{textDecoration: item.isClicked ? 'line-through' : 'none'}}>
          {item.task}
        </div>
        <i onClick={() => removed(item.id)} className='bx bxs-trash-alt' ></i>
      </li>    
    </>
  )
}
