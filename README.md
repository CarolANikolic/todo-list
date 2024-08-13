<img src="./public/images/todoapp.png" width=100% alt="todo app screenshot">

Todo is a personal project developed to explore React. The basic idea of the Todo is a CRUD (Create, Read, Update, Delete) using the localStorage for data persistence to save the input individually for each user. With Todo, you can add new tasks to the list, update existing tasks, mark them as done, and delete them.

### Check out Todo List [here](https://mytodotaskapp.netlify.app)

## Responsive Design

The design is created by me and it follows a mobile-first workflow, adapting to all screen sizes.

## Development Process

- Creating a react project;
- Cleaning up unused files;
- Creating a general factory Form;
- Define the configurations for the form as an object;
- Handle form submission: save entry on localStorage;
- Create a component to display the entered task;
- Access tasks saved on the localStorage and display it;
- Create a deleting mechanism to delete from localStorage;
- Use the UseEffect hook to set up time intervals to check for changes on localStorage to update the displayed list of tasks;
- Create a function to update a task on localStorage by using the task ID.
- Style background;
- Style components;
- Create style variables globally;
- Adjust design, including font size for various screens;
- Set up routes, including creating an error page;
- Fix the problem of allowing empty inputs;
- Deploy;
- Make final style adjustments;
- Create and include favicon.

## Built with

- Semantic HTML5 markup;
- CSS
- React 

## Technologies and Tools

- [HTML5](https://html.com)
- [CSS3](https://www.w3.org/Style/CSS/)
- [React](https://react.dev)

## Requirements

To work with the code, you will need, before you begin, to install on your machine: Node.Js, and Git and to have a source-code editor such as [VSCode](https://code.visualstudio.com).
You will also need to download all the dependencies used in this project by using this command in your terminal:

```
npm install
```

To run de project on your machine, open http://localhost:3000/ in your browser, and on the terminal use de following command:
```
npm start 
```

## What I Learned

### React and React Hooks

- I learned how to set up a React project, what is its structure, and what is the usage of pre-configured files. Also, I learned how to use two React hooks: useState and useEffect. Created within a component, useState helps manage and keep track of changes in the state of a variable, so that the component changes dynamically based on the variable state. As for the useEffect hook, it is responsible for performing side effects on the component, like fetching data, I used it useEffect to periodically listen to changes on the localStorage, so it could sync up the changes made on the localStorage, updating the component accordingly.

~~~
export const TodoWrapper = () => {
    const userID = getUserID();
    const [ allTodos, setAllTodos ] = useState(getTodosFromLocalStorage(userID));

    // Update component CheckboxList when the userID and/or the stored todos changes (e.g., add new item)
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
~~~

### localStorage

- This project allowed me to learn more about data persistence. In a previous project (reading-shelf), my first idea was to create a todo-list, but my focus was to learn about PostgreSQL, so I ended up changing the project theme and leaving the todo project to explore localStorage as it can keep an individual, track of the user input. The methods used were setItem() and getItem(). 

~~~
// setItem will save the todos associated with a user ID, is this id that will allow us to get hold of the todos for that specific user.

const saveTodosInLocalStorage = (userID, todos) => {
    localStorage.setItem(`todos_${userID}`, JSON.stringify(todos));
}

export default saveTodosInLocalStorage
~~~

~~~
//getItem will search in local storage for the todos associated with the user ID.

const getTodosFromLocalStorage = (userID) => {
    const userTodos = localStorage.getItem(`todos_${userID}`);
    return userTodos ? JSON.parse(userTodos) : [];
}

export default getTodosFromLocalStorage
~~~

### React Router Library
- Differently from Next.js which does not require us to set up routes (it is inferred from the file structure), in React we need to set up all the routes, including error page routes. For this project, because it is a landing page the configuration is only for the main page, and a catch-all error page.

~~~
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
~~~

### Made with :heart: by [Caroline Almeida Nikolic](https://www.linkedin.com/in/caroline-nikolic/)