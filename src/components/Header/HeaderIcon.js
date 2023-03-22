import classNames from "classnames/bind";
import { HEADER_ICON } from "./constant";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function HeaderIcon() {
  return (
    <div className={cx("icon")}>
      {HEADER_ICON.map(({ name, src, alt }) => (
        <img src={src} alt={alt} />
      ))}
    </div>
  );
}
export default HeaderIcon;
