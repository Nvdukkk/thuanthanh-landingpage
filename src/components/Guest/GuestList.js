import classNames from "classnames/bind";
import { GUEST_LIST } from "./constant";
import styles from "./Guest.module.scss";
const cx = classNames.bind(styles);

function GuestList() {
  return (
    <div className={cx("container")} style={{ backgroundColor: "#f5f5f5" }}>
      <h3>KHÁCH HÀNG</h3>
      <p style={{ padding: "0 21vw" }}>
        Trải qua nhiều năm làm việc, chúng tôi đã hợp tác với rất nhiều doanh
        nghiệp, cơ quan giáo dục lớn và nổi tiếng trên toàn lãnh thổ Việt Nam và
        quốc tế. Tất cả những đối tác từ trong nước tới nước ngoài đều có những
        phản hồi tích cực về giải pháp và phần mềm của chúng tôi.
      </p>
      <div className={cx("slider")}>
        <button>
          <img src="/icon/left-arrow.svg" alt="left-arrow" />
        </button>
        {GUEST_LIST.map(({ id, src }) => (
          <img key={id} src={src} alt="guest-list" />
        ))}
        <button>
          <img src="/icon/right-arrow.svg" alt="right-arrow" />
        </button>
      </div>
    </div>
  );
}

export default GuestList;
