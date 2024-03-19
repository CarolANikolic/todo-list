const saveTodosInLocalStorage = (userID, todos) => {
    localStorage.setItem(`todos_${userID}`, JSON.stringify(todos));
}

export default saveTodosInLocalStorage