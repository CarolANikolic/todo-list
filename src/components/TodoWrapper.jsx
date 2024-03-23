import React, { useEffect, useState } from 'react';
import { FormFactory } from './FormFactory';
import handleTodoFormSubmission from '../functions/handleTodoFormSubmission';
import getUserID from '../functions/getUserID';
import { CheckboxList } from './CheckboxList';
import getTodosFromLocalStorage from '../functions/getTodosFromLocalStorage';
import deleteTodo from '../functions/deleteTodo';

export const TodoWrapper = () => {
    const userID = getUserID();
    const [ allTodos, setAllTodos ] = useState(getTodosFromLocalStorage(userID));

    // Update component CheckboxList when the userID and/or the storaged todos changes (e.g., add new item)
    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTodos = getTodosFromLocalStorage(userID);
            if (JSON.stringify(updatedTodos) !== JSON.stringify(allTodos)) {
                // Update the state if changes are detected
                setAllTodos(updatedTodos);
            }
        }, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, [userID, allTodos]); // Include all dependencies

    return (
        <div className="todoWrapper">
            <FormFactory
                formStyle='todoForm'
                type='todoForm'
                onSubmit={handleTodoFormSubmission}           
                btnStyle='todoForm__button'
            />
            <CheckboxList list={allTodos} delete={deleteTodo}/>
        </div>
    );
};
