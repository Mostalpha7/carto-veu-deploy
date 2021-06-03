<template>
  <div>
    <div>
      <div class="2flexContainer2 my-3 row">
        <div class="col-md-4 shadow card px-2">
          <div class="card-body px-2">
            <div
              class="d-flex align-items-between justify-content-between flex-column allHeight"
            >
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
              </div>
              <div class="row">
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
              </div>
              <div class="row">
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
        </div>
        <div class="col-md-8">
          <div class="card-body shadow card">
            <BarChart :publicationsPeryear="others.publicationsPeryear" />
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-3">
      <div class="col-md-6 p-0">
        <div class="shadow card">
          <div class="card-body">
            <AuthorBar
              :fellowsPerHostInstitution="others.fellowsPerHostInstitution"
            />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="shadow card">
          <div class="card-body">
            <FellowsPerHomeInstitution
              :fellowsPerHomeInstitution="others.fellowsPerHomeInstitution"
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flexContainer2 row mb-2">
        <div class="col-md-4 shadow card">
          <div class="card-body">
            <Top5PublishedJournal
              :topJournalsPublished="others.topJournalsPublished"
            />
          </div>
        </div>
        <div class="col-md-8">
          <PieChart
            :proportionOfResearchApproachUsed="
              others.proportionOfResearchApproachUsed
            "
            class="shadow card p-2 mb-2"
          />
          <div class="row">
            <div class="col-md-6 pr-0">
              <PercentgePublications
                :percentgePublications="others.percentgePublications"
                class="border-0 shadow card p-3"
              />
            </div>
            <div class="col-md-6">
              <PappersCoAutoredByCarter
                :pappersCoAutoredByCarter="others.pappersCoAutoredByCarter"
                class="border-0 card p-3"
              />
            </div>
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
import Top5PublishedJournal from "./Top5PublishedJournal";
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
    Top5PublishedJournal,
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
  justify-content: space-evenly;
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
