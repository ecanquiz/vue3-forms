<template>
  <p
    aria-live="assertive"
    class="errorMessage"
    :id="id"
  >
    <slot />
  </p>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  }
}
</script>
