/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, FC, useContext, useMemo, useState } from "react";
import { ProductType } from "../@types/productType";

function useWishlistContext(){
  const [wishlist, setWishlist] = useState<ProductType[]>([]);

  function addToWishlist(product:ProductType){
    setWishlist([...wishlist, product]);
  }


  const WishlistValue = useMemo(()=>({wishlist, setWishlist, addToWishlist}), [wishlist, setWishlist, addToWishlist]);

  return WishlistValue;
}
export type Context = ReturnType<typeof useWishlistContext>;
const WishlistContext  = createContext<Context | undefined>(undefined);
WishlistContext.displayName = "Context";

export const WishlistContextProvider = ({children}: {children: React.ReactNode}) => {
  const WishlistValue = useWishlistContext();

  return <WishlistContext.Provider value={WishlistValue}>{children}</WishlistContext.Provider>
};

export function useWishlist(){
  const wishlist = useContext(WishlistContext);
  return wishlist;
}