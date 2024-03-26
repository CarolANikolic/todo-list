import React from 'react';

export const CheckboxItem = (props) => {
  
  return (
    <div className='todoContainer'>
      <input type='checkbox'/>
      <span 
        contentEditable={true}
        onInput={
          (e) => props.update(
            props.id, e.target.textContent)
        }
      >
        {props.text}
      </span>
      <button 
        onClick={props.delete}
      >
        Delete
      </button>
    </div>
  )
}