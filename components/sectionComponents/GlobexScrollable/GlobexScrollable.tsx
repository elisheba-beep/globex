import React, { useEffect, useState } from "react";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import styles from "./GlobexScrollable.module.scss";
import guy from "/public/images/guy.png";
import trendingOffers from "/public/images/trendingOffers.png";
import dealsLogo from "/public/images/deals-logo.png";
import forever from "/public/images/forever.png";
import Image from "next/image";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import GlobexScrollButtons from "./GlobexScrollButtons/GlobexScrollButtons";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import { useViewport } from "../../../context/viewportContext";

const images = [
  {
    image: guy,
    logo: dealsLogo,
    discount: "50%",
    id: 0,
  },
  {
    image: trendingOffers,
    logo: dealsLogo,
    discount: "60%",
    id: 1,
  },
  {
    image: guy,
    logo: forever,
    discount: "50%",
    id: 2,
  },
  {
    image: trendingOffers,
    logo: dealsLogo,
    discount: "60%",
    id: 3,
  },
  {
    image: guy,
    logo: forever,
    discount: "50%",
    id: 4,
  },
];

const GlobexScrollable = () => {
  const { isMobile } = useViewport();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(images.length);
  function back() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }
  function forward() {
    if (currentIndex < length - 2) {
      setCurrentIndex((prev) => prev + 1);
    }
  }
  useEffect(() => {
    setLength(images.length);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {isMobile ? (
          ""
        ) : (
          <GlobexScrollButtons onClickLeft={back} onClickRight={forward} />
        )}
        <div className={styles.contentWrapper}>
          <div
            className={styles.content}
            style={{ transform: `translateX(-${currentIndex * 38}%)` }}
          >
            {images.map((image) => {
              return (
                <GlobexCard
                  key={image.id}
                  src={image.image}
                  alt="trending-deal"
                  display={isMobile ? "block" : "reverse"}
                  height={500}
                >
                  <div className={styles.box}>
                    <Image src={image.logo} alt="logo" />
                    <h3>Min {image.discount} off</h3>

                    {isMobile ? (
                      ""
                    ) : (
                      <GlobexButton
                        variant="black"
                        onClick={() => {
                          router.push(Routes.products);
                        }}
                      >
                        Explore
                      </GlobexButton>
                    )}
                  </div>
                </GlobexCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobexScrollable;
