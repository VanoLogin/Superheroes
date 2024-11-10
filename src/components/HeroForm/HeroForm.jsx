import { Formik, Form, Field, ErrorMessage } from "formik";
import { createHero } from "../../services/heroService.js";
import { validationSchema } from "../../validation/validationSchema.js";
import PropTypes from "prop-types";
import style from "./style.module.scss";

const HeroForm = ({ onSuccess }) => {
  const initialValues = {
    nickname: "",
    realName: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
    image: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    try {
      const heroData = {
        ...values,
        image:
          values.image ||
          "https://lh6.googleusercontent.com/proxy/wSb-FphGOKoLEKGRZpKi45xy2ZmDDgrtP96i11RZz702kHmnCD40yOWvNamjENf3DGUrxNYVqAsWqnNrElZbpEFmddD4yt_Frk4eVq-B6Gbn52WoDruNdhrHVxHSaqBfeKGBEyiE_BZ_PBkgB-o4i2XQ_MrHHqgWjTe13oUNynQLW3rJHjKxZN-_wbIpz3wKB70ZP97Mj2KEjLZIEArAza0FX-I0gvWncErLTnbAYsDqPuc", // Заглушка для фото
      };
      const newHero = await createHero(heroData);
      onSuccess(newHero);
      resetForm();
    } catch (error) {
      console.error("Error creating hero:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={style.form}>
          <label className={style.label}>
            Nickname:
            <Field name="nickname" className={style.input} />
            <ErrorMessage
              name="nickname"
              component="div"
              className={style.errorMessage}
            />
          </label>

          <label className={style.label}>
            Real Name:
            <Field name="realName" className={style.input} />
            <ErrorMessage
              name="realName"
              component="div"
              className={style.errorMessage}
            />
          </label>

          <label className={style.label}>
            Origin Description:
            <Field
              name="originDescription"
              as="textarea"
              className={style.textarea}
            />
            <ErrorMessage
              name="originDescription"
              component="div"
              className={style.errorMessage}
            />
          </label>

          <label className={style.label}>
            Superpowers:
            <Field name="superpowers" className={style.input} />
            <ErrorMessage
              name="superpowers"
              component="div"
              className={style.errorMessage}
            />
          </label>

          <label className={style.label}>
            CatchPhrase:
            <Field name="catchPhrase" className={style.input} />
            <ErrorMessage
              name="catchPhrase"
              component="div"
              className={style.errorMessage}
            />
          </label>

          <label className={style.label}>
            Image (URL):
            <Field
              name="image"
              placeholder="paste a URL for image"
              className={style.input}
            />
            <ErrorMessage
              name="image"
              component="div"
              className={style.errorMessage}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={style.button}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
HeroForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default HeroForm;
