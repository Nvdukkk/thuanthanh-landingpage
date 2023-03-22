import classNames from "classnames/bind";
import { BOX } from "./constant";
import styles from "./Service.module.scss";
const cx = classNames.bind(styles);

function ServiceBox() {
  return (
    <div className={cx("box-container")}>
      {BOX.map(({ id, src, title, content }) => (
        <div className={cx("box", "box" + id)} key={id}>
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
  );
}

export default ServiceBox;
