<template>
  <div>
    <div class="">
      <div class="banner boxed">
        <div class="left">
          <div class="banner-content">
            <h1>
              Welcome to <br />
              CARTA EVIDENCE
            </h1>
            <p>
              Coalition of African Academy of research-oriented change agents
            </p>
            <Link class="link btn" to="/about">
              Explore
            </Link>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="d-none d-md-block ">
        <div class="boxed counter px-4">
          <div>
            <h1>{{ topData.totalPublications | textFilter }}+</h1>
            <p>Number of publications</p>
          </div>
          <div>
            <h1>{{ topData.totalAuthors | textFilter }}+</h1>
            <p>Total authors</p>
          </div>
          <div>
            <h1>{{ topData.numberofCitations | textFilter }}+</h1>
            <p>Total citations</p>
          </div>
          <div>
            <h1>{{ topData.journalImpactFactor | textFilter }}+</h1>
            <p>Media impact factor of journals</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { baseUrl, apiKey } from "@/resource";
export default {
  data() {
    return {
      topData: {
        totalPublications: "loading",
        totalAuthors: "loading",
        journalImpactFactor: "loading",
        numberofCitations: "loading",
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
          // this.topData.medianPaperCited = result.medianPaperCited;
          // this.topData.medianProportionOfMostSitedPublication =
          //   result.medianProportionOfMostSitedPublication;
        })
        .catch(() => {});
      this.loading = false;
    },
  },
  filters: {
    textFilter(val) {
      var convertStr = val.toString();
      var splitStr = convertStr.split(".");

      if (splitStr.length === 1) {
        return convertStr;
      } else {
        var firstStr = splitStr[0];
        var secondStr = splitStr[1].slice(0, 2);
        return `${firstStr}.${secondStr}`;
      }
    },
  },
  created() {
    this.loadData();
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/global.scss";
.banner {
  min-height: 75vh;
  display: flex;
  background-image: url(../../assets/home/banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top right;

  @include mobile {
    min-height: 60vh;
    height: 80%;
    background-position: center;
  }
  .banner-content {
    position: relative;
    top: 25%;
    left: 7%;
  }
  .link {
    text-decoration: none;
    color: whitesmoke;
    background-color: $yellow;
    padding: 1rem;
    font-weight: 500;
    margin-top: 5px;
    display: inline-block;
  }
  .left {
    flex: 1;
    p {
      color: whitesmoke;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
    .btn {
      padding: 0.7rem 2.1rem;
      min-width: 200px;
      background: $mainColor;
      &:hover {
        background: $mainBlue;
        transition: 0.5s;
      }
    }
  }
  .right {
    flex: 1;
    @include mobile {
      flex: 0;
    }
  }
}

h1 {
  margin-bottom: 0.6rem;
  font-size: 3rem;
  font-weight: 800;
  color: whitesmoke;
  @include mobile {
    font-size: 2rem;
    font-weight: 700;
  }
}

.counter {
  padding: 2rem 0px;
  background-color: #063063;
  display: flex;
  justify-content: space-evenly;
  &:hover {
    background-color: $mainColor;
  }
  h1 {
    color: white;
    font-size: 2.1rem;
    text-align: center;
    margin-bottom: 0;
  }
  p {
    color: rgb(235, 235, 235);
    text-transform: capitalize;
    margin-bottom: 0;
  }
}
</style>
