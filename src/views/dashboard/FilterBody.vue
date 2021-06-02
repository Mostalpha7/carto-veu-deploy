<template>
  <div>
    <div class="row mt-3 d-none">
      <div class="col-md-4 mb-3">
        <Card
          imgPath="/dashboard/Asset5.png"
          figure="34.15%"
          desc="% Papers with fellow as 1st author"
        />
      </div>
    </div>
    <div class="flexContainer my-3">
      <div class="left shadow card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset4.png"
                figure="2179"
                desc="Number of publications"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset3.png"
                figure="149"
                desc="Total authors"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset6.png"
                figure="2179"
                desc="Total citations"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset2.png"
                figure="2.9"
                desc="Media impact factor of journals"
              />
            </div>

            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset3.png"
                figure="149"
                desc="Median Proportion most cited of all publications "
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset1.png"
                figure="6"
                desc="Median Number of times each paper was cited"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset1.png"
                figure="6"
                desc="Proportion of research approach used"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right shadow card">
        <div class="card-body">
          <p>Publications per year</p>
          <GChart type="BarChart" :data="chartData" :options="chartOptions" />
        </div>
      </div>
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
        height: 400,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.flexContainer {
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  .left {
    width: 37%;
    @include mobile {
      width: 100%;
    }
  }
  .right {
    width: 62%;
    @include mobile {
      width: 100%;
    }
  }
}
</style>
