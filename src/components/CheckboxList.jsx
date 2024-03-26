import React from 'react';
import { CheckboxItem } from './CheckboxItem';
import updateTodo from '../functions/updateTodo';

export const CheckboxList = (props) => {    
    return (
        <div>
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
