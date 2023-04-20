import Image from "next/image";
import React from "react";
import { useCart } from "../../../context/cartContext";
import GlobexButton from "../../elements/GlobexButton/GlobexButton";
import GlobexHeading3 from "../../elements/GlobexText/GlobexHeading3/GlobexHeading3";
import GlobexSubHeading from "../../elements/GlobexText/GlobexSubHeading/GlobexSubHeading";
import GlobexPage from "../../layouts/GlobexPage/GlobexPage";
import styles from "./OrdersPage.module.scss";

const OrdersPage = () => {
  const cart = useCart();
  const cartItemsNumber: any = cart?.cart.length;

  var today = new Date();
  var date =
    today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();

  

  return (
    <GlobexPage>
      <div className={styles.container}>
        <GlobexSubHeading
          subHeading={`My Orders (${cartItemsNumber} ${
            cartItemsNumber != 1 ? "Items" : "Item"
          })`}
        />
        <div className={styles.ordersContainer}>
          {cart?.cart.map((item, index) => {
            var value = Math.random() + 1;
            var mul = (Math.random() + 1) * (Math.random() * 1000000);
          
            var orderId = Math.floor(value * mul);
            return (
              <div key={index} className={styles.orderCard}>
                <div className={styles.orderLeft}>
                  <Image
                    src={item.url}
                    width={220}
                    height={220}
                    objectFit="cover"
                    alt="order-item-img"
                    style={{borderRadius: '5px'}}
                  />
                  <div className={styles.orderInfo}>
                    <GlobexHeading3 heading3={item.product} />
                    <h3>{item.brand}</h3>
                    <p>{item.newPrice}</p>
                    <div className={styles.orderDate}>
                      <p>
                        Order placed on: <span>{date}</span>
                      </p>
                      <p>
                        Ship To: <span>Anna Cathy</span>
                      </p>
                    </div>
                    <div className={styles.orderButtons}>
                      <GlobexButton variant="black">Continue</GlobexButton>
                      <GlobexButton
                        variant="black"
                        onClick={() => {
                          const deletedItem = cart.cart.filter((order) => {
                            return order.id != item.id;
                          });
                          cart?.setcart(deletedItem);
                        }}
                      >
                        Cancel
                      </GlobexButton>
                    </div>
                  </div>
                </div>
                <div className={styles.orderDetails}>
                  <p>
                    Order Number: <span>#{orderId}</span>{" "}
                  </p>
                  <p style={{ color: "#00398F", cursor: "pointer" }}>
                    View Order Details
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </GlobexPage>
  );
};

export default OrdersPage;
