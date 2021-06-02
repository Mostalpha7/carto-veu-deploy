<template>
  <div>
    <p class="font-weight-bold">
      Percentage of papers co-authored by CARTA fellows
    </p>
    <br class="d-none d-md-block" /><br class="d-none d-md-block" />
    <GChart type="PieChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  components: { GChart },
  data() {
    return {
      chartData: [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ],

      chartOptions: {
        colors: ["#8E5301", "#EAB217", "#FBA16F"],
        chartArea: { width: "100%", height: "100%", gridlines: "white" },
        enableInteractivity: true,
        orientation: "horizontal",
        vAxis: { format: "decimal" },
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
