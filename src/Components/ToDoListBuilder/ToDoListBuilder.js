import React, { useState } from 'react'
import Filter from '../Filter/Filter'
import Input from '../Input/Input'
import Output from '../Output/Output'
import SearchInput from '../SearchInput/SearchInput'
import './ToDoListBuilder.css'

export default function ToDoListBuilder() {
  let [submitValue, setValue] = useState([])

  const addItem = (inputValue) =>{
    const taskInfo = {
      id: Math.random().toString(36).substr(2, 9),
      task: inputValue,
      isClicked: false
    }
    setValue([...submitValue, taskInfo])
  }
  
  const clicked = (id) =>{
    
  }

  
    const removeIt = (id) =>{
      setValue([...submitValue.filter(item => item.id !== id)])
    }
  
  return (
    <section>

      <div className="wrapper">
        <SearchInput/>
        <h2 className="list__title">todo List</h2>
        <Input addItem={addItem} />
        
        <ul className='m-0 p-0 mt-2 list'>
          {submitValue.map((item, i) =>{
            return (
              <Output 
              key={i}
              item={item}
              completed={clicked}
              removed={removeIt}
              />

            )
          })}
        </ul>

        <Filter/>
      </div>

    </section>
  )
}
