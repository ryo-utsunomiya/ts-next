import { Actions } from "../actions"

interface State {
  count: number
}

export function initialState(injects?: State): State {
  return {
    count: 0,
    ...injects,
  }
}

export function reducer(state = initialState(), action: Actions): State {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      return { ...state, count: state.count + 1 }
    case "COUNTER_DECREMENT":
      return { ...state, count: state.count - 1 }
    case "COUNTER_SET_COUNT":
      return { ...state, count: action.payload.amount }
    default:
      return state
  }
}
