import React from 'react'
import styles from './GlobexHeading3.module.scss'

interface Heading3Props{
    heading3: string
}

const GlobexHeading3 = ({heading3}:Heading3Props) => {
  return (
   <h3 className={styles.heading3}>{heading3}</h3>
  )
}

export default GlobexHeading3