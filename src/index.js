// export { default as default } from './Component.svelte';
import { default as App} from './Component.svelte'
console.log('xxx')

const app = new App({
  target: document.body,
  props: {
    // name: 'world'
  }
});