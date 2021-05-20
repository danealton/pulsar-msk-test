<template>
  <a :href="href" :rel="relation" :target="target" :class="$style.container">
    <slot />
  </a>
</template>

<script>
import { inArray } from 'library/component/validators';

export default {
  name: 'CLink',
  props: {
    href: {
      type: String,
      required: true,
    },
    relation: {
      type: String,
      default: () => 'noopener',
    },
    target: {
      type: String,
      validator: inArray(['_blank', '_self', '_parent', '_top']),
      default: () => '_self',
    },
  },
};
</script>

<style lang="sass" module>
  .container
    flex-grow: 1
</style>
