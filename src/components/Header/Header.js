import HeaderNavbar from "./HeaderNavbar";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
      <a href="/">
        <img
          src="/image/ThuanThanh-logo.png"
          alt="thuanthanh-logo"
          className={cx("header-logo")}
          style={{maxHeight:"57px"}}
        />
      </a>
      <HeaderNavbar />
    </header>
  );
}

export default Header;
