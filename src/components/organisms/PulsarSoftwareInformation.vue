<template>
  <div>
    <tabs-container>
      <div :class="$style.tabs" slot="header">
        <tab-button :class="{ [$style.active]: activeTab === item.id }" v-for="item in contentList"
        :key=item.id :id=item.id>
          {{item.title}}
        </tab-button>
      </div>
      <div :class="$style.content" slot="content">
        {{activeContent.content}}
      </div>
    </tabs-container>
  </div>
</template>

<script>
import TabButton from 'molecules/TabButton';
import TabsContainer from 'molecules/TabsContainer';

import { EVENT_BUS } from 'root/eventBus';
import { TAB_CHANGED } from 'root/const';

export default {
  name: 'PulsarSoftwareInformation',
  components: {
    TabButton,
    TabsContainer,
  },
  created() {
    EVENT_BUS.$on(TAB_CHANGED, this.changeActiveTab);

    // Инсцинировка получение данных с апи
    this.contentList = [
      { id: 1, title: 'Заголовок 1', content: 'Контент 1' },
      { id: 2, title: 'Заголовок 2', content: 'Контент 2' },
      { id: 3, title: 'Заголовок 3', content: 'Контент 3' },
    ];
    this.activeTab = this.contentList[0].id;
  },
  beforeDestroy() {
    EVENT_BUS.$off(TAB_CHANGED, this.changeActiveTab);
  },
  data() {
    return {
      activeTab: 0,
      contentList: [],
    };
  },
  computed: {
    activeContent() {
      return this.contentList.find(item => item.id === this.activeTab);
    },
  },
  methods: {
    changeActiveTab(id) {
      this.activeTab = id;
    },
  },
};
</script>

<style lang="sass" module>
  .tabs
    position: relative
    display: flex
    gap: 20px
    width: fit-content;
    justify-content: space-around;
    border-bottom: 1px solid black;

  .content
    margin-top: 30px
    display: flex

  .active
    &:after
      position: absolute;
      content: '';
      border-bottom: 1px solid red;
      width: 100%;
      display: block;
      margin-left: 0;
</style>
