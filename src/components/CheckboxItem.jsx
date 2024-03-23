import React from 'react'

export const CheckboxItem = (props) => {
  return (
    <div className='todoContainer'>
      <input type='checkbox'/>
      <span>{props.text}</span>
      <button onClick={() => props.delete()}>Delete</button>
    </div>
  )
}
