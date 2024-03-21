import React from 'react';
import { CheckboxItem } from './CheckboxItem';

export const CheckboxList = (props) => {
    return (
        <div>
            {props.list.map(item => (
                <CheckboxItem key={item.id} text={item.task} />
            ))}
        </div>
    );
};
