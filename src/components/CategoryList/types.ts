export type CategoryElementType = {
  name: string
  isActive: boolean
}

export type CurrentCategoryType = number

export type CategoryListType = {
  current: CurrentCategoryType
  list: Array<string>
}
