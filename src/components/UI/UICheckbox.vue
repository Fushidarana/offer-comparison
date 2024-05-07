<template>
  <div class="ui_checkbox">
    <input
        type="checkbox"
        id="ui-checkbox"
        class="ui-checkbox_input"
        @input="(event) => $emit('onCheck', event.target.checked)">
    <label for="ui-checkbox">{{ props.label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  label: String
})
</script>

<style>
.ui_checkbox {
  width: 100%;
  height: 100%;
}

.ui-checkbox_input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.ui-checkbox_input + label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  gap: .5rem;
  color: var(--text-accent);
  cursor: pointer;
  font-size: var(--font-size-sm--base);
}

.ui-checkbox_input + label::before {
  content: '';
  border: rgba(128, 128, 128, .3) .2rem solid;
  width: 1.7rem;
  height: 1.7rem;
  border-radius: .4rem;
  cursor: pointer;
}

.ui-checkbox_input:checked + label::before {
  content: '✔';
  border-color: var(--blue);
  background-color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  border-radius: .4rem;
}

@media (min-width: 1200px) {
  .ui-checkbox_input + label {
    font-size: var(--font-size-base);
  }

  .ui-checkbox_input + label::before {
    width: 2.4rem;
    height: 2.4rem;
  }
}
</style>