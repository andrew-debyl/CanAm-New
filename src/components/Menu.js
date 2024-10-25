import Link from "next/link";
import { Fragment } from "react";

export const Products = () => (
  <Fragment>
    <li>
      <Link href="/parts">Parts</Link>
    </li>
    <li>
      <Link href="/supplies">Supplies</Link>
    </li>
    <li>
      <Link href="/equipment">Equipment</Link>
    </li>
    <li>
      <Link href="/gallery">Gallery</Link>
    </li>
    <li>
      <Link href="/videos">Videos</Link>
    </li>
  </Fragment>
);
export const Services = () => (
  <Fragment>
    <li>
      <Link href="/buying-or-selling">Buying or Selling</Link>
    </li>
    <li>
      <Link href="/technical-support">Technical Support</Link>
    </li>
  </Fragment>
);
export const Contact = () => (
  <Fragment>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </Fragment>
);
