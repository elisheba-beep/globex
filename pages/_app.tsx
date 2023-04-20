import "../styles/globals.scss";
import "../styles/reset.scss";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { WishlistContextProvider } from "../context/wishlistContext";
import { CartContextProvider } from "../context/cartContext";
import { ViewportProvider } from "../context/viewportContext";
import Compose from "../context/compose";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Compose
      components={[
        ViewportProvider,
        CartContextProvider,
        WishlistContextProvider,
      ]}
    >
      <NextNProgress color="#c4c4c4" />
      <Component {...pageProps} />
    </Compose>
  );
}

export default MyApp;
