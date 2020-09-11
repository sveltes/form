import * as yup from "yup";
import extend from "extend";
export default function (params = {}) {
  const {
    initialValues = {},
    validationSchema = function () {},
    onSubmit = function () {}
  } = params;
  const schema = validationSchema(yup);

  const fields = extend(true, {}, initialValues);
  const values = extend(true, {}, initialValues);

  return {
    values,
    fields,
    schema,
    errors: {},
    async handleSubmit() {
      await schema
        .validate(values, {
          abortEarly: false,
          stripUnknown: true
        })
        .then((res) => {
          onSubmit({ values: res });
        })
        .catch((err) => {
          console.log("err: ", err);
        });
    }
  };
}
