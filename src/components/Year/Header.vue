<template>
  <div class="head-wrapper">
    <span @click="goLastTenYear"><van-icon name="arrow-left" /></span>
    <div class="title">
      <span @mouseover="addActive($event)" @mouseout="removeActive($event)"
        >{{ year - (year % 10) }}-{{ year - (year % 10) + 9 }}</span
      >
    </div>
    <span @click="goNextTenYear"><van-icon name="arrow" /></span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'dayHeader',
  methods: {
    addActive($event) {
      const myclass = $event.currentTarget.className
      $event.currentTarget.className = myclass + ' active'
    },
    removeActive($event) {
      let myclass = $event.currentTarget.className
      const index = myclass.indexOf('active')
      myclass = myclass.slice(0, index) + myclass.slice(index + 6)
      $event.currentTarget.className = myclass
    },
    goLastTenYear() {
      this.lastTenYear()
    },
    goNextTenYear() {
      this.nextTenYear()
    },

    ...mapMutations(['lastTenYear', 'nextTenYear'])
  },
  computed: {
    ...mapState(['dayFlag', 'monthFlag', 'yearFlag', 'year'])
  }
}
</script>

<style lang="less" scoped>
.head-wrapper {
  display: flex;
  cursor: pointer;
  .title {
    flex: 1;
    text-align: center;
    color: black;
    display: block;

    .active {
      color: #1890ff;
    }
  }
}
</style>
