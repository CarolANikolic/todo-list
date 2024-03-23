import getUserID from "./getUserID"
import getTodosFromLocalStorage from "./getTodosFromLocalStorage"
import saveTodosInLocalStorage from "./saveTodosInLocalStorage"

const deleteTodo = (id) => {
    const userID = getUserID()
    const allTodos = getTodosFromLocalStorage(userID)
    const filteredTodos = allTodos.filter(todo => todo.id !== id)
    saveTodosInLocalStorage(userID, filteredTodos)
}

export default deleteTodo