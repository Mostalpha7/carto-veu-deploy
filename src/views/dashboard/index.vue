<template>
  <div class="dashboard">
    <Banner />
    <div class="boxed mt-5">
      <div class=" curveBorder p-4">
        <FormFilter
          v-on:gender="Gender"
          v-on:cohort="Cohort"
          v-on:hostInstitituioninstitutionof="HostInstitituioninstitutionof"
          v-on:search="Search"
        />

        <Loading v-if="loading" class="my-5 text-center" />
        <FilterBody v-else :topData="topData" :others="others" />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import FormFilter from "./FormFilter";
import FilterBody from "./FilterBody";
import axios from "axios";
import { apiKey, baseUrl } from "@/resource.js";
import Loading from "./Loading";
export default {
  components: { Banner, FormFilter, FilterBody, Loading },

  data() {
    return {
      topData: {
        totalPublications: null,
        totalAuthors: null,
        numberofCitations: null,
        journalImpactFactor: null,
        medianPaperCited: null,
        medianProportionOfMostSitedPublication: null,
      },
      others: {},
      gender: "*",
      cohort: "*",
      hostInstitituioninstitutionof: "*",
      loading: true,
    };
  },
  computed: {},
  methods: {
    async loadData() {
      await axios
        .get(
          `${baseUrl}/analytics?gender=${this.gender}&cohort=*&hostInstitituioninstitutionof=${this.hostInstitituioninstitutionof}`,
          {
            headers: {
              apiKey: apiKey,
            },
          }
        )
        .then((response) => {
          var result = response.data.data;

          this.others.publicationsPeryear = result.publicationsPeryear;
          this.others.proportionOfResearchApproachUsed =
            result.proportionOfResearchApproachUsed;
          this.others.topJournalsPublished = result.topJournalsPublished;
          this.others.fellowsPerHostInstitution =
            result.fellowsPerHostInstitution;
          this.others.fellowsPerHomeInstitution =
            result.fellowsPerHomeInstitution;
          this.others.percentgePublications = result.percentgePublications;
          this.others.pappersCoAutoredByCarter =
            result.pappersCoAutoredByCarter;

          this.topData.totalPublications = result.totalPublications;
          this.topData.totalAuthors = result.totalAuthors;
          this.topData.numberofCitations = result.numberofCitations;
          this.topData.journalImpactFactor = result.journalImpactFactor;
          this.topData.medianPaperCited = result.medianPaperCited;
          this.topData.medianProportionOfMostSitedPublication =
            result.medianProportionOfMostSitedPublication;
        })
        .catch(() => {});
      this.loading = false;
    },

    async Search() {
      this.loading = true;
      this.loadData();
    },
    Gender(val) {
      this.gender = val;
    },
    Cohort(val) {
      this.cohort = val;
    },
    HostInstitituioninstitutionof(val) {
      this.hostInstitituioninstitutionof = val;
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped></style>
