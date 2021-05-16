<template>
  <div :class="$style.container">
    <menu-button />
  </div>
</template>

<script>
import MenuButton from 'molecules/MenuButton';

export default {
  name: 'MainHeader',
  components: {
    MenuButton,
  },
};
</script>

<style lang="sass" module>
  .container
</style>
