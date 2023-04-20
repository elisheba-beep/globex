import React from "react";
import Image from "next/image";

import styles from "./GlobexCard.module.scss";

interface CardProps {
  src: string | any;
  alt?: string;
  width?: number;
  height?: number;
  layout?:"fixed" | "fill" | "responsive" | "intrinsic" |"raw" ,
  objectFit?: any
  display?: "flex" | "block" | "reverse";
  children: React.ReactNode;
  onClick?: VoidFunction
}

const GlobexCard = ({
  src,
  alt,
  children,
  width,
  height,
  display,
  layout,
  objectFit,
  onClick
}: CardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        display: `${
          display == "block" ? "block" : display == "flex" ? "flex" : "flex"
        }`,
        flexDirection: `${
          display == "block"
            ? "column"
            : display == "flex"
            ? "row"
            : "row-reverse"
        }`,
      }}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        objectFit={objectFit}
        className={styles.image}
        style={{
          borderRadius: `${
            display == "block"
              ? "10px 10px 0 0"
              : display == "flex"
              ? "10px 0 0 10px "
              : "0 10px 10px 0"
          }`,
        }}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default GlobexCard;
