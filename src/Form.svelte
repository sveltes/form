<script>
  // import { fields } from './store'
  import { setContext } from "svelte";
  export let form;
  export let options = {};
  form.validateOptions = options;
  setContext("form", form);

  // const unsubscribe = fields.subscribe(function (value)  {
  //   // 校验id
  //   // console.log('value ', value)
  //   console.log(arguments)
  // }, function (value) {
  //   console.log('set: ',arguments)
  // })
  // onDestroy(unsubscribe)
</script>

<form on:submit on:reset>
  <slot>form</slot>
</form>
