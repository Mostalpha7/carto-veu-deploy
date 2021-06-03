<template>
  <div>
    <div class="blogCard2 mb-2">
      <div class="card text-white">
        <!-- <img src="../../assets/blog/Bitmap.jpg" class="featured-img" alt="" /> -->
        <div class="card-img-overlay"></div>

        <div class="card-text">
          <p class="font-weight-bold mb-0 pb-1">
            WANT TO SOLVE COMPLEX HEALTH ISSUES? TRAIN SCHOLARS TO THINK ACROSS
            DISCIPLINES
          </p>
          <p class="mt-0">Health Systems and Policy</p>
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
    position: relative;
    cursor: pointer;
    margin-top: 50px;
    border: none;
    border-radius: 15px;
    background: url(../../assets/blog/Bitmap.jpg);
    background-position: center top;
    background-clip: border-box;
    background-size: cover;
    height: 300px;
    padding: 30px;
    &:hover {
      transition: 0.5s ease;
      background-size: 105%;
    }
    .featured-img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
    .card-img-overlay {
      position: absolute;
      border-radius: 15px;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 1;
      transition: 0.5s ease;
      background-image: linear-gradient(
        180deg,
        rgba(19, 27, 66, 0) 0%,
        rgba(12, 20, 58, 0.73) 48.33%,
        #131b42 99.63%
      );
    }
    .card-text {
      bottom: 10%;
      z-index: 100000;
      position: absolute;
    }
  }
}
</style>
