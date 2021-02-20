import * as yup from "yup";

const schema = yup.object({
  value: yup.string().required("This field is required"),
  monthyPrice: yup.number("Field must be a number").required("This field is required"),
  setupPrice: yup.number("Field must be a number").required("This field is required"),
  currency: yup.string().required("This field is required")
});

export default schema;
