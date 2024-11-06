import * as Yup from "yup";
export const validationSchema = Yup.object({
  nickname: Yup.string().required("nickname is required"),
  realName: Yup.string().required("realName is required"),
  originDescription: Yup.string().required("description is required"),
  superpowers: Yup.string().required("superpowers is required"),
  catchPhrase: Yup.string().required("catchPhrase is required"),
  image: Yup.string(),
});
