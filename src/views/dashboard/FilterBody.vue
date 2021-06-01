<template>
  <div>
    <div class="row mt-3">
      <div class="col-md-4 mb-3">
        <Card
          imgPath="/dashboard/Asset4.png"
          figure="2179"
          desc="Number of publications"
        />
      </div>
      <div class="col-md-4 mb-3">
        <Card
          imgPath="/dashboard/Asset3.png"
          figure="149"
          desc="Total authors"
        />
      </div>
      <div class="col-md-4 mb-3">
        <Card
          imgPath="/dashboard/Asset6.png"
          figure="2179"
          desc="Total citations"
        />
      </div>
      <div class="col-md-4 mb-3">
        <Card
          imgPath="/dashboard/Asset2.png"
          figure="2.9"
          desc="Media impact factor of journals"
        />
      </div>
      <div class="col-md-4 mb-3">
        <Card
          imgPath="/dashboard/Asset5.png"
          figure="34.15%"
          desc="% Papers with fellow as 1st author"
        />
      </div>
      <div class="col-md-4 mb-3">
        <Card
          imgPath="/dashboard/Asset1.png"
          figure="6"
          desc="Median number of authors per paper"
        />
      </div>
    </div>
    <div>
      <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
    </div>
    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6"></div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { GChart } from "vue-google-charts";

export default {
  components: { Card, GChart },
  data() {
    return {
      chartData: [
        ["Year", "Before CARTA", "During CARTA", "After CARTA"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
        ["2018", 1000, 400, 200],
        ["2019", 1170, 460, 250],
        ["2020", 660, 1120, 300],
        ["2021", 1030, 540, 350],
      ],
      chartData2: [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ],
      chartOptions: {
        title: "Publications per year",
        height: 600,
        // width: 1000,
        colors: ["#1b9e77", "#d95f02", "#7570b3"],
      },
      chartOptions2: {
        title: "Publications per year",
        height: 600,
        width: 1000,
        colors: ["#1b9e77", "#d95f02", "#7570b3"],
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
