import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
const cx = classNames.bind(styles);

function Introduce() {
  return (
    <div className={cx("container")}>
      <img src="/image/poster.png" alt="poster" className={cx("img")} />
      <div className={cx("box")}>
        <p className="heading-text">VỀ CHÚNG TÔI</p>
        <p>__________</p>
        <p>
          Đến với Thuận Thành Tech bạn luôn có được sự phục vụ tốt nhất của
          chúng tôi
        </p>
        <ul>
          <li>
            Sứ mệnh của Thuanthanhtech là đem lại những giải pháp và dịch vụ
            công nghệ tốt nhất nằm đáp những sự kỳ vọng của khách hàng, giúp
            khách hàng đạt được mục tiêu trong chiến lược kinh doanh lâu dài của
            họ.
          </li>
          <li>
            Chúng tôi đánh giá sự thành công dựa trên cơ sở thành công của khách
            hàng và các đối tác liên quan. Sự thành công đó tất yếu phải dựa
            trên các yếu tố về chất lượng cao
          </li>
          <li>
            Thuanthanhtech đã và đang từng bước thực hiện mục tiêu trở thành một
            trong những công ty công nghệ hang đầu Việt Nam.
          </li>
          <li>
            Thuanthanhtech luôn cố gắng chuẩn bị đầy đủ năng lực thực thi, nỗ
            lực hết mình để đảm bảo đúng và cao hơn các cam kết của mình với
            khách hàng, đối tác; đặc biệt là các cam kết về chất lượng sản phẩm
            – dịch vụ và tiến độ thực hiện.
          </li>
          <li>
            Thuanthanhtech xây dựng các mối quan hệ với khách hàng, đối tác,
            đồng nghiệp, nhà đầu tư và xã hội bằng sự thiện chí, tình thân ái,
            tinh thần nhân văn.
          </li>
          <li>
            Với tầm nhìn dài hạn và quan điểm phát triển bền vững,
            Thuanthanhtech đang tập trung đầu tư vào lĩnh vực phần mềm trực
            tuyến (website, văn phòng điện tử, sổ liên lạc điện tử, …)
          </li>
        </ul>
        <button>Liên hệ ngay</button>
      </div>
    </div>
  );
}

export default Introduce;
