import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import GlobexDiscount from "../../elements/GlobexDiscount/GlobexDiscount";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexSubHeading from "../../elements/GlobexText/GlobexSubHeading/GlobexSubHeading";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import GlobexCTA from "../../sectionComponents/GlobexCTA/GlobexCTA";
import styles from "./HomePage.module.scss";
import imageOne from "/public/images/image-one.png";
import imageTwo from "/public/images/image-two.png";
import imageThree from "/public/images/image-three.png";
import imageFour from "/public/images/image-four.png";
import imageFive from "/public/images/image-five.png";
import imageSix from "/public/images/image-six.png";

import dealsLogo from "/public/images/deals-logo.png";
import Image from "next/image";
import GlobexScrollable from "../../sectionComponents/GlobexScrollable/GlobexScrollable";
import GlobexGrid from "../../sectionComponents/GlobexGrid/GlobexGrid";
import GlobexTestimonials from "../../sectionComponents/GlobexTestimonials/GlobexTestimonials";

import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import GlobexServices from "../../elements/GlobexServices/GlobexServices";
import { GlobexAbout } from "../../sectionComponents/GlobexAbout";
import GlobexBlogs from "../../sectionComponents/GlobexBlogs/GlobexBlogs";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import { useViewport } from "../../../context/viewportContext";
import GlobexCategories from "../../elements/GlobexCategories/GlobexCategories";

const images = [
  {
    left: "images/woman.png",
    right: "images/brownImg.png",
    id: 0,
  },
  {
    left: "images/gridThree.png",
    right: "images/brownImg.png",
    id: 1,
  },
  {
    left: "images/image-five.png",
    right: "images/brownImg.png",
    id: 2,
  },
  {
    left: "images/image-six.png",
    right: "images/brownImg.png",
    id: 3,
  },
];

interface SpotlightProps {
  type: "half" | "full";
  right: string;
  color: string;
  variant: string;
  heading: string;
  left?: string;
}
interface Spotlight extends Array<SpotlightProps> {}

const spotlight: Spotlight = [
  {
    right: "images/full-screen.png",
    color: "#FFFFFF",
    variant: "white",
    heading: "FOREVER 21",
    type: "full",
  },
  {
    type: "half",
    left: "images/gridThree.png",
    right: "images/greenImg.png",
    color: "#FFFFFF",
    variant: "white",
    heading: "FOREVER 21",
  },
];

