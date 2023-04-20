import { StaticImageData } from "next/image";
import wishlist from "../pages/wishlist";

export type ProductType = {
    id: number;
    brand: string;
    product: string;
    newPrice: string;
    oldPrice: string;
    discount: string;
    url: StaticImageData;
}

export type InitialStateType = {
products: ProductType[];
cart: number;
wishlist: number;
}

export const initialState = {
    products: [],
    cart: 0,
    wishlist: 0
}