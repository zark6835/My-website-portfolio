import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputForm from "./InputForm";

const FeedbackForm = () => {
  const dataSending = (value, { resetForm }) => {
    console.log(value);
    resetForm({ name: "", email: "", message: "" });
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        "Invalid Email"
      )
      .required("Required"),
    message: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={dataSending}
    >
      {({ errors, touched }) => (
        <Form className="contacts__form">
          <div className="contacts__form-box">
            <div className="contacts__form-box_wrapper">
              <label className={`contacts__form-box_label ${errors.name && touched.name ? "contacts__form-box_label--error" : ""}`}>Username</label>
              <p className="contacts__form-box_error">
                {errors.name && touched.name && errors.name}
              </p>
            </div>
            <InputForm
              name="name"
              type="text"
              className={`contacts__form-box_input ${errors.name && touched.name ? "contacts__form-box_input--error" : ""}`}
            />
          </div>
          <div className="contacts__form-box">
            <div className="contacts__form-box_wrapper">
            <label className={`contacts__form-box_label ${errors.email && touched.email ? "contacts__form-box_label--error" : ""}`}>Email</label>
            <p className="contacts__form-box_error">
              {errors.email && touched.email && errors.email}
            </p>
            </div>
            <InputForm
              name="email"
              type="email"
              className={`contacts__form-box_input ${errors.email && touched.email ? "contacts__form-box_input--error" : ""}`}
            />
          </div>
          <div className="contacts__form-box_message">
            <div className="contacts__form-box_wrapper">
              <label className={`contacts__form-box_label ${errors.message && touched.message ? "contacts__form-box_label--error" : ""}`}>Message</label>
              <p className="contacts__form-box_error">
                {errors.message && touched.message && errors.message}
              </p>
            </div>
            <InputForm
              as="textarea"
              name="message"
              className={`contacts__form-box_message__input ${errors.message && touched.message ? "contacts__form-box_message__input--error" : ""}`}
            />
          </div>
          <center>
            <button className="contacts__form-button" type="submit">
              SEND
            </button>
          </center>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
