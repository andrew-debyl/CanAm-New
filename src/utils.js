export const scrollTop = () => {
  let backToTop = document.getElementById("back-to-top");
  let offset = window.scrollY;
  if (backToTop) {
    if (offset > 60) {
      backToTop.classList.add("d-block");
    } else {
      backToTop.classList.remove("d-block");
    }
  }
};

export const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll("#header-sticky");
  for (let i = 0; i < stickys.length; i++) {
    const sticky = stickys[i];
    if (sticky) {
      if (offset > 60) {
        sticky.classList.add("stricky-fixed");
      } else {
        sticky.classList.remove("stricky-fixed");
      }
    }
  }
};

export const animation = () => {
  if (typeof window !== "undefined") {
    const WOW = require("wowjs").WOW;

    var wow = new WOW({
      live: false,
    });

    wow.init();
    wow.sync();
  }
};

export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const activeNavMenu = (path) => {
  const navItem = document.querySelectorAll(".main-menu__list li a");
  navItem.forEach((nav) => {
    if (nav.pathname === path) {
      if (!nav.href.includes("#")) {
        if (nav.pathname === "/about" || nav.pathname === "/contact") {
          nav.parentElement.className = "current";
        } else {
          nav.parentElement.parentElement.parentElement.className =
            "dropdown current";
        }
      }
    }
  });
};
