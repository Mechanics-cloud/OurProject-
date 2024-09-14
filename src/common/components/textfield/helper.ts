export const getInputClasses = (error: boolean, type: string, className?: string): string => {

  const cls = {
    base: 'block w-full rounded py-1.5 px-3 box-border text-m text-light-900 placeholder-current font-400 leading-[24px] border-none outline outline-1 cursor-auto',
    focus: 'focus focus:outline-2 focus:outline-accent-500 focus:text-light-100',
    active: 'active:outline-light-100',
    hover: 'hover:outline-dark-100',
    disabled: 'disabled:cursor-not-allowed disabled:outline-1 disabled:outline-dark-100 disabled:text-dark-100',
    error: error ? 'outline-1 outline-danger-500' : 'outline-light-900',
  }

  const main = Object.values(cls).join(' ')

  switch (type) {
    case 'password':
      return `${main} pr-11 ${className}`
    case 'search':
      return `${main} pl-11 ${className}`
    default:
      return `${main} ${className}`
  }
}