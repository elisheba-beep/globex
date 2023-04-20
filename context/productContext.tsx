import React, { createContext, useContext} from 'react'
import { images } from '../constants/productData'


const ProductContext = createContext(images);
export const ProductProvider = ({children}:{children:React.ReactNode}) => {
    return <ProductContext.Provider value={images}>{children}</ProductContext.Provider>
}

const useProduct = () => {
    const products = useContext(ProductContext);

  return products
}

export default useProduct