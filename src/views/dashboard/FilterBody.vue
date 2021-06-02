<template>
  <div>
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
                imgPath="/dashboard/Asset5.png"
                figure="34.15%"
                desc="% Papers with fellow as 1st author"
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
      <div class="right">
        <div class="card-body shadow card mb-2">
          <BarChart />
        </div>
        <div class="">
          <div class="row">
            <div class="col-md-6">
              <PieChart class="shadow card p-2" />
            </div>
            <div class="col-md-6">
              <PublishedJournal class="shadow card p-2" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flexContainer mb-2">
      <div class="left shadow card">
        <div class="card-body">
          <CoAuthorPie />
        </div>
      </div>
      <div class="right shadow card">
        <div class="card-body">
          <AuthorBar />
        </div>
      </div>
    </div>
    <div class="flexContainer">
      <div class="right shadow card">
        <div class="card-body">
          <AuthorBar />
        </div>
      </div>
      <div class="left shadow card">
        <div class="card-body">
          <CoAuthorPie />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import PublishedJournal from "./PublishedJournal";
import CoAuthorPie from "./CoAuthorPie";
import AuthorBar from "./AuthorBar";
export default {
  components: {
    Card,
    BarChart,
    PieChart,
    PublishedJournal,
    CoAuthorPie,
    AuthorBar,
  },
  data() {
    return {};
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
