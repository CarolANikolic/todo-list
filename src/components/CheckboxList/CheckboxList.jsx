import React from 'react';
import { CheckboxItem } from '../CheckboxItem/CheckboxItem';
import updateTodo from '../../functions/updateTodo';
import styles from '../CheckboxList/CheckboxList.module.css'

export const CheckboxList = (props) => {    
    return (
        <div className={styles.list}>
            {props.list.map(item => (
            <CheckboxItem 
                key={item.id} 
                text={item.task} 
                id={item.id} 
                delete={() => props.delete(item.id)} 
                update={updateTodo}
            />
            ))}
        </div>
    );
};
