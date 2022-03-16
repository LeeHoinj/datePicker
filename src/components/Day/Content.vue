<template>
  <div class="content-wrapper">
    <div class="weeks">
      <div class="week-con" v-for="(item, i) in weeks" :key="i">
        {{ item }}
      </div>
    </div>
    <div class="days" v-for="(row, index) in dateList" :key="index">
      <div
        class="day-default"
        v-for="(date, index) in row"
        :key="index"
        :class="date.type"
        @click="display(date)"
        @mouseover="addActive($event)"
        @mouseout="removeActive($event)"
      >
        {{ date.date }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'dayContent',
  data() {
    return {
      weeks: ['一', '二', '三', '四', '五', '六', '日'],
      dateList: [],
      curYear: '',
      curMonth: '',
      curDay: ''
    }
  },
  created() {
    this.getYearMonthDay()
    this.getDateList()
    // 记录当前的日期
  },
  watch: {
    month() {
      this.dateList.length = 0
      this.getDateList()
    },
    year() {
      this.dateList.length = 0
      this.getDateList()
    }
  },
  computed: {
    ...mapState(['year', 'month', 'day'])
  },
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
    getYearMonthDay() {
      const date = new Date()
      this.curYear = date.getFullYear()
      this.curMonth = date.getMonth() + 1
      this.curDay = date.getDate()
    },
    getDateList() {
      const curMonth = this.month
      let preMonthLastDay = new Date(this.year, curMonth - 1, 0).getDate() // 上一个月的最后一天
      let startWeek = new Date(this.year, curMonth - 1, 1).getDay() // 当前月的第一天是周几
      startWeek = startWeek === 0 ? 7 : startWeek
      const curDays = new Date(this.year, this.month, 0).getDate() // 当月总天数
      let weekList = []
      const firstWeekDays = 7 - startWeek + 1 // 本月第一周天数
      let lastMonthDays = 7 - firstWeekDays // 上月要展示的天数
      const nextMonthDays = 42 - (curDays + lastMonthDays) // 下月要展示的天数
      // 本月完整星期的日期
      this.dateList[0] = []
      for (let i = 1; i <= curDays; i++) {
        if (i <= firstWeekDays) {
          // 不足一星期的
          if (
            i === this.curDay &&
            this.curMonth === parseInt(curMonth) &&
            this.curYear === this.year
          ) {
            this.dateList[0].push({ type: 'current', date: i, month: curMonth })
          } else {
            this.dateList[0].push({
              type: 'day-default',
              date: i,
              month: curMonth
            })
          }
        } else {
          if (
            i === this.curDay &&
            this.curMonth === parseInt(curMonth) &&
            this.curYear === this.year
          ) {
            weekList.push({ type: 'current', date: i, month: curMonth })
          } else {
            weekList.push({ type: 'day-default', date: i, month: curMonth })
          }
          if (weekList.length === 7) {
            this.dateList.push(weekList)
            weekList = []
          }
        }
      }
      // 下月日期
      for (let i = 1; i <= nextMonthDays; i++) {
        weekList.push({
          type: 'dusk',
          date: i,
          month: curMonth + 1 === 13 ? 1 : curMonth + 1
        })
        if (weekList.length === 7) {
          this.dateList.push(weekList)
          weekList = []
        }
      }
      // 上月日期
      while (lastMonthDays--) {
        this.dateList[0].unshift({
          type: 'dusk',
          date: preMonthLastDay--,
          month: curMonth - 1 === 0 ? 12 : curMonth - 1
        })
      }
    },
    display(date) {
      this.changeDate(date)
      this.selectOver()
    },
    ...mapMutations(['changeDate', 'selectOver'])
  }
}
</script>

<style lang="less" scoped>
.content-wrapper {
  margin-top: 10px;
  .weeks {
    display: flex;
    justify-content: space-between;
  }
  .days {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .day-default {
      width: 18px;
      text-align: center;
      color: black;
    }
    .dusk {
      color: rgb(214, 207, 207);
    }
    .current {
      border-radius: 2px;
      color: white;
      background: #1890ff;
    }
    .active {
      background: rgb(238, 236, 236);
      border-radius: 2px;
    }
  }
}
</style>
