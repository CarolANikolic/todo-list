import getUserID from "./getUserID";
import getTodosFromLocalStorage from "./getTodosFromLocalStorage";
import saveTodosInLocalStorage from "./saveTodosInLocalStorage";

const updateTodo = (id, content) => {
    const userID = getUserID();
    const todos = getTodosFromLocalStorage(userID);
    const todoIndex = todos.findIndex(todo => todo.id === id)

    if (todoIndex !== -1) {
        todos[todoIndex].task = content;
        saveTodosInLocalStorage(userID, todos)
    } else {
        console.log('Todo with ID', id, 'not found.');
    }
}

export default updateTodo;
