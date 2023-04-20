import React from 'react'
import styles from './GlobexSubText.module.scss';

interface SubTextProps{
    subText: string,
    color?: string
}

const GlobexSubText = ({subText, color}: SubTextProps) => {
  return (
   <h3  className={styles.subText} style={{color: `${color ?? '#565656'}`}}>{subText}</h3>
  )
}

export default GlobexSubText