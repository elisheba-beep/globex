import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { MdStar, MdStarBorder } from "react-icons/md";
import styles from "./ProductOpenPage.module.scss";
import useProduct from "../../../context/productContext";

const ProductReview = () => {
  const products = useProduct();
  const router = useRouter();
  const route = router.asPath;
  const lastItem = parseInt(route.substring(route.lastIndexOf("/") + 1));
  return (
    <div>
      {products.map((product) => {
        if (product.id === lastItem) {
          return (
            <div className={styles.ratingContainer}>
              <h3>
                <MdStar color="#F2C94C" />
                <MdStar color="#F2C94C" />
                <MdStar color="#F2C94C" />
                <MdStar color="#F2C94C" />
                <MdStarBorder />
                4.4
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
                aspernatur, molestias eum hic sit quis itaque maxime rem
                repellendus debitis sequi iusto quibusdam molestiae, modi
                perspiciatis quod id beatae odio laudantium sapiente quae
                voluptate? Laboriosam temporibus rerum est enim sit amet
                molestiae sunt vel, nesciunt error, id tempore nulla minus!{" "}
                <span style={{ color: "#00398F", cursor: "pointer" }}>
                  Read More
                </span>
              </p>
              <div className={styles.sizes}>
                <Image
                  src={product.url}
                  alt="colors"
                  width={140}
                  height={100}
                  className={styles.colorImg}
                />
                <Image
                  src={product.url}
                  alt="colors"
                  width={140}
                  height={100}
                  className={styles.colorImg}
                />
                <Image
                  src={product.url}
                  alt="colors"
                  width={140}
                  height={100}
                  className={styles.colorImg}
                />
              </div>
              <p>Anna Cloe | 28 September</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ProductReview;
