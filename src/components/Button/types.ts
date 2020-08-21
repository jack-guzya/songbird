export interface IButton {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  className: string
}
