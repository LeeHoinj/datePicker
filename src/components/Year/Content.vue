<template>
  <div class="content-wrapper">
    <div class="years" v-for="(row, i) in yearList" :key="i">
      <div
        class="year-con"
        :class="item.type"
        v-for="(item, index) in row"
        :key="index"
        @click="goYear(item.year)"
        @mouseover="addActive($event)"
        @mouseout="removeActive($event)"
      >
        {{ item.year }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'yearContent',
  data() {
    return {
      yearList: [],
      startYear: '',
      curYear: ''
    }
  },
  watch: {
    year() {
      this.yearList = []
      this.getYearList(this.year)
    }
  },
  created() {
    this.getYearMonthDay()
    this.getYearList(this.year)
  },
  methods: {
    getYearMonthDay() {
      const date = new Date()
      this.curYear = date.getFullYear()
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
    getYearList(curYear) {
      let row = []
      this.startYear = curYear - (curYear % 10)
      for (let i = this.startYear - 1; i <= this.startYear + 10; i++) {
        if (i === this.startYear - 1 || i === this.startYear + 10) {
          row.push({ type: 'dusk', year: i })
        } else {
          if (i === this.curYear) {
            row.push({ type: 'current', year: i })
          } else {
            row.push({ type: 'default', year: i })
          }
        }
        if (row.length === 3) {
          this.yearList.push(row)
          row = []
        }
      }
    },
    goYear(selectYear) {
      this.specifiedYear(selectYear)
      this.changeMonthFlag()
    },
    ...mapMutations(['changeMonthFlag', 'specifiedYear'])
  },
  computed: {
    ...mapState(['year'])
  }
}
</script>

<style lang="less" scoped>
.content-wrapper {
  margin-top: 10px;
  .years {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    cursor: pointer;
    .year-con {
      text-align: center;
      color: black;
    }
    .dusk {
      color: rgb(214, 207, 207);
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
