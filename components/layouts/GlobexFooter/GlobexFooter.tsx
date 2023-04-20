import Image from "next/image";
import React from "react";
import logoWhite from "/public/images/logoWhite.png";
import styles from "./GlobexFooter.module.scss";
import GlobexHeading from "../../elements/GlobexText/GlobexHeading/GlobexHeading";
import GlobexEmail from "../../elements/GlobexEmail/GlobexEmail";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io";
import { useRouter } from "next/router";
import { Routes } from "../../../constants/navigation";

const GlobexFooter = () => {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div
          className={styles.logo}
          onClick={() => {
            router.push(Routes.home);
          }}
        >
          <Image src={logoWhite} alt="logo" width={100} height={80} />
          <GlobexHeading colour="#FFFFFF" heading="Globex" />
        </div>
        <div className={styles.lists}>
          <ul>
            <li>
              <p
                onClick={() => {
                  router.push(Routes.women);
                }}
              >
                Women
              </p>
            </li>
            <li>All women</li>
            <li>Skirts</li>
            <li>T-Shirts</li>
            <li>Tops</li>
            <li>Jackets</li>
          </ul>

          <ul>
            <li>
              <p
                onClick={() => {
                  router.push(Routes.men);
                }}
              >
                Men
              </p>
            </li>
            <li>All men</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts</li>
            <li>Jackets</li>
          </ul>

          <ul>
            <li>
              <p>Kids</p>
            </li>
            <li>All kids</li>
            <li>Shirts</li>
            <li>T-Shirts</li>
            <li>Shorts</li>
            <li>Jackets</li>
          </ul>

          <ul>
            <li>
              <p>Shopping</p>
            </li>
            <li
              onClick={() => {
                router.push(Routes.orders);
              }}
            >
              Your cart
            </li>
            <li
              onClick={() => {
                router.push(Routes.orders);
              }}
            >
              Your orders
            </li>
            <li>Compared items</li>
            <li
              onClick={() => {
                router.push(Routes.wishlist);
              }}
            >
              Wishlist
            </li>
            <li>Shipping details</li>
          </ul>

          <ul>
            <li>
              <p>More Links</p>
            </li>
            <li>Blogs</li>
            <li>Gift center</li>
            <li>Buying guides</li>
            <li>New arrivals</li>
            <li>Clearance</li>
          </ul>

          <ul>
            <li>
              <p>Stay in Touch</p>
            </li>
            <li>Stay in touch to get special offers, free giveaways</li>
            <li>and once in a lifetime deals</li>
            <GlobexEmail />
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.bottom}>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <div className={styles.socials}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook className={styles.social} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className={styles.social} />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoWhatsapp className={styles.social} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter className={styles.social} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GlobexFooter;
