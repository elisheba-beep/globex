import React from 'react'
import styles from './GlobexSubHeading.module.scss'

interface SubHeadingProps{
    subHeading: string
    color?: string
}

const GlobexSubHeading = ({subHeading, color}: SubHeadingProps) => {
  return (
   <h1 className={styles.subHeading} style={{color: `${color ?? '#272727'}`}}>{subHeading}</h1>
  )
}

export default GlobexSubHeading