<template>
  <div>
    <div class="blogCard2 mb-2">
      <div class="card bg-dark text-white">
        <img src="../../assets/blog/Bitmap (1).png" class="card-img" alt="" />
        <div class="card-img-overlay">
          <p class="card-text font-weight-bold mb-0 pb-1">
            WANT TO SOLVE COMPLEX HEALTH ISSUES? TRAIN SCHOLARS TO THINK ACROSS
            DISCIPLINES
          </p>
          <p class="card-text mt-0">Health Systems and Policy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgPath"],
  created() {},
};
</script>
<style lang="scss" scoped>
.blogCard2 {
  .card {
    .card-img-overlay {
      top: auto !important;
      bottom: 10px !important;
    }
  }
}
</style>
