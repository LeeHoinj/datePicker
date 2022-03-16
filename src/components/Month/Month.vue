<template>
  <div class="month-wrapper">
    <monthHeader></monthHeader>
    <monthContent></monthContent>
  </div>
</template>

<script>
import monthHeader from '@/components/Month/Header.vue'
import monthContent from '@/components/Month/Content.vue'
export default {
  name: 'Month',
  components: {
    monthHeader,
    monthContent
  }
}
</script>

<style lang="less" scoped>
.month-wrapper {
  width: 280px;
  height: 230px;
  margin: 0 auto;
  font-size: 14px;
}
</style>
