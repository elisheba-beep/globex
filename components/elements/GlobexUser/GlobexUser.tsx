import React from 'react'
import Image from 'next/image';
import styles from './GlobexUser.module.scss';

interface UserProps{
    src: string | any,
    userName: string
}

const GlobexUser = ({src, userName}: UserProps) => {
  return (
    <div className={styles.container}>
        <Image src={src} alt='user-profile' width={39} height={39} className={styles.image}/>
        <p className={styles.userName}>{userName}</p>
    </div>
  )
}

export default GlobexUser