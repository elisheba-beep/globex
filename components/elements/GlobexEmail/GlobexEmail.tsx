import React from 'react'
import {IoMdMail } from 'react-icons/io'
import styles from './GlobexEmail.module.scss'


const GlobexEmail = () => {
  return (
    <div className={styles.container}>
        <IoMdMail className={styles.icon}/>
        <input placeholder='Enter your email' className={styles.input}/>
    </div>
  )
}

export default GlobexEmail