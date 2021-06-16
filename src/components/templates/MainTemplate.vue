<template>
  <div>
    <main-header />
    <catalog-menu />

    <div style="margin: 10rem; width: 315px; display: flex;">
      <link-button link="//ya.ru" text="Прайс-лист">
        <download-icon slot="icon" />
      </link-button>
    </div>

    <div style="margin: 10rem; width: 315px; display: flex;">
      <link-button type="secondary" link="//ya.ru" text="Каталог продукции">
        <download-icon slot="icon" />
      </link-button>
    </div>

    <div style="margin: 10rem; width: 315px; display: flex;">
      <link-button type="secondary" link="//ya.ru" text="Все категории">
        <chevron-right-icon slot="icon" />
      </link-button>
    </div>

    <div style="margin: 10rem; width: 315px; display: flex;">
      <link-button type="transparent" link="//ya.ru" text="Подробнее">
        <chevron-right-icon slot="icon" />
      </link-button>
    </div>

    <pulsar-software-information />
  </div>
</template>

<script>
import DownloadIcon from 'icons/base/download.svg';
import ChevronRightIcon from 'icons/arrows/chevron-right.svg';

import LinkButton from 'molecules/LinkButton';

import MainHeader from 'organisms/MainHeader';
import CatalogMenu from 'organisms/CatalogMenu';
import PulsarSoftwareInformation from 'organisms/PulsarSoftwareInformation';

export default {
  name: 'MainTemplate',
  components: {
    DownloadIcon,
    ChevronRightIcon,

    LinkButton,
    MainHeader,
    CatalogMenu,
    PulsarSoftwareInformation,
  },
};
</script>
