import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
export default new Vuex.Store({
  state: {
    dayFlag: false,
    monthFlag: false,
    yearFlag: false,
    year: year,
    month: month,
    day: day,
    selectDate: ''
  },
  mutations: {
    // over
    selectOver(state) {
      state.dayFlag = false
      state.monthFlag = false
      state.yearFlag = false
    },
    // 日月年面板切换
    changeDayFlag(state) {
      state.dayFlag = true
      state.monthFlag = false
      state.yearFlag = false
    },
    changeMonthFlag(state) {
      state.dayFlag = false
      state.monthFlag = true
      state.yearFlag = false
    },
    changeYearFlag(state) {
      state.dayFlag = false
      state.monthFlag = false
      state.yearFlag = true
    },
    // 选择指定日期
    changeDate(state, curDate) {
      state.month = curDate.month
      state.day = curDate.date
      state.selectDate = `${state.year}-${state.month}-${state.day}`
    },
    // 日面板切换年月
    lastMonth(state) {
      state.month--
      if (state.month === 0) {
        state.month = 12
        state.year--
      }
    },
    nextMonth(state) {
      state.month++
      if (state.month === 13) {
        state.month = 1
        state.year++
      }
    },
    lastYear(state) {
      state.year--
    },
    nextYear(state) {
      state.year++
    },
    // 跳转指定年月
    specifiedMonth(state, tar) {
      state.month = tar
    },
    specifiedYear(state, tar) {
      state.year = tar
    },
    // 切换十年
    lastTenYear(state) {
      state.year -= 10
    },
    nextTenYear(state) {
      state.year += 10
    }
  },
  actions: {},
  modules: {}
})
