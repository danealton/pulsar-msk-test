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

    <pulsar-software-information />
  </div>
</template>

<script>
import LinkButton from 'molecules/LinkButton';

import MainHeader from 'organisms/MainHeader';
import CatalogMenu from 'organisms/CatalogMenu';
import PulsarSoftwareInformation from 'organisms/PulsarSoftwareInformation';

export default {
  name: 'MainTemplate',
  components: {
    LinkButton,
    MainHeader,
    CatalogMenu,
    PulsarSoftwareInformation,
  },
};
</script>
