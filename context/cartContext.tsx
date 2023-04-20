/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo, useState } from "react";
import { ProductType } from "../@types/productType";

function useCartContext() {
  const [cart, setcart] = useState<ProductType[]>([]);

  function addTocart(product: ProductType) {
    setcart([...cart, product]);
  }

  const CartValue = useMemo(
    () => ({ cart, setcart, addTocart }),
    [cart, setcart, addTocart]
  );

  return CartValue;
}
export type Context = ReturnType<typeof useCartContext>;
const cartContext = createContext<Context | undefined>(undefined);
cartContext.displayName = "Context";

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const CartValue = useCartContext();

  return (
    <cartContext.Provider value={CartValue}>{children}</cartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(cartContext);
  return cart;
}
