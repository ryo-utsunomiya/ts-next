import { Actions } from "../actions"

interface Todo {
  id: string
  done: boolean
  task: string
}

interface State {
  todos: Todo[]
}

export function initialState(injects?: State) : State {
  return {
    todos: [],
    ...injects,
  }
}

export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    case "TODOS_ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload]}
    case "TODOS_DONE_TODO":
      const doneTodo = state.todos.find(t => t.id === action.payload.id)
      if (doneTodo) {
        doneTodo.done = true
      }
      return {
        ...state,
      }
    default:
      return state
  }
}
