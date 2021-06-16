<template>
  <div>
    <div>
      <slot name="header" />
    </div>
    <div>
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsContainer',
  components: {
  },
};
</script>

<style lang="sass" module>
</style>
