<template>
  <div class="content-wrapper">
    <div class="months" v-for="(row, i) in monthList" :key="i">
      <div
        class="month-con"
        v-for="(month, index) in row"
        :key="index"
        :class="month.type"
        @click="goDay(month.val)"
        @mouseover="addActive($event)"
        @mouseout="removeActive($event)"
      >
        {{ month.val }}月
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'monthContent',
  data() {
    return {
      monthList: [],
      curYear: '',
      curMonth: ''
    }
  },
  created() {
    this.getYearMonthDay()
    this.getMonthList(this.curMonth)
  },
  methods: {
    getYearMonthDay() {
      const date = new Date()
      this.curYear = date.getFullYear()
      this.curMonth = date.getMonth() + 1
    },
    getMonthList(curMonth) {
      let row = []
      for (let i = 1; i < 13; i++) {
        if (i === curMonth && this.year === this.curYear) {
          row.push({ type: 'current', val: i })
        } else {
          row.push({ type: 'monthDefault', val: i })
        }

        if (row.length === 3) {
          this.monthList.push(row)
          row = []
        }
      }
    },
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
    goDay(selectMonth) {
      this.specifiedMonth(selectMonth)
      this.changeDayFlag()
    },
    ...mapMutations(['changeDayFlag', 'specifiedMonth'])
  },
  computed: {
    ...mapState(['year'])
  }
}
</script>

<style lang="less" scoped>
.content-wrapper {
  margin-top: 10px;
  .months {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    cursor: pointer;
    .month-con {
      text-align: center;
      color: black;
    }
    .active {
      background: rgb(238, 236, 236);
      border-radius: 2px;
    }
    .current {
      border-radius: 2px;
      color: white;
      background: #1890ff;
    }
  }
}
</style>
