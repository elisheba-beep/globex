import React from "react";
import styles from "./GlobexCategories.module.scss";
import categoriesImg from "/public/images/categories.png";
import men from "/public/images/men.png";
import women from "/public/images/women.png";
import kids from "/public/images/kids.png";
import western from "/public/images/western-wear.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";

const categories = [
  {
    category: "categories",
    url: categoriesImg,
  },
  {
    category: "men",
    url: men,
  },
  {
    category: "women",
    url: women,
  },
  {
    category: "kids",
    url: kids,
  },
  {
    category: "western wears",
    url: western,
  },
];

const GlobexCategories = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.categoriesContainer}>
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={styles.categoryCard}
              onClick={() => {
                if (category.category == "men") {
                  router.push(Routes.men);
                } else if (category.category == "women") {
                  router.push(Routes.women);
                } else {
                  router.push(Routes.products);
                }
              }}
            >
              <Image
                src={category.url}
                alt="category-img"
                width={62}
                height={62}
              />
              <p>{category.category}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GlobexCategories;
