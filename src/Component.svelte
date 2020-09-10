<Form form={form} on:submit={ handleSubmit }>
	<Field id="username" let:id={id}>
		<input type="text" bind:value={fields[id]}/>
	</Field>
	<div>
		<Field id="profile.sex">
			<input type="text">
		</Field>
		<Field id="profile.age">
			<input type="text">
		</Field>
	</div>
</Form>
<script>
	import createForm from './create-form'
	import Form from './Form.svelte'
	import Field from './Field.svelte'
	
  const { form, fields, handleSubmit } = createForm({
  	defaults: {
    	username: 'zhangsan',
			password: '',
			profile: {
				sex: 1,
				age: 18
			}
    },
    schemas: (yup) => yup.object().shape({
      username: yup.string().required(),
      password: yup.string().required()
    }),
    submit() {
    
    }
  })
  
</script>