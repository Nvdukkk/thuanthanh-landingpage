import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data, e) => {
    e.preventDefault();
  };
  return (
    <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
      <p>Liên hệ chúng tôi</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={cx("col1")}>
          Họ và tên *
          <div style={{ height: "50px" }}>
            <input
              type="text"
              name="fullname"
              {...register("name", { required: "Vui lòng nhập họ tên" })}
            />
            {errors.name && (
              <span>{errors.name.message}</span>
            )}
          </div>
          Email *
          <div style={{ height: "50px" }}>
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
              <span>{errors.email.message}</span>
            )}
          </div>
        </div>
        <div className={cx("col1")}>
          Số điện thoại *
          <div style={{ height: "50px" }}>
            <input
              type="text"
              name="number"
              {...register("number", {
                required: "Vui lòng nhập số điện thoại",
                minLength: {
                  value: 10,
                  message: "Vui lòng nhập định dạng 10 số",
                },
              })}
            />
            {errors.number && (
              <span>{errors.number.message}</span>
            )}
          </div>
          <div style={{ height: "50px" }}>
            Tiêu đề
            <input type="text" name="tieude" />
          </div>
        </div>
      </div>
      Nội dung
      <input type="text" name="noidung" style={{height:"200%"}}/>
      <button type="submit">GỬI THÔNG TIN</button>
    </form>
  );
}

export default ContactForm;
