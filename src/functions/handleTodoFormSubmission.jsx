import { v4 as uuidv4 } from 'uuid';
import getUserID from './getUserID';
import saveTodosInLocalStorage from './saveTodosInLocalStorage';
import getTodosFromLocalStorage from './getTodosFromLocalStorage';

const handleTodoFormSubmission = (inputValue) => {
    const userID = getUserID();
    if (inputValue.trim() !== '') {
        const newTodo = {id: uuidv4(), task: inputValue};
        const todos = getTodosFromLocalStorage(userID);
        const updatedTodos = [...todos, newTodo];
        saveTodosInLocalStorage(userID, updatedTodos);
    }
}

export default handleTodoFormSubmission
