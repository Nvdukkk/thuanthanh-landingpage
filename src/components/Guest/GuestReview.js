import classNames from "classnames/bind";
import { GUEST_REVIEW } from "./constant";
import styles from "./Guest.module.scss";
const cx = classNames.bind(styles);

const starImgSrc = "/icon/star.svg";
const starImgx5 = Array.from({ length: 5 }, (_, index) => (
  <img key={index} src={starImgSrc} alt="star" style={{margin:"0 5px"}}/>
));

function GuestReview() {
  return (
    <div className={cx("container")}>
      <h3>CHIA SẺ TỪ ĐỐI TÁC</h3>

      <div className={cx("slider")}>
        <button>
          <img src="/icon/left-arrow.svg" alt="left-arrow" />
        </button>
        {GUEST_REVIEW.map(({ id, src, name, position, review }) => (
          <div className={cx("box")} key={id}>
            <img  src={src} alt="guest-review" />
            <h5>{name}</h5>
            <h6 style={{ fontSize: "14px" }}>{position}</h6>
            {starImgx5}
            <p>{review}</p>
          </div>
        ))}
        <button>
          <img src="/icon/right-arrow.svg" alt="right-arrow" />
        </button>
      </div>
    </div>
  );
}

export default GuestReview;
