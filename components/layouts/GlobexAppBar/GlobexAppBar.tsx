import React, { useEffect} from "react";
import logoBlue from "/public/images/logoBlue.png";
import imageOne from "/public/images/image-one.png";
import styles from "./GlobexAppBar.module.scss";
import Image from "next/image";
import GlobexSearch from "../../elements/GlobexSearch/GlobexSearch";
import { IoMdCart, IoMdHeartEmpty } from "react-icons/io";
import GlobexUser from "../../elements/GlobexUser/GlobexUser";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";
import { useWishlist } from "../../../context/wishlistContext";
import { useCart } from "../../../context/cartContext";

const GlobexAppBar = () => {
  const wishlist = useWishlist();
  const cart = useCart();
  const wishlistItemsNumber: any = wishlist?.wishlist.length;
  const cartItemsNumber: any = cart?.cart.length;

  const router = useRouter();

  const handleClick = () => {
    router.push(Routes.home);
  };
  useEffect(() => {
    router.pathname == "/" ?? handleClick;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleClick]);

  return (
    <div className={styles.container}>
      <Image
        src={logoBlue}
        alt="logo"
        width={57}
        height={48}
        onClick={handleClick}
        className={styles.image}
      />
      <ul>
        <li
          style={{
            textDecoration: `${router.asPath == "/men" ? "underline" : ""}`,
          }}
          onClick={() => {
            router.push(Routes.men);
          }}
        >
          Men
        </li>
        <li
          style={{
            textDecoration: `${router.asPath == "/women" ? "underline" : ""}`,
          }}
          onClick={() => {
            router.push(Routes.women);
          }}
        >
          Women
        </li>
        <li>Kids</li>
        <li
          style={{
            textDecoration: `${
              router.asPath == "/products" ? "underline" : ""
            }`,
          }}
          onClick={() => {
            router.push(Routes.products);
          }}
        >
          Products
        </li>
        <li>Contact Us</li>
      </ul>
      <GlobexSearch />
      <div className={styles.icons}>
        <IoMdHeartEmpty
          className={styles.icon}
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

        <IoMdCart
          className={styles.icon}
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
        <GlobexUser userName="Anne Doe" src={imageOne} />
      </div>
    </div>
  );
};

export default GlobexAppBar;
