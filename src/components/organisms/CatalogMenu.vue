<template>
  <div :class="$style.container">
    <transition :name="$style.fade">
      <div v-if="isShownCatalogMenu">
        <div>
          catalog-menu-shown
        </div>
        <div>
          <button @click="onClickToCloseCatalogMenu">Close</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { EVENT_BUS } from 'root/eventBus';
import { CATALOG_MENU_OPENED, CATALOG_MENU_CLOSED } from 'root/const';

export default {
  name: 'CatalogMenu',
  created() {
    EVENT_BUS.$on(CATALOG_MENU_OPENED, this.onShowCatalogMenu);
    EVENT_BUS.$on(CATALOG_MENU_CLOSED, this.onCloseCatalogMenu);
  },
  beforeDestroy() {
    EVENT_BUS.$off(CATALOG_MENU_OPENED, this.onShowCatalogMenu);
    EVENT_BUS.$off(CATALOG_MENU_CLOSED, this.onCloseCatalogMenu);
  },
  data() {
    return {
      isShownCatalogMenu: false,
    };
  },
  methods: {
    onShowCatalogMenu() {
      this.isShownCatalogMenu = true;
    },
    onCloseCatalogMenu() {
      this.isShownCatalogMenu = false;
    },
    onClickToCloseCatalogMenu() {
      EVENT_BUS.$emit(CATALOG_MENU_CLOSED);
    },
  },
};
</script>

<style lang="sass" module>
  .container

  .fade
    &:global(-enter-active),
    &:global(-leave-active)
      transition: opacity 0.5s ease

    &:global(-enter),
    &:global(-leave-to)
      opacity: 0
</style>
