import { ComponentProps } from 'react'

import { Slot } from '@radix-ui/react-slot'

type Props = { asChild?: boolean } & ComponentProps<'div'>

export const Card = ({ asChild, children, className, ...props }: Props) => {
  const Component = asChild ? Slot : 'div'

  return (
    <Component
      className={`bg-dark-500 rounded-sm border border-dark-300 px-6 py-4 text-light-100 ${className}`}
      data-testid={'card-element'}
      {...props}
    >
      {children}
    </Component>
  )
}
