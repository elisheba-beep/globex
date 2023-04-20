import React, { useState } from 'react'
import styles from './GlobexCheckbox.module.scss';

interface CheckboxProps{
    tag: string,
    number: number,
    onCheck: VoidFunction,
    onUncheck: VoidFunction
    checked?: boolean,
}

const GlobexCheckbox = ({tag, number, onCheck, checked, onUncheck}: CheckboxProps) => {
  const [ticked, setTicked] = useState(true);
  const handleCheck = () => {
    setTicked(!ticked);
  }
  return (
    <div className={styles.container}>
        <input type="checkbox" name="" id="" defaultChecked={true} checked={ticked} className={styles.checkbox} onClick={()=>{
          handleCheck();
          ticked && onUncheck();
          !ticked && onCheck();
        }}/>
        <p className={styles.tag}>{tag}  <span className={styles.number}>({number})</span></p>
    </div>
  )
}

export default GlobexCheckbox