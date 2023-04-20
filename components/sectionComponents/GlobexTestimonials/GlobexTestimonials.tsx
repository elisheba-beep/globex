import React, { useEffect, useState } from "react";

import styles from "./GlobexTestimonials.module.scss";
import GlobexTestimonialCard from "./GlobexTestimonialCard/GlobexTestimonialCard";
import GlobexScrollButtons from "../GlobexScrollable/GlobexScrollButtons/GlobexScrollButtons";
import { useViewport } from "../../../context/viewportContext";

const testimonials = [
  {
    userImage: "images/image-three.png",
    rating: "4.4",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper ",
    id: 0,
  },
  {
    userImage: "images/image-two.png",
    rating: "4.5",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper ",
    id: 1,
  },
  {
    userImage: "images/gridFour.png",
    rating: "4.3",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper ",
    id: 2,
  },
];

const GlobexTestimonials = () => {
  const { isMobile } = useViewport();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(testimonials.length);
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
    setLength(testimonials.length);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <GlobexScrollButtons onClickLeft={back} onClickRight={forward} />
        <div className={styles.contentWrapper}>
          <div
            className={styles.content}
            style={{ transform: `translateX(-${currentIndex * (isMobile ? 100 : 60)}%)` }}
          >
            {testimonials.map((testimonial) => {
              return (
                <GlobexTestimonialCard
                  userImage={testimonial.userImage}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                  key={testimonial.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobexTestimonials;
