<form on:submit>
  <slot>form</slot>
</form>

<script>
  import { setContext } from 'svelte'
  export let form;

  setContext('form', form);
</script>