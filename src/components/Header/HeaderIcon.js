import classNames from "classnames/bind";
import { HEADER_ICON } from "./constant";

import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

function HeaderIcon() {
  return (
    <div className={cx("icon")}>
      {HEADER_ICON.map(({id, src, alt }) => (
        <img key={id} src={src} alt={alt} />
      ))}
    </div>
  );

// .icon {
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   margin-bottom: 30px;
//   margin-right: 32px;

//   * {
//     margin: 10px 0;
//   }
// }

}
export default HeaderIcon;
