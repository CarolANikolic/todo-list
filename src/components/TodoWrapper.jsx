import React from 'react'
import { FormFactory } from './FormFactory'
import handleTodoFormSubmission from '../functions/handleTodoFormSubmission'

export const TodoWrapper = () => {
    return (
    <div className="todoWrapper">
        <FormFactory
            formStyle='todoForm'
            type='todoForm'
            onSubmit={handleTodoFormSubmission}           
            btnStyle='todoForm__button'
        />
    </div>
    )
}
