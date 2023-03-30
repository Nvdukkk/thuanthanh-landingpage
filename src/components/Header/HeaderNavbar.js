import classNames from "classnames/bind";
import { HEADER_NAV } from "./constant";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function HeaderNavbar() {
  return (
    <div className={cx("navbar")}>
      {HEADER_NAV.map(({ id, name, classname, url   }) => (
        <a key={id} href={url} className={cx("navbar-item", classname)}>
          {name}
        </a>
      ))}
      <button style={{marginLeft:"22px"}}>
        <img src="/image/vn-flag.png" alt="vn" />
      </button>
      <button>
        <img src="/image/american-flag.png" alt="vn" />
      </button>
    </div>
  );
}
export default HeaderNavbar;
