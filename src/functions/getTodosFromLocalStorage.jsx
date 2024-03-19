const getTodosFromLocalStorage = (userID) => {
    const userTodos = localStorage.getItem(`todos_${userID}`);
    return userTodos ? JSON.parse(userTodos) : [];
}

export default getTodosFromLocalStorage