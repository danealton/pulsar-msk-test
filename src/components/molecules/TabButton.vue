<template>
  <c-button :class="$style.tab">
    <div @click="onTabClick">
      <slot />
    </div>
  </c-button>
</template>

<script>
import CButton from 'atoms/common/Button';

import { EVENT_BUS } from 'root/eventBus';
import { TAB_CHANGED } from 'root/const';

export default {
  name: 'TabButton',
  components: {
    CButton,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onTabClick() {
      EVENT_BUS.$emit(TAB_CHANGED, this.id);
    },
  },
};
</script>

<style lang="sass" module>
  .tab
    background-color: unset;
    border-bottom: none;
    position: relative
</style>
