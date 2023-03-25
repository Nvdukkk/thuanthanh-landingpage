import classNames from "classnames/bind";
import styles from "./Advise.module.scss";
const cx = classNames.bind(styles);

function Advise() {
  return (
    <div className={cx("container")}>
      <div style={{width:"35vw"}}>
        <h3>ĐỘI NGŨ CHUYÊN GIA HÀNG ĐẦU</h3>
        <p>
          Thuanthanhtech có đội ngũ nhân sự hơn 20 năm kinh nghiệm, chuyên sâu
          trong lĩnh vực Công nghệ giáo dục và Chuyển đổi số trong đào tạo (là
          các lãnh đạo, chuyên gia cao cấp đã từng công tác tại VKX, FPT,
          EDUMALL, ELSA,…).
        </p>
        <p>
          Chúng tôi đã triển khai thành công nhiều mô hình sản phẩm đào tạo trực
          tuyến từ ngắn hạn đến dài hạn, cho nhiều trường đại học lớn trong và
          ngoài nước (như Đại học Ngoại thương, Đại học Kinh tế Quốc dân, Đại
          học Mở Hà Nội,…) với quy mô hàng trăm ngàn người học.
        </p>
        <p>
          Với những chuyên gia hàng đầu, chúng tôi sẽ mang lại cho khách hàng
          những trải nhiệm tuyệt vời nhất, nắm bắt những lộ trình học thuận lợi
          nhất
        </p>
      </div>
      <img src="/image/advise.png" alt="advise"></img>
    </div>
  );
}

export default Advise;
