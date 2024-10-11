import Head from "next/head";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import ScrollTop from "./ScrollTop";

const Layout = ({ children, header, footer, featuresContentOff }) => {

  return (
    <div className="page-wrapper">
      <Head>
        <title> CanAm Imaging</title>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
          />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/images/favicons/favicon-16x16.png"
        />
      </Head>
      <Header header={header} />
      {children}
      {!featuresContentOff && <Features />}

      <Footer footer={footer} />
      <MobileMenu />
      <ScrollTop />
    </div>
  );
};

export default Layout;
