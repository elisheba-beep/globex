import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import styles from "./GlobexGrid.module.scss";

interface GridProps {
  imageOne?: string;
  imageTwo?: string;
  imageThree?: string;
  imageFour?: string;
  imageFive?: string;
  imageSix?: string;
  gap?: string;
  grid: "random" | "3col" | "4col" | "1col";
  children?: React.ReactNode;
  onClick1?: VoidFunction;
  onClick2?: VoidFunction;
  onClick3?: VoidFunction;
  onClick4?: VoidFunction;
  onClick5?: VoidFunction;
  onClick6?: VoidFunction;
}

const GlobexGrid = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  grid,
  children,
  gap,
  onClick1,
  onClick2,
  onClick3,
  onClick4,
  onClick5,
  onClick6,
}: GridProps) => {
  const router = useRouter();
  return grid == "random" ? (
    <div className={styles.container}>
      <div style={{ backgroundImage: `url(${imageOne})` }} onClick={onClick1} />
      <div style={{ backgroundImage: `url(${imageTwo})` }} onClick={onClick2} />
      <div
        style={{ backgroundImage: `url(${imageThree})` }}
        onClick={onClick3}
      />
      <div
        style={{ backgroundImage: `url(${imageFour})` }}
        onClick={onClick4}
      />
      <div
        style={{ backgroundImage: `url(${imageFive})` }}
        onClick={onClick5}
      />
      <div style={{ backgroundImage: `url(${imageSix})` }} onClick={onClick6} />
    </div>
  ) : grid == "3col" ? (
    <div className={styles.threeCol} style={{ gap: `${gap}` }}>
      {children}
    </div>
  ) : grid === "1col" ? (
    <div className={styles.oneCol} style={{ gap: `${gap}` }}>
      {children}
    </div>
  ) : (
    <div className={styles.fourCol} style={{ gap: `${gap}` }}>
      {children}
    </div>
  );
};

export default GlobexGrid;
