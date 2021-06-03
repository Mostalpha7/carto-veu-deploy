<template>
  <div>
    <div class="mt-4 container">
      <div class="row align-items-end justify-content-between">
        <div class="form-group col-md-3">
          <select
            v-model="gender"
            @change="Gender"
            id="inputState"
            class="form-control"
          >
            <option value="*" selected>Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="male&female">Both</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <select
            v-model="hostInstitituioninstitutionof"
            @change="HostInstitituioninstitutionof"
            id="inputState"
            class="form-control"
          >
            <option value="*" selected>Host Institituion</option>
            <option value="University of Ibadan">University of Ibadan</option>
            <option value="Makerere University">Makerere University</option>
            <option value="University of Malawi">University of Malawi</option>
            <option value="University of Nairobi">University of Nairobi</option>
            <option value="Moi University">Moi University</option>
            <option value="University of Rwanda">University of Rwanda</option>
            <option value="University of Dar es Salaam"
              >University of Dar es Salaam</option
            >
            <option value="Obafemi Awolowo University"
              >Obafemi Awolowo University</option
            >
            <option value="University of the Witwatersrand"
              >University of the Witwatersrand</option
            >
          </select>
        </div>
        <div class="form-group col-md-3">
          <select v-model="cohort" @change="Cohort" class="form-control">
            <option value="*" selected>Cohort</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <button @click="Search" class="btn btn-secondary">Filter</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: "*",
      hostInstitituioninstitutionof: "*",
      cohort: "*",
    };
  },
  methods: {
    Gender() {
      this.$emit("gender", this.gender);
    },
    HostInstitituioninstitutionof() {
      this.$emit(
        "hostInstitituioninstitutionof",
        this.hostInstitituioninstitutionof
      );
    },
    Cohort() {
      this.$emit("cohort", this.gender);
    },
    Search() {
      this.$emit("search");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.filterContainer {
  display: flex;
  justify-content: space-between;
  .moreHeight {
    height: 2rem;
  }
  .yellow {
    color: $yellow !important;
  }
}
</style>
