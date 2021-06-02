<template>
  <div class="dashboard">
    <Banner />
    <div class="boxed mt-5">
      <div class=" curveBorder p-4">
        <FormFilter />

        <FilterBody />
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
export default {
  components: { Banner, FormFilter, FilterBody },

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
    };
  },
  methods: {
    async loadData() {
      await axios
        .get(`${baseUrl}/analytics`, {
          headers: {
            apiKey: apiKey,
          },
        })
        .then((response) => {
          var result = response.data.data;
          this.topData.totalPublications = result.totalPublications;
          this.topData.totalAuthors = result.totalAuthors;
          this.topData.numberofCitations = result.numberofCitations;
          this.topData.journalImpactFactor = result.journalImpactFactor;
          this.topData.medianPaperCited = result.medianPaperCited;
          this.topData.medianProportionOfMostSitedPublication =
            result.medianProportionOfMostSitedPublication;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped></style>
