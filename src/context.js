import { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

const initialState = {
  loading: false,
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (todo) => {
    dispatch({ type: "LOADING" });

    setTimeout(() => {
      dispatch({
        type: "ADD_TODO",
        payload: { id: uuidv4(), todo: todo, completed: false },
      });
    }, 500);
  };

  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });

  const updateTodo = (id) => dispatch({ type: "UPDATE_TODO", payload: id });

  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  const value = {
    todos: state.todos,
    loading: state.loading,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    updateTodo: updateTodo,
    clearCompleted: clearCompleted,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
