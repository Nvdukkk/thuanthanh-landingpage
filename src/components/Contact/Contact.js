import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import ContactForm from "./ContactForm";
const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("container")}>
      <div className={cx("content")}>
        <div className={cx("social-contact")}>
          <p>THÔNG TIN LIÊN HỆ</p>
          <img
            src="/icon/contact-phone-outline.svg"
            alt="contact-phone-outline"
          ></img>
          <p>Chúng tôi có trên mạng xã hội</p>
          <div>
            <img
              src="/icon/facebook-circle-fill.svg"
              alt="facebook-circle-fill"
            ></img>
            <img src="/icon/fa6-skype.svg" alt="fa6-skype"></img>
            <img src="/icon/instagram-filled.svg" alt="instagram-filled"></img>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
