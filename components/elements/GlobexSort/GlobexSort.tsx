import React, { useEffect, useState } from "react";
import styles from "./GlobexSort.module.scss";
const sortBy = [
  "Popularity",
  "Price - Low to High",
  "Price - High to Low",
  "Newest",
];

const GlobexSort = () => {
  const [selected, setSelected] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={styles.container}>
      <ul>
        {sortBy.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                console.log(selected);
                if (currentIndex === index) {
                  setSelected(!selected);
                }else{
                  setCurrentIndex(index)
                  
                }
              }}
             style={{fontWeight
            : `${currentIndex === index ? "700" : "400"}`}}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GlobexSort;
