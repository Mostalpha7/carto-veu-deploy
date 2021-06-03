<template>
  <div>
    <Banner />

    <div class="row justify-content-center my-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="d-flex">
            <button
              @click="swap(true)"
              class="btn btn1"
              :class="[policy ? 'btn-warning' : 'btn-light']"
            >
              Policy Briefs
            </button>
            <div class="mr-2"></div>

            <button
              @click="swap(false)"
              class="btn btn1"
              :class="[!policy ? 'btn-warning' : 'btn-light']"
            >
              Reasearch Datasets
            </button>
          </div>
        </div>
      </div>
    </div>

    <Research v-if="policy" />
    <TableDisplay v-if="!policy" />

    <div class="py-5"></div>
    <div class="py-4"></div>
  </div>
</template>

<script>
import Banner from "./Banner";
import Research from "./Research";
import TableDisplay from "./TableDisplay";
export default {
  components: { Banner, Research, TableDisplay },
  data() {
    return {
      policy: true,
    };
  },
  methods: {
    swap(val) {
      this.policy = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";
label {
  font-size: 0.8rem;
}

button.btn1 {
  width: 40vw;
  height: 4rem;
  @include mobile {
    min-width: 44vw;
  }
}
.btn-light {
  background-color: rgb(224, 224, 224);
}
</style>
