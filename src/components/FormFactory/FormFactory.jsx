import React, { useState } from 'react'
import formConfigs from '../../objects/formConfigs';

export const FormFactory = (props) => {
    const [inputValue, setInputValue] = useState("");
    const formConfig = formConfigs[props.type];

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(inputValue);
        setInputValue(""); // Clear input after submission
    };
    
    return (
    <form 
    className={props.formStyle}
    onSubmit={handleSubmit}>
        {formConfig.fields.map((field, index) => (
            <input key={index} {...field} 
            value={inputValue} 
            onChange={(e)=> setInputValue(e.target.value)}/>
        ))}
        <button className={props.btnStyle} type='submit'>{formConfig.buttonLabel}</button>
    </form>
    )
}