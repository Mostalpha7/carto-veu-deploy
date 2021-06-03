<template>
  <div class="">
    <p class="font-weight-bold">
      Proportion Of Research Approach Used
    </p>
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";
import { colors } from "@/resource";
export default {
  components: { GChart },
  data() {
    return {
      chartData: [["Task", "Hours per Day"]],

      chartOptions: {
        colors: colors,
        chartArea: { width: "200%", height: "200%", gridlines: "white" },
        enableInteractivity: true,
        vAxis: { format: "decimal" },
      },
    };
  },
  props: ["proportionOfResearchApproachUsed"],
  created() {
    this.proportionOfResearchApproachUsed.forEach((item) => {
      let theArr = [];
      let name = item._id;
      theArr.push(name, item.count);

      if (theArr[0] !== "") {
        var firstStr = theArr[0][0];

        theArr[0] = `${firstStr.toUpperCase()}${theArr[0].substring(1)}`;
        this.chartData.push(theArr);
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
