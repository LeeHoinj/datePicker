<template>
  <div class="head-wrapper">
    <span @click="goLastYear"><van-icon name="arrow-left" /></span>
    <div class="title" @click="goYear">
      <span @mouseover="addActive($event)" @mouseout="removeActive($event)"
        >{{ year }}年</span
      >
    </div>
    <span @click="goNextYear"><van-icon name="arrow" /></span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'monthHeader',
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
    goYear() {
      this.changeYearFlag()
    },
    goLastYear() {
      this.lastYear()
    },
    goNextYear() {
      this.nextYear()
    },
    ...mapMutations(['changeYearFlag', 'lastYear', 'nextYear'])
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
