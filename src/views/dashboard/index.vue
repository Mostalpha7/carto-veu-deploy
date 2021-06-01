<template>
  <div class="dashboard">
    <Banner />
    <div class="boxed mt-5">
      <div class=" curveBorder p-4">
        <FormFilter />

        <FilterBody />
      </div>
      <div class="py-5"></div>
      <div class="py-5"></div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import FormFilter from "./FormFilter";
import FilterBody from "./FilterBody";
export default { components: { Banner, FormFilter, FilterBody } };
</script>

<style lang="scss" scoped></style>
