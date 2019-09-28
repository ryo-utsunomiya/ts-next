type Unbox<T> = T extends { [K in keyof T]: infer U} ? U : never

type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never
}

export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>

export type Actions =
  | CreatorsToActions<typeof import("./counter/actions")>
  | CreatorsToActions<typeof import("./todos/actions")>
