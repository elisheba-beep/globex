import React, { useState } from "react";
import { IoIosStar, IoMdArrowDown, IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiFilter3Fill } from "react-icons/ri";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import GlobexGrid from "../../sectionComponents/GlobexGrid/GlobexGrid";
import GlobexProductFilters from "../../sectionComponents/GlobexProductFilters/GlobexProductFilters";
import styles from "./WomensPage.module.scss";
import GlobexSort from "../../elements/GlobexSort/GlobexSort";
import useProduct from "../../../context/productContext";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import { useViewport } from "../../../context/viewportContext";

const WomensPage = () => {
  const { isMobile } = useViewport();
  const router = useRouter();
  const products = useProduct();
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [value, setValue] = useState(products);
  const handleClick = () => {
    setShowFilters((prev) => !prev);
  };
  const handleSort = () => {
    setShowSort((prev) => !prev);
  };

  return (
    <GlobexPage>
      <div className={styles.container}>
        {showFilters && (
          <div className={styles.filters}>
            <GlobexProductFilters onClick={() => {}} setValue={setValue} />
          </div>
        )}

        <div className={styles.products}>
          <div className={styles.sorting}>
            {isMobile ? (
              ""
            ) : (
              <h3>
                Filters{" "}
                <span>
                  {" "}
                  <RiFilter3Fill onClick={handleClick} />
                </span>{" "}
              </h3>
            )}
            <h3>
              Sort by{" "}
              <span>
                <MdOutlineKeyboardArrowDown onClick={handleSort} />
              </span>{" "}
            </h3>
          </div>
          {showSort && (
            <div className={styles.sort}>
              <GlobexSort />
            </div>
          )}
          <GlobexGrid
            grid={isMobile ? "1col" : showFilters ? "3col" : "4col"}
            gap="20px"
          >
            {value.map((image) => {
              if (image.category === "Women") {
                return (
                  <GlobexCard
                    key={image.id}
                    src={image.url}
                    width={410}
                    height={301}
                    objectFit="cover"
                    display="block"
                    layout="responsive"
                    onClick={() => {
                      router.push(Routes.products + [image.id]);
                    }}
                  >
                    <div className={styles.box}>
                      <h3>{image.product}</h3>
                      <div className={styles.brand}>
                        <p>{image.brand}</p>
                        <div className={styles.rating}>
                          <p>4.4 </p>
                          <IoIosStar />
                        </div>
                      </div>
                      <GlobexPrice
                        newPrice={image.newPrice}
                        oldPrice={image.oldPrice}
                        discount={image.discount}
                      />
                    </div>
                  </GlobexCard>
                );
              }
            })}
          </GlobexGrid>
        </div>
      </div>
    </GlobexPage>
  );
};

export default WomensPage;
