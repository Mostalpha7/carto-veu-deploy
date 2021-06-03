<template>
  <div>
    <div class="flexContainer my-3">
      <div class="left shadow card">
        <div class="card-body">
          <div v-if="topData" class="row">
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset4.png"
                :figure="topData.totalPublications"
                desc="Number of publications"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset3.png"
                :figure="topData.totalAuthors"
                desc="Total authors"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset6.png"
                :figure="topData.numberofCitations"
                desc="Total citations"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset2.png"
                :figure="topData.journalImpactFactor"
                desc="Media impact factor of journals"
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset3.png"
                :figure="topData.medianPaperCited"
                desc="Median Paper Cited "
              />
            </div>
            <div class="col-md-6 mb-2">
              <Card
                imgPath="/dashboard/Asset1.png"
                :figure="topData.medianProportionOfMostSitedPublication"
                desc="Median Proportion Of Most Sited Publication"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="card-body shadow card mb-2">
          <BarChart :publicationsPeryear="others.publicationsPeryear" />
        </div>
      </div>
    </div>
    <div class="mb-3">
      <div class="row">
        <div class="col-md-6">
          <div class="card-body shadow card">
            <AuthorBar
              :fellowsPerHostInstitution="others.fellowsPerHostInstitution"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-body shadow card">
            <FellowsPerHomeInstitution
              :fellowsPerHomeInstitution="others.fellowsPerHomeInstitution"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flexContainer mb-2">
      <div class="left shadow card">
        <div class="card-body">
          <PublishedJournal
            :topJournalsPublished="others.topJournalsPublished"
          />
        </div>
      </div>
      <div class="right">
        <PieChart
          :proportionOfResearchApproachUsed="
            others.proportionOfResearchApproachUsed
          "
          class="shadow card p-2 mb-2"
        />
        <div class="row">
          <div class="col-md-6">
            <PercentgePublications
              :percentgePublications="others.percentgePublications"
              class="shadow card p-2 mb-2"
            />
          </div>
          <div class="col-md-6">
            <PappersCoAutoredByCarter
              :pappersCoAutoredByCarter="others.pappersCoAutoredByCarter"
              class="shadow card p-2 mb-2"
            />
          </div>
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
import FellowsPerHomeInstitution from "./FellowsPerHomeInstitution";
import PercentgePublications from "./PercentgePublications";
import PappersCoAutoredByCarter from "./PappersCoAutoredByCarter";
export default {
  components: {
    Card,
    BarChart,
    PieChart,
    PublishedJournal,
    CoAuthorPie,
    AuthorBar,
    FellowsPerHomeInstitution,
    PercentgePublications,
    PappersCoAutoredByCarter,
  },
  data() {
    return {};
  },
  props: ["topData", "others"],
  created() {},
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
