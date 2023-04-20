import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import styles from "./GlobexDiscount.module.scss";

const GlobexDiscount = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden((prevIsHidden) => !prevIsHidden);
  };
  return (
    <div
      className={styles.container}
      style={{ display: `${isHidden ? "none" : "flex"}` }}
    >
      <p className={styles.text}>
        Invite Friends and get 50% off on your next purchase
      </p>
      <p className={styles.blueText}>Invite Now</p>
      <IoIosClose className={styles.close} onClick={handleClick} />
    </div>
  );
};

export default GlobexDiscount;
