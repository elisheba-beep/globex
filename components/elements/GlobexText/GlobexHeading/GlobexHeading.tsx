import React from 'react'
import styles from './GlobexHeading.module.scss';

interface HeadingProps{
    heading: string,
    colour?: string
}

const GlobexHeading = ({heading, colour}:HeadingProps) => {
  return (
   <h1 className={styles.heading} style={{color: `${colour ?? '#272727'}` }} >{heading}</h1>
  )
}

export default GlobexHeading