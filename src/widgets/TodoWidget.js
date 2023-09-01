import { TodoContext } from "Contexts/TodoContext";
import { CheckCircle2, Circle, XCircle } from "lucide-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

const TodoWidget = () => {
  // Get the context from TodoContext
  const context = useContext(TodoContext);
  const {
    todoList,
    addTask,
    allTasks,
    completedTasks,
    markUnmarkCompleted,
    deleteTask,
    updateCompletedTasks
  } = context;

  // State to manage the input value for adding tasks
  const [todo, setTodo] = useState("");
  // Ref to scroll to the most recently added task
  const scrollRef = useRef(null);

  // Function to handle changes in the input field
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // Function to handle adding a new task
  const handleAdd = () => {
    const id = uuid();
    addTask(id, todo);
    setTodo(""); // Clear the input field
  };

  // Effect to scroll to the most recently added task
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behaviour: "smooth",
      block: "nearest",
    });
  }, [todoList]); // eslint-disable-line

  // Effect to update completed tasks
  useEffect(()=>{
    updateCompletedTasks()
  },[]) // eslint-disable-line

  return (
    // Main container for the TodoWidget component
    <div className="flex flex-col sm:flex-row justify-between bg-teal-50 p-2">
      {/* Title */}
      <div className="flex text-2xl font-bold text-teal-700 animate-slideRight">
        To-do
      </div>
      {/* Add Task Section */}
      <div className="flex flex-col w-full sm:w-3/5 justify-center items-center p-2">
        <div className="flex flex-col w-2/3 p-2 gap-4">
          {/* Input field for new task */}
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="todo"
              className="text-lg font-semibold text-teal-600 px-2"
            >
              To-do
            </label>
            <input
              name="todo"
              type="text"
              value={todo}
              onChange={handleChange}
              className="flex p-2 rounded-xl border-2 outline-none"
            />
          </div>
          {/* Add button */}
          <div className="flex justify-center w-full">
            <button
              onClick={handleAdd}
              disabled={todo === "" && true}
              className="flex justify-center items-center p-2 rounded-2xl disabled:bg-teal-900 disabled:text-zinc-600 bg-teal-400 text-zinc-700 w-1/3 font-semibold hover:bg-teal-500 hover:text-zinc-800 duration-200"
            >
              Add
            </button>
          </div>
        </div>
        {/* List of Tasks */}
        <div className="flex flex-col items-center p-2 gap-2 w-full h-[40vh] overflow-auto">
          {todoList.map((todo) => {
            return (
              // Scroll to this element on adding a new task
              <div ref={scrollRef} className="flex justify-center w-full">
                {/* Task item */}
                <div
                  className={`flex ${
                    todo.completed === true
                      ? "bg-teal-600 text-zinc-800"
                      : "bg-teal-200 text-zinc-700"
                  } text-lg rounded-xl p-2 w-3/4 sm:w-2/3 justify-between items-center animate-scaleY origin-top duration-200`}
                >
                  {/* Task completion icon */}
                  <div
                    onClick={() => markUnmarkCompleted(todo.id)}
                    className="flex items-center w-4/5 gap-2 p-2 hover:cursor-pointer"
                  >
                    {todo.completed === true ? (
                      <CheckCircle2 className="bg-green-500 rounded-full text-zinc-100" />
                    ) : (
                      <Circle />
                    )}
                    {todo.todo}
                  </div>
                  {/* Delete task button */}
                  <XCircle
                    onClick={() => deleteTask(todo.id)}
                    className="flex hover:cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Statistics Section */}
      <div className="flex flex-col w-full sm:w-1/5 items-center p-2 gap-8">
        <div className="flex text-xl text-teal-600 font-semibold">Statistics</div>
        {/* Total tasks and completed tasks */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center w-full justify-between gap-2">
            <span className="text-lg text-teal-700 font-semibold">All tasks :</span>
            <span className="font-semibold">{allTasks}</span>
          </div>
          <div className="flex items-center w-full justify-between gap-2">
            <span className="text-lg text-teal-700 font-semibold">Completed tasks :</span>
            <span className="font-semibold">{completedTasks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoWidget;
