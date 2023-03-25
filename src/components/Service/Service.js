import classNames from "classnames/bind";
import styles from "./Service.module.scss";
import ServiceBox from "./ServiceBox";
import { BACKGROUND_ITEM } from "./constant";

const cx = classNames.bind(styles);

function Service() {
  return (
    <div className={cx("container")}>
      <h3 style={{ textAlign: "center" }}>
        DỊCH VỤ
      </h3>
      {BACKGROUND_ITEM.map(({ id, src, classname }) => (
        <img
          key={id}
          src={src}
          className={cx("bg-item", classname)}
          alt={classname}
        />
      ))}
      <p className="sub-text" style={{fontWeight: 500}}>
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
