import handleFormSubmssion from "../functions/handleTodoFormSubmission"

const formConfigs = {
    todoForm: {
        fields: [
            { className:'todoForm__input', 
            type: 'text', 
            placeholder: 'Enter your task'}
        ],
        buttonLabel: 'Add Task',
        onSubmit: handleFormSubmssion
    }
}

export default formConfigs