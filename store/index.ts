import { createStore, Store } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { initialState, reducer } from "./reducer"

export type StoreState = ReturnType<typeof initialState>
export type ReduxStoreInstance = Store<StoreState>

export function initStore(state = initialState()) {
  return createStore(reducer, state, composeWithDevTools())
}
