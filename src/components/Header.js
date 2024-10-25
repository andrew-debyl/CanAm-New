import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { activeNavMenu, stickyNav } from "../utils";
import { HeaderStyle1, DefaultHeaderStyle } from "./HeaderStyle";
import { Sticky1 } from "./SttickyNav";

const Header = ({ header, addClassName }) => {
  const router = useRouter();
  useEffect(() => {
    activeNavMenu(router.pathname);
    window.addEventListener("scroll", stickyNav);
  });

  const getHeader = () => {
    switch (header) {
      case 1:
        return <HeaderStyle1 addClassName={addClassName} />;
      default:
        return <DefaultHeaderStyle addClassName={addClassName} />;
    }
  };
  return (
    <Fragment>
      {getHeader()}
      <Sticky1 />
    </Fragment>
  );
};

export default Header;
