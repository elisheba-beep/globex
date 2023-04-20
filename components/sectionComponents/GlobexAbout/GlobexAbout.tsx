import React from "react";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import about from "/public/images/about.png";
import styles from "./GlobexAbout.module.scss";

export const GlobexAbout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h1>About Us</h1>
        <h2>Business Name</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi
          cursus sed sodales molestie proin dictum gravida. Porttitor maecenas
          tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis
          eu sed. Sapien et montes, duis tempor euismod augue cras eu eget.
          Risus suspendisse mauris ullamcorper felis a, quam. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed
          sodales molestie proin dictum gravida. Porttitor maecenas tincidunt
          ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed.
          Sapien et montes, duis tempor euismod augue cras eu eget. Risus
          suspendisse mauris ullamcorper felis a, quam.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales
          molestie proin dictum gravida. Porttitor maecenas
        </p>
        <h3>Contact information</h3>
        <p>+91 1256378409</p>
        <p>Someting@random.com</p>
        <a
          href="https://www.google.com/maps/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GlobexButton variant="black">Directions</GlobexButton>
        </a>
      </div>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${"images/about.png"})` }}
      />
    </div>
  );
};
