<template>
  <div>
    <p class="font-weight-bold">Author Fellows Per Host Institution</p>
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
        chartArea: { width: "70%", height: "80%", gridlines: "white" },
        enableInteractivity: true,
        orientation: "horizontal",
        vAxis: { format: "decimal" },
        height: 340,
      },
    };
  },
  props: ["fellowsPerHostInstitution"],
  created() {
    this.fellowsPerHostInstitution.forEach((item) => {
      let theArr = [];

      let name = item._id;
      theArr.push(name, item.count);

      if (theArr[0] !== "") {
        this.chartData.push(theArr);
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
