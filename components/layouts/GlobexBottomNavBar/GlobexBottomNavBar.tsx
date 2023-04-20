import { useRouter } from "next/router";
import React from "react";
import { MdFavorite, MdHome, MdPerson, MdSearch, MdWork } from "react-icons/md";
import { Routes } from "../../../constants/navigation";
import { useCart } from "../../../context/cartContext";
import { useWishlist } from "../../../context/wishlistContext";
import styles from "./GlobexBottomNavBar.module.scss";

const GlobexBottomNavBar = () => {
  const wishlist = useWishlist();
  const cart = useCart();
  const wishlistItemsNumber: any = wishlist?.wishlist.length;
  const cartItemsNumber: any = cart?.cart.length;
  const router = useRouter();
  return (
    <div className={styles.container}>
      <MdHome
        onClick={() => {
          router.push(Routes.home);
        }}
      />
      <MdSearch
        style={{
          color: "#848484",
        }}
      />
      <div className={styles.wishlistIcon}>
        <MdFavorite
          onClick={() => {
            router.push(Routes.wishlist);
          }}
        />
        {wishlistItemsNumber > 0 ? (
          <div className={styles.wishlistItemsNumber}>
            <span>{wishlistItemsNumber}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.cartIcon}>
        <MdWork
          onClick={() => {
            router.push(Routes.orders);
          }}
        />
        {cartItemsNumber > 0 ? (
          <div className={styles.cartItemsNumber}>
            <span>{cartItemsNumber}</span>
          </div>
        ) : (
          ""
        )}
      </div>
      <MdPerson />
    </div>
  );
};

export default GlobexBottomNavBar;
