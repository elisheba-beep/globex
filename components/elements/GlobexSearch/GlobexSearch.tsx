import React from 'react'
import { IoIosSearch } from 'react-icons/io'

import styles from './GlobexSearch.module.scss';

interface SearchProps{
  value?: string
}

const GlobexSearch = ({value}:SearchProps) => {
  return (
    <div className={styles.container}>
        <input className={styles.searchBox} placeholder='search here' value={value}/>
        <IoIosSearch className={styles.search}/>
    </div>
  )
}

export default GlobexSearch