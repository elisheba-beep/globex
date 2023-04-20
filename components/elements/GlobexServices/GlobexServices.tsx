import React from "react";
import { IoIosFlag, IoIosHeadset, IoIosSettings, IoMdBriefcase, IoMdCar } from "react-icons/io";

import styles from "./GlobexServices.module.scss";

const GlobexServices = () => {
  return (
    <div className={styles.container}>

      <div className={styles.service}>
        <IoIosFlag />
        <p className={styles.mainText}>Locally Owned</p>
        <p className={styles.subText}>We have local business and sell best quality clothes</p>
      </div>
      
      <div className={styles.service}>
        <IoMdCar/>
        <p className={styles.mainText}>Fast Delivery</p>
        <p className={styles.subText}>We provide fast delivery to our customers</p>
      </div>

      <div className={styles.service}>
        <IoMdBriefcase/>
        <p className={styles.mainText}>Easy Return</p>
        <p className={styles.subText}>We provide easy return policy</p>
      </div>

      <div className={styles.service}>
        <IoIosHeadset/>
        <p className={styles.mainText}>Online Support</p>
        <p className={styles.subText}>We give 24 hours online support</p>
      </div>

      <div className={styles.service}>
       <IoIosSettings/>
        <p className={styles.mainText}>Best Offers</p>
        <p className={styles.subText}>We give best offers to our customers</p>
      </div>

    </div>
  );
};

export default GlobexServices;
