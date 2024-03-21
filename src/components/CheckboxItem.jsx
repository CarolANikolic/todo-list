import React from 'react'

export const CheckboxItem = (props) => {
  return (
    <div>
      <input type='checkbox'/>
      <span>{props.text}</span>
      <button>Delete</button>
    </div>
  )
}
