import Head from "next/head";
import { useEffect, useState } from "react";
import Features from "./Features";
import { animation, aTagClick, color, scrollTop } from "../utils";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ScrollTop from "./ScrollTop";
import SearchPopUp from "./SearchPopUp";

const Layout = ({ children, header, footer, featuresContentOff }) => {
  const [searchToggle, setSearchToggle] = useState(false);
  useEffect(() => {
    animation();
    aTagClick();
    color(header);
    window.addEventListener("scroll", scrollTop);
  });

  const close = () => setSearchToggle(false);
  const open = () => setSearchToggle(true);
  return (
    <div className="page-wrapper">
      <Head>
        <title> CanAm Imaging</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/images/favicons/favicon-16x16.png"
        />
      </Head>
      <Header header={header} open={open} />
      {children}
      {!featuresContentOff && <Features />}

      <Footer footer={footer} />
      <MobileMenu />
      <ScrollTop />
      <SearchPopUp close={close} open={searchToggle} />
    </div>
  );
};

export default Layout;
