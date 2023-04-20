import React from 'react'
import styles from './GlobexScrollButtons.module.scss'
interface ScrollButtonProps{
  onClickRight?: VoidFunction 
  onClickLeft?: VoidFunction 
}


const GlobexScrollButtons = ({onClickRight, onClickLeft}:ScrollButtonProps) => {
  return (
    <div className={styles.container}>
        <button onClick={onClickLeft} className={styles.leftArrow}>
          &lt;
        </button>
        <button onClick={onClickRight} className={styles.rightArrow}>
           &gt;
        </button>
    </div>
  )
}

export default GlobexScrollButtons