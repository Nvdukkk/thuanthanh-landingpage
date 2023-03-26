import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const onSubmit = (data, e) => {
    e.preventDefault();
  };
  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <p>Liên hệ chúng tôi</p>
      Họ và tên *
      <input
        type="text"
        name="fullname"
        {...register("name", { required: "Vui lòng nhập họ tên" })}
      />
      {errors.name && (
        <span className="form-message">{errors.name.message}</span>
      )}
      Email *
      <input
        type="email"
        name="email"
        {...register("email", {
          required: "Vui lòng nhập email",
          pattern: {
            value: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/i,
            message: "Vui lòng nhập đúng định dạng email",
          },
        })}
      />
      {errors.email && (
        <span className="form-message">{errors.email.message}</span>
      )}
      Số điện thoại *
      <input
        type="number"
        name="number"
        {...register("number", {
          required: "Vui lòng nhập số điện thoại",
          minLength: {
            value: 10,
            message: "Vui lòng nhập định dạng 10 số, bao gồm cả số 0",
          },
        })}
      />
      {errors.password && (
        <span className="form-message">{errors.password.message}</span>
      )}
      Tiêu đề
      <input type="text" name="tieude" />
      Nội dung
      <input type="text" name="noidung" />
      <button type="submit">GỬI THÔNG TIN</button>
    </form>
  );
}

export default ContactForm;
