// export { default as default } from './Component.svelte';
import { default as App} from './Component.svelte'

const app = new App({
  target: document.body,
  props: {
    // name: 'world'
  }
});