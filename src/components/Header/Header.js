import HeaderNavbar from "./HeaderNavbar";
import HeaderIcon from "./HeaderIcon";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("header")}>
    <HeaderIcon />
      
      <HeaderNavbar />

      <div className={cx("text-line")}>
        <p className="heading-text" style={{color:"white"}}>THUANTHANHTECH</p>
        <p className="sub-text">
          Cung cấp những giải pháp hàng đầu, dịch vụ tối ưu nhất trong giáo dục
        </p>
        <p>
          Hãy để chúng tôi tư vấn mang lại giải pháp chuyển đổi số giáo dục tốt
          nhất cho doanh nghiệp của bạn!
        </p>
      </div>
      <div className={cx("btn-line")}>
        <button>Về chúng tôi</button>
        <button>Liên hệ</button>
      </div>
    </header>
  );
}

export default Header;
