import classNames from "classnames/bind";
import { CONTACT_INFO } from "./constant";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function Footer() {
  const renderChildren = (item) => {
    return item.map(({ id, icon, content }) => (
      <div key={id} style={{ display: "flex", padding: "4px 0" }}>
        <img src={icon} alt={"icon"} />
        <p>{content}</p>
      </div>
    ));
  };
  return (
    <div className={cx("container")}>
      <p className="sub-text">LIÊN HỆ</p>
      <div className={cx("contact")}>
        {CONTACT_INFO.map(({ id, children }) => (
          <div key={id}>{renderChildren(children)}</div>
        ))}
      </div>
      <p className={cx('authorzire')}>Copyright © 2018 by Thuanthanhtech Co., Ltd. All rights reserved</p>
    </div>
  );
}

export default Footer;
