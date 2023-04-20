import React from "react";
import styles from "./GlobexPrice.module.scss";

interface PriceProps {
  newPrice: string;
  oldPrice: string;
  discount: string;
  color?: string;
}

const GlobexPrice = ({ newPrice, oldPrice, discount, color }: PriceProps) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.newPrice}>{newPrice}</h3>
      <p className={styles.oldPrice}>{oldPrice}</p>
      <p
        style={{
          color: color ?? "#0A8200",
        }}
        className={styles.discount}
      >
        ({discount} off)
      </p>
    </div>
  );
};

export default GlobexPrice;
