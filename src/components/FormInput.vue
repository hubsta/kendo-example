<template>
  <fieldwrapper>
    <klabel
      :editor-id="id"
      :editor-valid="valid"
      :disabled="disabled"
      :optional="optional"
    >
      {{ label }}
    </klabel>
    <div class="k-form-field-wrap">
      <kinput
        :valid="valid"
        :id="id"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        :type="type"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <error v-if="showValidationMessage">
        {{ validationMessage }}
      </error>
      <hint v-else>{{ hint }}</hint>
    </div>
  </fieldwrapper>
</template>
<script lang="ts">
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label } from '@progress/kendo-vue-labels';
import { Input } from '@progress/kendo-vue-inputs';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    optional: Boolean,
    disabled: Boolean,
    placeholder: String,
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
      type: String,
      default: '',
    },
    type: String,
  },
  components: {
    fieldwrapper: FieldWrapper,
    error: Error,
    hint: Hint,
    klabel: Label,
    kinput: Input,
  },
  computed: {
    showValidationMessage() {
      return this.$props.touched && this.$props.validationMessage;
    },
    showHint() {
      return !this.showValidationMessage && this.$props.hint;
    },
    hintId() {
      return this.showHint ? `${this.$props.id}_hint` : '';
    },
    errorId() {
      return this.showValidationMessage ? `${this.$props.id}_error` : '';
    },
  },
  emits: {
    change: null,
    blur: null,
    focus: null,
  },
  methods: {
    handleChange(e: any) {
      this.$emit('change', e);
    },
    handleBlur(e: any) {
      this.$emit('blur', e);
    },
    handleFocus(e: any) {
      this.$emit('focus', e);
    },
  },
});
</script>