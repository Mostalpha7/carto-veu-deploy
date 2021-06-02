<template>
  <div>
    <p class="font-weight-bold">Pappers Co-Autored By Carter</p>
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
  props: ["pappersCoAutoredByCarter"],
  created() {
    this.chartData.push(
      ["Co-authored", this.pappersCoAutoredByCarter.coAuthored],
      ["Not co-authored", this.pappersCoAutoredByCarter.notCoAuthored],
      ["Others", this.pappersCoAutoredByCarter.others]
    );
  },
};
</script>

<style lang="scss" scoped></style>
