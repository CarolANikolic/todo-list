import React, { useState } from 'react';

export const CheckboxItem = (props) => {
  const [content, setContent] = useState(props.text);

  const handleChange = (e) => {
    setContent(e.target.value);
    props.update(props.id, content);
  };

  return (
    <div className='todoContainer'>
      <input type='checkbox'/>
      <input 
        type="text"
        value={content}
        onChange={handleChange}
      />
      <button 
        onClick={props.delete}
      >
        Delete
      </button>
    </div>
  );
};
