<template>
  <div class="day-wrapper">
    <dayHeader></dayHeader>
    <dayContent></dayContent>
  </div>
</template>

<script>
import dayHeader from '@/components/Day/Header.vue'
import dayContent from '@/components/Day/Content.vue'
export default {
  name: 'Day',
  components: {
    dayHeader,
    dayContent
  }
}
</script>

<style lang="less" scoped>
.day-wrapper {
  width: 280px;
  height: 230px;
  margin: 0 auto;
  font-size: 14px;
}
</style>
