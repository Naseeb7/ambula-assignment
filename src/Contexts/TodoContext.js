import { fakeTodos } from "data"; // Importing fakeTodos data
import { createContext, useState } from "react";

// Create a new context for managing todo-related state
export const TodoContext = createContext();

// Define the TodoState component to manage todo-related state
export const TodoState = (props) => {
  // State to manage todo list and completed tasks count
  const [todoList, setTodoList] = useState(fakeTodos); // Initialize with fakeTodos data
  const [completedTasks, setCompletedTasks] = useState(0);
  const allTasks = todoList.length; // Total number of tasks in the list

  // Function to add a new task to the todo list
  const addTask = (id, todo) => {
    setTodoList((prev) => [...prev, { id: id, todo: todo, completed: false }]);
  };

  // unction to update completed tasks
  const updateCompletedTasks=()=>{
    const completedArr = todoList.filter((task) => task.completed === true);
    setCompletedTasks(completedArr.length);
  }

  // Function to mark/unmark a task as completed
  const markUnmarkCompleted = (id) => {
    const idIndex = todoList.findIndex((obj) => obj.id === id);
    const task = todoList[idIndex];
    if (task.completed === false) {
      task.completed = true;
    } else {
      task.completed = false;
    }
    updateCompletedTasks()
  };

  // Function to delete a task from the todo list
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  // Provide the defined values and functions through the context
  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTask,
        allTasks,
        completedTasks,
        markUnmarkCompleted,
        deleteTask,
        updateCompletedTasks
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
