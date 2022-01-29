<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElCascader } from "element-plus";
import ChinaArea from './ChinaArea'
import moment from "moment";

const props = { size: "small", isall: false, leave: 3 }
const birthday = ref("1990-12-12") // 出生年月日
const sex = ref(1) // 性别
const chinaArea = new ChinaArea({ leave: props.leave, isall: props.isall })
const options = chinaArea.chinaData()?.splice(0, 31) // 只取大陆地区
const cascader = ref<InstanceType<typeof ElCascader>>()
const selected = ref(["440000", "440100", "440118"]) // 默认选中的地区

const handleChange = (value: string) => {
  console.log(value[2]);
}

const handleSexChange = (value: string) => {
  console.log(value)
}

const handleBirthdayChange = (value: Date) => {
  console.log(birthday.value)
  console.log(moment(value).format("YYYYMMDD"))
}

const disabledDate = (time: Date) => {
  return time.getTime() > Date.now() // 生日不能大于当前日期
}

// 返回第十八位校验位
function getVerify(value: string): string {
  let list: number[] = value.split('').map(Number)
  let total: number = list[0] * 7 + list[1] * 9 + list[2] * 10 + list[3] * 5 + list[4] * 8 + list[5] * 4 + list[6] * 2 + list[7] * 1
    + list[8] * 6 + list[9] * 3 + list[10] * 7 + list[11] * 9 + list[12] * 10 + list[13] * 5 + list[14] * 8 + list[15] * 4 + list[16] * 2
  let dict: { [key: number]: string } = { 0: "1", 1: "0", 2: "X", 3: "9", 4: "8", 5: "7", 6: "6", 7: "5", 8: "4", 9: "3", 10: "2" }
  return dict[total % 11]
}

const idCard = computed(() => {
  let _area: string = selected.value[2] // 前六位是地区码
  let _birthday: string = moment(birthday.value).format("YYYYMMDD") // 7 - 14 位是出生年月日
  let _random: string = Math.floor(Math.random() * 90 + 10).toString() // 15 - 16 随机数
  let _sex: number = Math.floor(Math.random() * 10) // 17 是性别，男是奇数，女是偶数
  if ((_sex % 2 === 0 && sex.value === 1) || (_sex % 2 === 1 && sex.value === 2)) {
    _sex = (_sex + 1) % 10
  }
  let _source = _area.concat(_birthday).concat(_random).concat(_sex.toString())
  return _source.concat(getVerify(_source))
})

</script>

<template>
  <el-container>
    <el-header>
      <h1>身份证生成器</h1>
    </el-header>
    <el-main>
      <div class="block">
        <el-cascader-panel
          v-model="selected"
          :options="options"
          :props="props"
          @change="handleChange"
          ref="cascader"
        />
      </div>
      <div class="block">
        <span class="demonstration">出生年月日：</span>
        <el-date-picker
          v-model="birthday"
          type="date"
          placeholder="Pick a day"
          :disabled-date="disabledDate"
          @change="handleBirthdayChange"
        ></el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">性别：</span>
        <el-radio-group v-model="sex" @change="handleSexChange">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </div>
    </el-main>
    <el-footer>
      <el-input v-model="idCard" placeholder="Please input" />
    </el-footer>
  </el-container>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
