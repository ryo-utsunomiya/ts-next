import types from "./types"

export function increment() {
  return { type: types.increment }
}

export function decrement() {
  return { type: types.decrement }
}

export function setCount(amount: number) {
  return { type: types.setCount, payload: { amount } }
}
