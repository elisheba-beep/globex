import React from "react";
import { IoIosStar } from "react-icons/io";
import GlobexCard from "../../elements/GlobexCard/GlobexCard";
import GlobexPrice from "../../elements/GlobexPrice/GlobexPrice";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import GlobexGrid from "../../sectionComponents/GlobexGrid/GlobexGrid";
import styles from "./WishlistPage.module.scss";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import GlobexSubHeading from "../../elements/GlobexText/GlobexSubHeading/GlobexSubHeading";
import { useWishlist } from "../../../context/wishlistContext";
import { useViewport } from "../../../context/viewportContext";

const WishlistPage = () => {
  const { isMobile } = useViewport();
  const router = useRouter();
  const wishlist = useWishlist();
  const items = wishlist?.wishlist;

  return (
    <GlobexPage>
      <div className={styles.container}>
        <GlobexSubHeading subHeading="My Wishlist" />
        <GlobexGrid grid={isMobile ? "1col" : "4col"} gap="20px">
          {items?.map((item) => {
            return (
              <GlobexCard
                key={item.id}
                src={item.url}
                width={410}
                height={301}
                objectFit="cover"
                display="block"
                layout="responsive"
                onClick={() => {
                  router.push(Routes.products + [item.id]);
                }}
              >
                <div className={styles.box}>
                  <h3>{item.product}</h3>
                  <div className={styles.brand}>
                    <p>{item.brand}</p>
                    <div className={styles.rating}>
                      <p>4.4 </p>
                      <IoIosStar />
                    </div>
                  </div>
                  <GlobexPrice
                    newPrice={item.newPrice}
                    oldPrice={item.oldPrice}
                    discount={item.discount}
                  />
                </div>
              </GlobexCard>
            );
          })}
        </GlobexGrid>
      </div>
    </GlobexPage>
  );
};

export default WishlistPage;
