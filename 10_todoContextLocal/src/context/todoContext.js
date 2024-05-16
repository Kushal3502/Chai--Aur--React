import { createContext, useContext } from "react";

export const todoContext = createContext({
  todo: [
    {
      id: 1,
      message: "todo",
      completed: false,
    },
  ],
  addTodo: (message) => {},
  updateTodo: (id, message) => {},
  deleteTodo: (id) => {},
  isCompleted: (id) => {},
});

export const TodoProvider = todoContext.Provider;

export const useTodo = () => {
  return useContext(todoContext);
};
