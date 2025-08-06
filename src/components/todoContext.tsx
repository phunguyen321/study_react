import {
  createContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number };

interface TodoContextType {
  todos: Todo[];
  dispatch: Dispatch<Action>;
}

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  dispatch: () => {},
});

const initialState: Todo[] = [];

function todoReducer(state: Todo[], action: Action): Todo[] {
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

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
