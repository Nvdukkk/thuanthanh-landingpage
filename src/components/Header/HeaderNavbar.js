import classNames from "classnames/bind";
import { HEADER_NAV } from "./constant";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function HeaderNavbar() {
  return (
    <div className={cx("navbar")}>
      {HEADER_NAV.map(({id, name, url }) => (
        <a key={id} href={url} className={cx("navbar-item")}>
          {name}
        </a>
      ))}
    </div>
  );
}
export default HeaderNavbar;
