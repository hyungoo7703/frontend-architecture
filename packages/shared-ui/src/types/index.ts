export type ButtonVariant = 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
}

export type CardVariant = 'default' | 'outlined' | 'elevated'

export interface CardProps {
  title: string
  description?: string
  icon?: string
  variant?: CardVariant
  clickable?: boolean
}

export type IconSize = 'small' | 'medium' | 'large'
export type IconColor = 'primary' | 'secondary' | 'danger'

export interface IconProps {
  name: string
  size?: IconSize
  color?: IconColor
}

export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

export interface TableProps {
  columns: TableColumn[]
  data: any[]
  searchable?: boolean
  pageable?: boolean
  itemsPerPage?: number
}