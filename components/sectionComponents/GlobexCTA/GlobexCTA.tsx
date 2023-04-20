import Image from "next/image";
import React from "react";
import styles from "./GlobexCTA.module.scss";
import GlobexHeading from "../../elements/GlobexText/GlobexHeading/GlobexHeading";
import GlobexSubText from "../../elements/GlobexText/GlobexSubText/GlobexSubText";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import { useViewport } from "../../../context/viewportContext";

interface CTAProps {
  left?: string | any;
  right?: string | any;
  heading: string;
  variant: any;
  type: "full" | "half";
  color?: string;
}

const GlobexCTA = ({
  left,
  right,
  variant,
  heading,
  type,
  color,
}: CTAProps) => {
  const { isMobile } = useViewport();
  const router = useRouter();
  return type == "half" ? (
    <div className={styles.container}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${left})` }}
      />
      <div
        className={styles.content}
        style={{
          backgroundImage: `url(${right})`,
        }}
      >
        <GlobexHeading heading={heading} colour={color} />
        <br />
        <GlobexSubText subText="Big Fashion Festival" color={color} />
        <GlobexSubText subText="50% - 80% off" color={color} />
        <br />
        <br />
        <GlobexButton
          variant={variant}
          onClick={() => {
            router.push(Routes.products);
          }}
        >
          Explore
        </GlobexButton>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          backgroundImage: `url(${right})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          textAlign: `${isMobile ? 'center' : "start"}`,
        }}
      >
        <GlobexHeading heading={heading} colour={color} />
        <br />
        <GlobexSubText subText="Big Fashion Festival" color={color} />
        <GlobexSubText subText="50% - 80% off" color={color} />
        <br />
        <br />
        <GlobexButton
          variant={variant}
          onClick={() => {
            router.push(Routes.products);
          }}
        >
          Explore
        </GlobexButton>
      </div>
    </div>
  );
};

export default GlobexCTA;
