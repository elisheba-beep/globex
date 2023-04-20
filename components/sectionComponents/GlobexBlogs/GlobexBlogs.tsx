import React from 'react'
import GlobexCard from '../../elements/GlobexCard/GlobexCard'
import styles from './GlobexBlogs.module.scss'
import clothesOne from "/public/images/clothesOne.png";
import clothesTwo from "/public/images/clothesTwo.png";
import clothesThree from "/public/images/clothesThree.png";

const blogs = [
    {
        src: clothesOne,
        id:0
    },
    {
        src: clothesOne,
        id:1
    },
    {
        src: clothesOne,
        id:2
    }
]

const GlobexBlogs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        
        <div className={styles.contentWrapper}>
          <div
            className={styles.content}
          >
      {blogs.map((blog)=> {
          return (
              <GlobexCard key={blog.id} src={blog.src} alt="featured-blogs" display="flex" >
              <div className={styles.box}>
                <p>Blog</p>
                <h3>Discover new ways to decorate your home</h3>
                <p>
                  Lorem ipsum dolor sit amet,aliqua consectetur adipiscing elit ut
                  ...
                </p>
                <h3>By Souha. H</h3>
              </div>
            </GlobexCard>
          )
      })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobexBlogs

