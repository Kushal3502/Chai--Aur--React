import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todo, setTodo] = useState([]);

  const addTodo = (message) => {
    setTodo((prev) => [
      ...prev,
      { id: Date.now(), message: message, completed: false },
    ]);
  };

  const updateTodo = (id, message) => {
    setTodo((prev) => prev.map((item) => (item.id === id ? message : item)));
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id != id));
  };

  const isCompleted = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    if (todos && todos.length > 0) setTodo(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider
      value={{ todo, addTodo, updateTodo, deleteTodo, isCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todo.map((todoItem) => (
              <div key={todoItem.id} className="w-full">
                <TodoItem todo={todoItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