const HomePage = () => {
  const { isMobile } = useViewport();
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function interval() {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }

      return currentIndex;
    }
    function spotlight() {
      if (index === 1) {
        setIndex(0);
      } else {
        setIndex(1);
      }
    }

    const intervalId = setInterval(interval, 5000);
    const spotlightId = setInterval(spotlight, 5000);

    return () => {
      clearInterval(intervalId);
      clearInterval(spotlightId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <GlobexPage>
      {isMobile ? <GlobexCategories /> : <GlobexDiscount />}
      {isMobile ? (
        <GlobexCTA
          heading="FOREVER 21"
          type="full"
          variant="white"
          right={images[currentIndex].left}
          color="#FFFFFF"
        />
      ) : (
        <GlobexCTA
          heading="PRADA"
          left={images[currentIndex].left}
          right={images[currentIndex].right}
          variant="black"
          type="half"
        />
      )}
      <div className={styles.bottomDots}>
        {images.map((image) => {
          return (
            <button
              key={image.id}
              style={{
                backgroundColor: `${
                  image.id == currentIndex ? "#002482" : "#c4c4c4"
                }`,
              }}
            />
          );
        })}
      </div>
      <div className={styles.container}>
        <GlobexSubHeading
          subHeading={isMobile ? "Trending Offers" : "Trending Now"}
        />
        <br />
        <div className={styles.cards}>
          <GlobexCard
            src={imageOne}
            display="block"
            onClick={() => {
              router.push(Routes.products + "7");
            }}
          >
            <h3>Women&apos;s Denim Jacket</h3>
            <div className={styles.brand}>
              <p>Roadster </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>

          <GlobexCard
            src={imageTwo}
            display="block"
            onClick={() => {
              router.push(Routes.products + "10");
            }}
          >
            <h3>Men&apos;s Biker Jacket</h3>
            <div className={styles.brand}>
              <p>Forever 21 </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>

          <GlobexCard
            src={imageThree}
            display="block"
            onClick={() => {
              router.push(Routes.products + "9");
            }}
          >
            <h3>Baggy Shirt</h3>
            <div className={styles.brand}>
              <p>Levis </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>

          <GlobexCard
            src={imageFour}
            display="block"
            onClick={() => {
              router.push(Routes.products + "6");
            }}
          >
            <h3>Dinner Dress</h3>
            <div className={styles.brand}>
              <p>Tokyo Talkies </p>
              <div className={styles.rating}>
                <p>4.4 </p>
                <IoIosStar />
              </div>
            </div>
            <GlobexPrice
              newPrice="Rs. 700"
              oldPrice="Rs. 1000"
              discount="30%"
            />
          </GlobexCard>
        </div>
        <br />
        <br />

        <GlobexSubHeading subHeading="Deals of the Day" />
        <br />
        <div className={styles.cards}>
          <GlobexCard
            src={imageOne}
            height={isMobile ? 300 : 300}
            display="block"
            onClick={() => {
              router.push(Routes.products + "7");
            }}
          >
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>

          <GlobexCard
            src={imageFive}
            height={isMobile ? 350 : 300}
            display="block"
            onClick={() => {
              router.push(Routes.products + "5");
            }}
          >
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>

          <GlobexCard
            src={imageSix}
            height={isMobile ? 350 : 300}
            display="block"
            onClick={() => {
              router.push(Routes.products + "8");
            }}
          >
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>

          <GlobexCard
            src={imageTwo}
            height={isMobile ? 300 : 300}
            display="block"
            onClick={() => {
              router.push(Routes.products + "10");
            }}
          >
            <div className={styles.deals}>
              <Image src={dealsLogo} alt="brand" />
              <h3>Best of Styles</h3>
              <p>Under Rs.799 </p>
            </div>
          </GlobexCard>
        </div>

        <br />
        <br />
        <GlobexSubHeading subHeading="Trending Offers" />
        <br />
        <GlobexScrollable />
        <br />
        <br />
      </div>

      <GlobexCTA
        type={isMobile ? "full" : spotlight[index].type}
        right={spotlight[index].right}
        color={spotlight[index].color}
        variant={spotlight[index].variant}
        heading={spotlight[index].heading}
        left={spotlight[index].left}
      />
      <div className={styles.container}>
        {isMobile ? "" : <GlobexSubHeading subHeading="Shop by Categories" />}
        <br />
        {isMobile ? (
          ""
        ) : (
          <GlobexGrid
            imageOne="images/gridOne.png"
            imageTwo="images/guy.png"
            imageThree="images/gridFour.png"
            imageFour="images/gridThree.png"
            imageFive="images/gridFive.png"
            imageSix="images/image-one.png"
            grid="random"
            onClick1={() => {
              router.push(Routes.women);
            }}
            onClick2={() => {
              router.push(Routes.men);
            }}
            onClick3={() => {
              router.push(Routes.women);
            }}
            onClick4={() => {
              router.push(Routes.women);
            }}
            onClick5={() => {
              router.push(Routes.men);
            }}
            onClick6={() => {
              router.push(Routes.women);
            }}
          />
        )}
        <br />
        <br />
        <GlobexSubHeading subHeading="What Our Customers Say" />
      </div>

      <GlobexTestimonials />
      {isMobile ? (
        ""
      ) : (
        <div className={styles.container}>
          <GlobexSubHeading subHeading="Featured Blogs" />
          <GlobexBlogs />
          <div className={styles.center}>
            <GlobexButton variant="black">View all</GlobexButton>
          </div>
        </div>
      )}
      <div className={styles.services}>
        <GlobexServices />
        {isMobile ? "" : <GlobexAbout />}
      </div>
    </GlobexPage>
  );
};

export default HomePage;
