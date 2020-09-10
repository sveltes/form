export default function () {
  const fields = {
    username: "zhangsan",
    password: "",
    profile: {
      sex: 1,
      age: 18,
    },
  };
  return {
    form: {
      fields,
    },
    fields,
    handleSubmit() {},
  };
}
