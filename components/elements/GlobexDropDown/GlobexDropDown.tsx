import React from "react";

import styles from "./GlobexDropDown.module.scss";

interface DropDownProps {
  tag: string;
  children: React.ReactNode;
}

const GlobexDropDown = ({ children, tag }: DropDownProps) => {
  return (
    <select className={styles.container}>
      <option>{tag}</option>

      {children}
    </select>
  );
};

export default GlobexDropDown;
