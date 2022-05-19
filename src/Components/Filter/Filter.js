import React from 'react'

export default function Filter() {
  return (
 
    <div className="btn-wrapper">
      <button className="check-btn me-2">All</button>
      <button className="check-btn me-2" id="completeBtn">Completed</button>
      <button className="check-btn me-2" id="incompleteBtn">Incomplete</button>
      <button className="check-btn " id="removeBtn">Remove All</button>
    </div>
    
  )
}
