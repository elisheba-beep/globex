import Head from "next/head";
import React from "react";
import { useViewport } from "../../../context/viewportContext";
import GlobexAppBar from "../GlobexAppBar/GlobexAppBar";
import MobileGlobexAppBar from "../GlobexAppBar/MobileGlobexAppBar";
import GlobexBottomNavBar from "../GlobexBottomNavBar/GlobexBottomNavBar";
import GlobexFooter from "../GlobexFooter/GlobexFooter";
import ClientOnly from "./ClientOnly";
import styles from "./GlobexPage.module.scss";

interface PageProps {
  children: React.ReactNode;
}

const GlobexPage = ({ children }: PageProps) => {
  const { isMobile } = useViewport();
  return (
    <ClientOnly>
      <div>
        <Head>
          <title>Globex</title>
          <meta name="description" content="Globex is an e-commerce website " />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
          {isMobile ? <MobileGlobexAppBar /> : <GlobexAppBar />}
          {children}
          <div className={styles.bottom}>
            {isMobile ? <GlobexBottomNavBar /> : <GlobexFooter />}
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default GlobexPage;
