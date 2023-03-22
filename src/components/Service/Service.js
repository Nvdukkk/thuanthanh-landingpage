import classNames from "classnames/bind";
import { BACKGROUND_ITEM } from "./constant";
import styles from "./Service.module.scss";
import ServiceBox from "./ServiceBox";
const cx = classNames.bind(styles);

function Service() {
  return (
    <div className={cx("container")}>
      <p className="heading-text" style={{ textAlign: "center" }}>
        DỊCH VỤ
      </p>
      {BACKGROUND_ITEM.map(({ id, src, classname }) => (
        <img
          key={id}
          src={src}
          className={cx("bg-item", classname)}
          alt={classname}
        />
      ))}
      <p className="sub-text">
        Những dịch vụ hàng đầu được cung cấp tới khách hàng
      </p>
      <ul>
        <li>
          Thuanthanhtech cam kết mang tới cho bạn những dịch vụ tốt nhất hiện
          nay, mọi yêu cầu của khách hàng đều sẽ được đáp ứng một cách trọn vẹn.
        </li>
        <li>
          Thuanthanhtech cam kết mang tới cho bạn những dịch vụ tốt nhất hiện
          nay, mọi yêu cầu của khách hàng đều sẽ được đáp ứng một cách trọn vẹn.
        </li>
      </ul>
      <ServiceBox />
    </div>
  );
}

export default Service;
