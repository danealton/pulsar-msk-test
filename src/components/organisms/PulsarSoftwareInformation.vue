<template>
  <div>
    <tabs-container>
      <div slot="header">
        <tab-button />
        <tab-button />
        <tab-button />
      </div>
      <div slot="content">

      </div>
    </tabs-container>
  </div>
</template>

<script>
import TabButton from 'molecules/TabButton';
import TabsContainer from 'molecules/TabsContainer';

export default {
  name: 'PulsarSoftwareInformation',
  components: {
    TabButton,
    TabsContainer,
  },
};
</script>
