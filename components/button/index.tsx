import { MouseEvent } from 'react'

type ButtonProps = {
    children: React.ReactNode
    className?: string
    disabled?: boolean
    onClick?: () => void
    rest?: string[]
  }
  
export function PrimaryButton({ children, className, disabled, onClick, ...rest }: ButtonProps) {
    const btnStyles = "font-bold text-blue-200 bg-blue-700 dark:bg-blue-600"
    const btnInteractions = "hover:bg-blue-800 dark:hover:bg-blue-400"
    const themeStyles = "dark:highlight-white/20"
    const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles
    const disabledStyles = btnStyles + " " + themeStyles
  
    return (
      <Button 
        className={`${disabled ? disabledStyles : defaultStyles} ${className ? className : '' }`}
        onClick={onClick}
        disabled={disabled}   
        {...rest}>
        {children}
      </Button>
    )
}
  
export function SimpleButton({ children, className, disabled, onClick, ...rest }: ButtonProps) {
    const btnStyles = "text-slate-200 bg-slate-900 dark:bg-slate-600 dark:highlight-white/20 font-semibold"
    const btnInteractions = "hover:bg-slate-500 dark:hover:bg-slate-400"
    const themeStyles = "dark:highlight-white/20"
    const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles
    const disabledStyles = btnStyles + " " + themeStyles
    
    return (
      <Button 
        className={`${disabled ? disabledStyles : defaultStyles} ${className ? className : '' }`}
        onClick={onClick}
        disabled = {disabled}
        {...rest}>
        {children}
      </Button>
    )
}
  
export function LinkButton({ children, className, disabled, onClick, ...rest }: ButtonProps) {
    const btnStyles = "text-slate-200 bg-slate-900 dark:bg-slate-600 dark:highlight-white/20 font-semibold"
    const btnInteractions = "underline underline-offset-4 hover:underline-offset-8 hover:bg-slate-500 dark:hover:bg-slate-400"
    const themeStyles = "dark:highlight-white/20"
    const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles
    const disabledStyles = btnStyles + " " + themeStyles
  
    return (
      <Button 
        className={`${disabled ? disabledStyles : defaultStyles} ${className ? className : '' }`}
        onClick={onClick}
        disabled = {disabled}     
        {...rest}>
        {children}
      </Button>
    )
}
  
export function PlayfulButton({ children, className, disabled, onClick, ...rest }: ButtonProps) {
    const btnStyles = "font-semibold rounded-full"  
    const btnInteractions = "hover:bg-slate-500 dark:hover:bg-slate-400"
    const themeStyles = "text-slate-200 bg-slate-900 dark:bg-slate-600 dark:highlight-white/20"
    const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles
    const disabledStyles = btnStyles + " " + themeStyles
  
    return (
      <Button
        className={`${disabled ? disabledStyles : defaultStyles} ${className ? className : '' }`}
        onClick={onClick}
        disabled = {disabled}    
        {...rest}>
        {children}
      </Button>
    )
}
  
export function BrutalButton({ children, className, disabled, onClick, ...rest }: ButtonProps) {
    const btnStyles = "font-semibold tracking-wider uppercase"
    const btnInteractions = "hover:bg-slate-500 dark:hover:bg-slate-400"
    const themeStyles = "text-slate-200 bg-slate-900 dark:bg-slate-600 dark:highlight-white/20"
    const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles
    const disabledStyles = btnStyles + " " + themeStyles 
  
    return (
      <Button
        className={`${disabled ? disabledStyles : defaultStyles} ${className ? className : '' }`}
        onClick={onClick}
        disabled = {disabled}
        {...rest}>
        {children}
      </Button>
    )
}
  
export function ElegantButton({ children, className, disabled, onClick, ...rest }: ButtonProps) {
    const btnStyles = "font-medium tracking-wider uppercase"
    const btnInteractions = "hover:bg-slate-500 dark:hover:bg-slate-400"
    const themeStyles = "text-slate-200 bg-slate-900 dark:bg-slate-600 dark:highlight-white/20"
    const defaultStyles = btnStyles + " " + btnInteractions + " " + themeStyles
    const disabledStyles = btnStyles + " " + themeStyles
    
    return (
      <Button
        className={`${disabled ? disabledStyles : defaultStyles} ${className ? className : '' }`}
        onClick={onClick}
        disabled = {disabled}
        {...rest}>
        {children}
      </Button>
    )
}
  
function Button({ children, className, disabled = false, onClick = (() => {}), ...rest }: ButtonProps) {
    const defaultStyles = "flex items-center justify-center h-12 px-6 shadow-md focus:cursor-pointer disabled:text-grey-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-md"
    
    return (
      <button 
        /** Handle click on Button or Link */
        onClick={(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
          if (disabled) {
            return
          }
          event.preventDefault()
          onClick()
        }}
        className={`${defaultStyles} ${className ? className : '' }`}
        disabled={disabled}
        {...rest}
        >
        {children}
      </button>
    )
}