<template>
  <div class="head-wrapper">
    <span class="go-year" @click="goLastYear"
      ><van-icon name="arrow-left"
    /></span>
    <span class="go-month" @click="goLastMonth"
      ><van-icon name="arrow-left"
    /></span>
    <span class="title">
      <span
        class="year"
        @click="goYear"
        @mouseover="addActive($event)"
        @mouseout="removeActive($event)"
        >{{ year }}年</span
      >
      <span
        @click="goMonth"
        @mouseover="addActive($event)"
        @mouseout="removeActive($event)"
        >{{ month }}月</span
      >
    </span>
    <span class="go-month" @click="goNextMonth"><van-icon name="arrow" /></span>
    <span class="go-year" @click="goNextYear"><van-icon name="arrow" /></span>
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
    goMonth() {
      this.changeMonthFlag()
    },
    goYear() {
      this.changeYearFlag()
    },
    goLastMonth() {
      this.lastMonth()
    },
    goNextMonth() {
      this.nextMonth()
    },
    goLastYear() {
      this.lastYear()
    },
    goNextYear() {
      this.nextYear()
    },
    ...mapMutations([
      'changeMonthFlag',
      'changeYearFlag',
      'lastMonth',
      'nextMonth',
      'lastYear',
      'nextYear'
    ])
  },
  computed: {
    ...mapState(['dayFlag', 'monthFlag', 'yearFlag', 'year', 'month'])
  }
}
</script>

<style lang="less" scoped>
.head-wrapper {
  display: flex;
  cursor: pointer;
  .go-year {
    text-align: center;
    width: 30px;
  }
  .title {
    flex: 1;
    text-align: center;
    color: black;

    .year {
      margin-right: 10px;
    }
    .active {
      color: #1890ff;
    }
  }
  .go-month {
    text-align: center;
    width: 30px;
  }
}
</style>
