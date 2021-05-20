<template>
  <div>
    <main-header />
    <catalog-menu />
    <div style="margin: 10rem; width: 315px; display: flex;">
      <link-button link="//ya.ru" text="Прайс-лист" />
    </div>
    <div style="margin: 10rem; width: 315px; display: flex;">
      <link-button type="secondary" link="//ya.ru" text="Каталог продукции" />
    </div>
  </div>
</template>

<script>
import MainHeader from 'organisms/MainHeader';
import CatalogMenu from 'organisms/CatalogMenu';

import LinkButton from 'molecules/LinkButton';

export default {
  name: 'MainTemplate',
  components: {
    MainHeader,
    CatalogMenu,
    LinkButton,
  },
};
</script>
