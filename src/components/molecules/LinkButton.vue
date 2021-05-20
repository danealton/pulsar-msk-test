<template>
  <c-link :href="link">
    <div :class="{ [$style.container]: true, [$style[type]]: true }">
      <div :class="$style.text">
        {{ text }}
      </div>
      <div :class="$style.icon">
        <div :class="$style.iconOverlay"></div>
        <download-icon />
      </div>
    </div>
  </c-link>
</template>

<script>
import { inArray } from 'library/component/validators';
import DownloadIcon from 'icons/base/download.svg';

import CLink from 'atoms/common/Link';

export default {
  name: 'LinkButton',
  components: {
    CLink,
    DownloadIcon,
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
  },
};
</script>

<style lang="sass" module>
  svg
    width: 100%
    display: block
    fill: white
    fill: $color-base-primary

  .container
    position: relative
    display: flex
    align-items: center
    justify-content: space-between
    padding: 13px 24px
    border-radius: 5px
    transition: all .2s linear

  .text
    font-weight: 600
    font-size: 16px
    line-height: 24px
    color: $color-base-primary

  .icon
    max-width: 22px
    max-height: 22px
    position: relative
    display: flex

  .iconOverlay
    width: 32px
    height: 32px
    position: absolute
    top: 50%
    left: 50%
    background: rgba(255, 255, 255, 0.41)
    border-radius: 50%
    transform: translate(-50%, -50%)

  .primary
    background-color: #F56B18

    &:hover
      background-color: #F67A30

  .secondary
    background-color: #0060B7

    &:hover
      background-color: #1A70BF
</style>
