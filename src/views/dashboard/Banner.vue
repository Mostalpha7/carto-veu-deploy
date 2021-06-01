<template>
  <div>
    <div class="dashboardBanner">
      <div class="positionCenter boxed">
        <h1>BIBLIOMETRIC DASHBOARD</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.dashboardBanner {
  background-color: $mainBlue;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  h1 {
    padding-top: calc(100vh - 80vh);
    margin-bottom: 0.6rem;
    font-size: 2rem;
    color: whitesmoke;
    @include mobile {
      padding-top: calc(100vh - 80vh);
      font-size: 2rem;
    }
  }
}
</style>
