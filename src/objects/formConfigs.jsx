import handleFormSubmssion from "../functions/handleTodoFormSubmission"
import styles from "../components/FormFactory/FormFactory.module.css"

const formConfigs = {
    todoForm: {
        fields: [
            { className: styles.form__input, 
            type: 'text', 
            placeholder: 'Enter your task'}
        ],
        buttonLabel: 'Add Task',
        onSubmit: handleFormSubmssion
    }
}

export default formConfigs