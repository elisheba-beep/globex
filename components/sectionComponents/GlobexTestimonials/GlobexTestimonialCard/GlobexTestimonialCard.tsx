import React from 'react'
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import styles from './GlobexTestimonialCard.module.scss';

interface TestimonialCardProps{
    userImage : string | any
    rating: string
    testimonial: string
}

const GlobexTestimonialCard = ({userImage, rating, testimonial}: TestimonialCardProps) => {
  return (
    <div className={styles.container}>
        <div className={styles.userImage} style={{backgroundImage: `url(${userImage})`}}/>
        <div className={styles.rating}>
            <IoIosStar/>
            <IoIosStar/>
            <IoIosStar/>
            <IoIosStar/>
            <IoIosStarOutline/>
            <span>{rating}</span>
        </div>
        <div className={styles.testimonial}>

        <p >{testimonial}</p>
        </div>
    </div>
  )
}

export default GlobexTestimonialCard