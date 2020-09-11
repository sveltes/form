<script>
  import * as yup from "yup";
  import expr from "property-expr";
  import { getContext } from "svelte";
  const form = getContext("form");
  const { fields, schema, values } = form;
  let error = null;

  export let key;
  export let options = {
    autoValidate: false
  };

  let fieldSchema;
  try {
    fieldSchema = yup.reach(schema, key);
  } catch (err) {
    if (console && console.warn) {
      // console.warn(err);
    }
  }

  const setValue = expr.setter(key);
  const getValue = expr.getter(key);

  if (options.autoValidate) {
    validate(getValue(values));
  }

  Object.defineProperty(fields, key, {
    set(val) {
      validate(val);
      setValue(values, val);
    },
    get() {
      return getValue(values);
      // return abc;
    }
  });

  function validate(val) {
    if (!fieldSchema) {
      return;
    }
    fieldSchema
      .validate(val)
      .then(function () {
        error = null;
      })
      .catch((err) => {
        error = {
          type: err.type,
          message: err.message
        };
        // console.log("err: ", err);
      });
  }
</script>

<div>
  <slot {key} {error}>xxx</slot>
</div>
