import classNames from "classnames/bind";
import styles from "./SolutionProduct.module.scss";
import { SOLUTION_BOX } from "./constant";
const cx = classNames.bind(styles);

function SolutionProduct() {
  return (
    <div className={cx("container")} id="giai-phap-va-san-pham">
      <h3 style={{paddingBottom: "16px"}}>LỢI ÍCH KHI SỬ DỤNG DỊCH VỤ CỦA CHÚNG TÔI</h3>
      <div className={cx("line-box")}>
        {SOLUTION_BOX.map(({ id, src, title, content, active }) => (
          <div className={cx("box", active)} key={id}>
            <img src={src} alt={title} />
            <p className="sub-text">{title}</p>
            <p
              style={{
                paddingLeft: "1.9vw",
                paddingRight: "1.9vw",
                color: "#7B88A8",
              }}
            >
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionProduct;
