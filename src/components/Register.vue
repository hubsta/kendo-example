<template>
  <form-element :style="{
    margin: '0 auto',
  }">
    <h3>Click on the "Register" button to complete your registration.</h3>
  </form-element>
</template>
<script lang="ts">
import { FormElement } from '@progress/kendo-vue-form';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    'form-element': FormElement,
  },
});
</script>