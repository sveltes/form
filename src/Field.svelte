<div>
  <slot id={id}> xxx </slot>
</div>

<script>
  import { getContext } from 'svelte';
  export let id;
  const form = getContext('form');
  const {fields} = form;
</script>