<template>
  <div>
    <p class="font-weight-bold">Publications per year</p>
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
      chartData: [["Year", "Before", "During", "After"]],

      chartOptions: {
        height: 500,
        colors,
        chartArea: { width: "70%", height: "70%", gridlines: "white" },
        enableInteractivity: true,
        orientation: "horizontal",
        vAxis: { format: "decimal" },
      },
      startDate: 2010,
    };
  },
  props: ["publicationsPeryear"],
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
      // newArr.push()
      newArr.push(`${this.startDate}`);
      newArr.push(beforeItem);
      newArr.push(duringItem);
      newArr.push(afterItem);

      this.chartData.push(newArr);
    });
  },
};
</script>

<style lang="scss" scoped></style>
