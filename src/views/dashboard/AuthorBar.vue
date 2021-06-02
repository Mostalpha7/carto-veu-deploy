<template>
  <div>
    <p class="font-weight-bold">Author fellows per host institution</p>
    <GChart type="BarChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  components: { GChart },
  data() {
    return {
      chartData: [
        ["Year", "Before", "During", "After"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
        ["2018", 1000, 400, 200],
        ["2019", 1170, 460, 250],
        ["2020", 660, 1120, 300],
        ["2021", 1030, 540, 350],
      ],

      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
        height: 500,
        colors: ["#8E5301", "#EAB217", "#FBA16F"],
        chartArea: { width: "70%", height: "80%", gridlines: "white" },
        enableInteractivity: true,
        orientation: "horizontal",
        vAxis: { format: "decimal" },
        height: 340,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
