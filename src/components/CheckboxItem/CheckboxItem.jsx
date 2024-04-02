import React, { useState } from 'react';
import styles from '../CheckboxItem/CheckBoxItem.module.css';

export const CheckboxItem = (props) => {
  const [content, setContent] = useState(props.text);

  const handleChange = (e) => {
    setContent(e.target.value);
    props.update(props.id, content);
  };

  return (
    <div className={styles.checkboxItem}>
      <input type='checkbox'/>
      <input 
        className={styles.textInput}
        type="text"
        value={content}
        onChange={handleChange}
      />
      <button 
        onClick={props.delete}
      >
      </button>
    </div>
  );
};
