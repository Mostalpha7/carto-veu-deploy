<template>
  <div>
    <div class="row justify-content-between align-items-center">
      <div class="col-md-6">
        <p class="font-weight-bold">Publications per year</p>
      </div>
      <div class="col-md-3">
        <select v-model="activeData" @change="filterData" class="form-control">
          <option value="beforeAndDuring" disabled selected
            >Select Period</option
          >
          <option value="beforeAndDuring">Before & During </option>
          <option value="beforeAndAfter">Before & After</option>
          <option value="duringAndAfter">During & After</option>
        </select>
      </div>
    </div>
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { colors } from "@/resource";

export default {
  components: { GChart },
  data() {
    return {
      activeData: "beforeAndDuring",
      // chartData: [["Year", "Before", "During", "After"]],

      chartOptions: {
        height: 500,
        colors,
        chartArea: { width: "70%", height: "70%", gridlines: "white" },
        enableInteractivity: true,
        orientation: "horizontal",
        vAxis: { format: "decimal" },
      },
      allData: [["Year", "Before", "During", "After"]],
      beforeAndDuring: [["Year", "Before", "During"]],
      beforeAndAfter: [["Year", "Before", "After"]],
      duringAndAfter: [["Year", "During", "After"]],

      startDate: 2010,
    };
  },
  props: ["publicationsPeryear"],

  methods: {
    filterData() {},
    switchData() {},
  },
  computed: {
    chartData() {
      if (this.activeData === "beforeAndDuring") {
        return this.beforeAndDuring;
      }
      if (this.activeData === "beforeAndAfter") {
        return this.beforeAndAfter;
      }
      if (this.activeData === "duringAndAfter") {
        return this.duringAndAfter;
      }
    },
  },
  created() {
    var before = [];
    var during = [];
    var after = [];

    this.publicationsPeryear.forEach((item) => {
      if (item.label === "before") {
        before = item.data;
      }

      if (item.label === "during") {
        during = item.data;
      }
      if (item.label === "after") {
        after = item.data;
      }
    });

    before.forEach((item, index) => {
      let newArr = [];
      this.startDate += 1;
      // get the value for before/during/after
      let beforeItem = before[index];
      let duringItem = during[index];
      let afterItem = after[index];
      newArr.push(`${this.startDate}`);
      newArr.push(beforeItem);
      newArr.push(duringItem);
      newArr.push(afterItem);

      // this.chartData.push(newArr);
      // this.allData.push(newArr);

      // for only beforeAndDuring
      let be4andDuringItem = [];
      be4andDuringItem.push(`${this.startDate}`, beforeItem, duringItem);
      this.beforeAndDuring.push(be4andDuringItem);

      // for beforeAndAfter
      let be4andAfterItem = [];
      be4andAfterItem.push(`${this.startDate}`, beforeItem, afterItem);
      this.beforeAndAfter.push(be4andAfterItem);

      // during and after
      let duringAndAfterItem = [];
      duringAndAfterItem.push(`${this.startDate}`, duringItem, afterItem);
      this.duringAndAfter.push(duringAndAfterItem);
    });
  },
};
</script>

<style lang="scss" scoped></style>
