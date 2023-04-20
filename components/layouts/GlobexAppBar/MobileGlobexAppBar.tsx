import React, { useEffect, useState } from "react";
import logoBlue from "/public/images/logoBlue.png";
import imageOne from "/public/images/image-one.png";
import styles from "./GlobexAppBar.module.scss";
import Image from "next/image";
import GlobexSearch from "../../elements/GlobexSearch/GlobexSearch";
import GlobexUser from "../../elements/GlobexUser/GlobexUser";
import { MdClose, MdSearch } from "react-icons/md";

const MobileGlobexAppBar = () => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch((prev) => !prev);
  };

  return (
    <div>
      {search ? (
        <div className={styles.mobileContainer}>
          <input type="text" className={styles.input} placeholder='search here'/>
          <MdClose onClick={handleSearch}/>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          <GlobexUser userName="Anne Doe" src={imageOne} />
          <MdSearch onClick={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default MobileGlobexAppBar;
