<template>
  <div class="card shadow border-0">
    <div class="card-body mb-0 pb-0">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <div>
          <img width="25" :src="imgPath" alt="" />
        </div>
        <div>
          <h4>{{ figure }}</h4>
        </div>
      </div>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgPath", "desc", "figure"],
};
</script>

<style lang="scss" scoped>
.card {
  height: 100%;
}
</style>
