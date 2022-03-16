<template>
  <div class="year-wrapper">
    <yearHeader></yearHeader>
    <yearContent></yearContent>
  </div>
</template>

<script>
import yearHeader from '@/components/Year/Header.vue'
import yearContent from '@/components/Year/Content.vue'
export default {
  name: 'Year',
  components: {
    yearHeader,
    yearContent
  }
}
</script>

<style lang="less" scoped>
.year-wrapper {
  width: 280px;
  height: 230px;
  margin: 0 auto;
  font-size: 14px;
}
</style>
