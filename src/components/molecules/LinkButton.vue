<template>
  <c-link :href="link">
    <div :class="{ [$style.container]: true, [$style[type]]: true }">
      <div :class="$style.text">
        {{ text }}
      </div>

      <div v-if="$slots.hasOwnProperty('icon')" :class="$style.icon">
        <div :class="$style.iconOverlay"></div>
        <slot name="icon" />
      </div>
    </div>
  </c-link>
</template>

<script>
import { inArray } from 'library/component/validators';

import CLink from 'atoms/common/Link';

export default {
  name: 'LinkButton',
  components: {
    CLink,
  },
  props: {
    type: {
      type: String,
      validator: inArray(['primary', 'secondary', 'transparent']),
      default: () => 'primary',
    },
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style lang="sass" module>
  svg
    width: 100%
    display: block
    fill: $color-base-primary
    z-index: 100

  .container
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    padding: 10px 24px
    border-radius: 5px
    border: 2px solid transparent
    transition: all .2s linear

  .text
    font-weight: 600
    font-size: 16px
    line-height: 24px

  .icon
    max-width: 32px
    max-height: 22px
    position: relative
    display: flex

  .iconOverlay
    width: 32px
    height: 32px
    position: absolute
    top: 50%
    left: 50%
    background-color: rgba(255, 255, 255, .4)
    border-radius: 50%
    transition: all .2s linear
    transform: translate(-50%, -50%)

  .primary
    color: $color-base-primary
    background-color: #F56B18

    &:hover
      background-color: #F67A30

  .secondary
    color: $color-base-primary
    background-color: #0060B7

    &:hover
      background-color: #1A70BF

  .transparent
    color: #F56B18
    background-color: transparent
    border-color: rgba(245, 107, 24, .5)

    & .iconOverlay
      background-color: rgba(245, 107, 24, .5)

    &:hover
      color: #fff
      background-color: #F67A30
      border-color: rgba(245, 107, 24, .5)

      & .iconOverlay
        background-color: rgba(255, 255, 255, .4)
</style>
