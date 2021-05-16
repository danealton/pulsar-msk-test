<template>
  <div :class="$style.container">
    <button @click="onToggleActiveState">
      {{ isActiveState ? 'burger-icon-active' : 'burger-icon-inactive' }}
    </button>
  </div>
</template>

<script>
import { EVENT_BUS } from 'root/eventBus';
import { CATALOG_MENU_OPENED, CATALOG_MENU_CLOSED } from 'root/const';

export default {
  name: 'MenuButton',
  created() {
    EVENT_BUS.$on(CATALOG_MENU_CLOSED, this.onResetActiveState);
  },
  beforeDestroy() {
    EVENT_BUS.$off(CATALOG_MENU_CLOSED, this.onResetActiveState);
  },
  data() {
    return {
      isActiveState: false,
    };
  },
  watch: {
    isActiveState: {
      handler(val) {
        if (val) {
          EVENT_BUS.$emit(CATALOG_MENU_OPENED);
          return;
        }

        EVENT_BUS.$emit(CATALOG_MENU_CLOSED);
      },
    },
  },
  methods: {
    onResetActiveState() {
      this.isActiveState = false;
    },
    onToggleActiveState() {
      this.isActiveState = !this.isActiveState;
    },
  },
};
</script>

<style lang="sass" module>
  .container
</style>
