export type ActionType = string

export type CurrentDescriptionType = number | null

export type StatusType = boolean | null

export type Argument<T> = {
  [K in keyof T]: T[K]
}

export type Action<T> = Argument<T> & {
  type: ActionType
}
