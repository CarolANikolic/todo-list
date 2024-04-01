import React, { useEffect, useState } from 'react';
import { FormFactory } from '../FormFactory/FormFactory';
import handleTodoFormSubmission from '../../functions/handleTodoFormSubmission';
import getUserID from '../../functions/getUserID';
import { CheckboxList } from '../CheckboxList/CheckboxList';
import getTodosFromLocalStorage from '../../functions/getTodosFromLocalStorage';
import deleteTodo from '../../functions/deleteTodo';
import styles from './TodoWrapper.module.css'

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
        <section className={styles.todoWrapper}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Todo</h1>
            </div>
            <FormFactory
                formStyle={styles.todoForm}
                type='todoForm'
                onSubmit={handleTodoFormSubmission}           
                btnStyle={styles.todoForm__button}
            />
            <CheckboxList list={allTodos} delete={deleteTodo}/>
        </section>
    );
};
