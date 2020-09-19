<script>
  import createForm from "./create-form";
  import Form from "./Form.svelte";
  import Field from "./Field.svelte";

  const form = createForm({
    initialValues: {
      username: "zhangsan",
      password: "abc"
      // profile: {
      //   sex: 1,
      //   age: 18
      // }
    },
    validationSchema: (yup) =>
      yup.object().shape({
        username: yup
          .string()
          .required("不能为空")
          .min(6, "字母长度不够")
          .test("ajax", "验证失败", async (value) => {
            await new Promise(function (resolve, reject) {
              setTimeout(resolve, 1000);
            });
            return false;
          }),
        password: yup.string().min(3).required()
      }),
    // .noUnknown(false),
    onSubmit(values) {
      console.log("submit values: ", values);
    },
    onError() {}
  });
  const { fields, handleSubmit, values } = form;
  const changeHandle = (id) => {
    console.log("id: ", values);
    // console.log($fields)
  };
</script>

<Form
  {form}
  options={{}}
  on:submit｜preventDefault={(e) => {
    e.preventDefault();
    handleSubmit();
  }}>
  <Field key="username" let:key let:error>
    <input
      type="text"
      bind:value={form.fields[key]}
      on:change={changeHandle(key)} />
    <div>
      {#if error}{error.message}{/if}
    </div>
  </Field>
  <Field key="password" let:key let:error options={{ autoValidate: true }}>
    <input type="text" bind:value={fields[key]} />
    <span>{#if error}{error.message}{/if}</span>
  </Field>
  <!-- <div>
		<Field id="profile.sex">
			<input type="text">
		</Field>
		<Field id="profile.age">
			<input type="text">
		</Field>
  </div> -->
  <button type="submit">submit</button>
</Form>
