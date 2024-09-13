import { ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export const Card = ({ children, className, ...props }: Props) => {
  return (
    <div
      className={`bg-dark-500 rounded-sm border border-dark-300 px-6 py-4 text-light-100 ${className}`}
      data-testid={'card-element'}
      {...props}
    >
      {children}
    </div>
  )
}
