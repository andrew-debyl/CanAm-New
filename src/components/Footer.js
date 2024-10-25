import { Fragment, useEffect } from "react";
import { FooterStyle1, FooterStyle2 } from "./FooterStyle";

const Footer = ({ footer }) => {
  useEffect(() => {}, []);
  const getFooter = () => {
    switch (footer) {
      case 1:
        return <FooterStyle1 />;
      case 2:
        return <FooterStyle2 />;
      default:
        return <FooterStyle2 />;
    }
  };
  return <Fragment>{getFooter()}</Fragment>;
};

export default Footer;
