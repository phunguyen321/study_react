import React, { createContext, useReducer } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const TodoContext = createContext({
  todos: [] as Todo[],
  dispatch: (action: any) => {},
});

const initialState: any = [];

function todoReducer(state: Todo[], action: any): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload, done: false }];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
