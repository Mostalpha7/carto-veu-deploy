<template>
  <div>
    <p class="font-weight-bold">Percentge Publications</p>
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
        colors,
        chartArea: { width: "200%", height: "100%", gridlines: "white" },
        enableInteractivity: true,
        orientation: "horizontal",
        vAxis: { format: "decimal" },
      },
    };
  },
  props: ["percentgePublications"],
  created() {
    this.chartData.push(
      ["Before", this.percentgePublications.before],
      ["During", this.percentgePublications.during],
      ["After", this.percentgePublications.after]
    );
  },
};
</script>

<style lang="scss" scoped></style>
