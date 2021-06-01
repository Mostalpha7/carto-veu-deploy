<template>
  <div>
    <div class="resourceBanner boxed">
      <div class="left">
        <h1>Resources</h1>
        <p>Coalition of African Academy of research-oriented change agents</p>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.resourceBanner {
  margin-top: -0.6rem;
  background-image: url(../../assets/resources/banner.png);
  height: 65vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  .left {
    flex: 1;
    h1 {
      margin-top: calc(50vh - 28vh);
      margin-bottom: 0.6rem;
      font-size: 3rem;
      color: whitesmoke;
      @include mobile {
        margin-top: calc(100vh - 80vh);
        font-size: 2rem;
      }
    }
    p {
      color: whitesmoke;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }
  }
  .right {
    flex: 1;
  }
}
</style>
