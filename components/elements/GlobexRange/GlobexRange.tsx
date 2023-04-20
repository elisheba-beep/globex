import React from 'react'

import styles from './GlobexRange.module.scss';

const GlobexRange = () => {
  return (
    <form action="/action_page.php" method="get">
    <input type="range" min="0" max="50" className={styles.range}/>
  </form>
  )
}

export default GlobexRange