<template>
  <div class="date-picker-wrapper" ref="picker">
    <input
      class="date-picker-input"
      v-model="selectDate"
      placeholder="请选择日期"
      @focus="getDayFlag"
    />
    <div class="date-picker-popover">
      <Day v-if="dayFlag"></Day>
      <Month v-if="monthFlag"></Month>
      <Year v-if="yearFlag"></Year>
    </div>
  </div>
</template>

<script>
import Day from '@/components/Day/Day.vue'
import Month from '@/components/Month/Month.vue'
import Year from '@/components/Year/Year.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DatePicker',
  data() {
    return {}
  },
  computed: {
    ...mapState(['dayFlag', 'monthFlag', 'yearFlag', 'selectDate'])
  },
  components: { Day, Month, Year },
  methods: {
    getDayFlag() {
      this.changeDayFlag()
    },
    ...mapMutations(['changeDayFlag'])
  }
}
</script>

<style lang="less" scoped>
.date-picker-wrapper {
  position: relative;
  width: 150px;
  margin: 0 auto;
  .date-picker-input {
    width: 100%;
    padding: 3px;
  }
  .date-picker-popover {
    color: #65708c;
    padding: 5px;
    position: absolute;
    top: 30px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
  }
}
</style>
