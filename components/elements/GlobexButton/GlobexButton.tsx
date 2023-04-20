import React, { CSSProperties } from 'react'
import styles from './GlobexButton.module.scss';

interface ButtonProps{
    children: React.ReactNode
    variant: 'round' | 'white' | 'black' |'filled',
    onClick?: VoidFunction,
    style?:CSSProperties
}

const GlobexButton = ({children, variant, onClick, style}:ButtonProps) => {
  return (
    <button className={variant == 'filled' ? styles.filled : (variant == 'round' ? styles.round : (variant === 'white' ? styles.white : styles.black))} onClick={onClick} style={style}>{children}</button>
  )
}

export default GlobexButton