<template>
  <div>
    <main-header />
    <catalog-menu />
  </div>
</template>

<script>
import MainHeader from 'organisms/MainHeader';
import CatalogMenu from 'organisms/CatalogMenu';

export default {
  name: 'MainTemplate',
  components: {
    MainHeader,
    CatalogMenu,
  },
};
</script>
