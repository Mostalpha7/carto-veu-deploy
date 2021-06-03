<template>
  <div>
    <div class="resourceBanner boxed">
      <div class="left">
        <div class="banner-content">
            <h1>Resources</h1>
        <p>Coalition of African Academy of <br /> research-oriented change agents</p>
          </div>
        
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
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  @include mobile {
    background-position: center;
    height: 45vh;
  }
  .left {
    flex: 1;
    .banner-content {
        position: relative;
        top: 30%;
        left: 7%;
        max-width: 400px;
        h1 {
          margin-bottom: 0.6rem;
          font-size: 3rem;
          font-weight: 700;
          color: whitesmoke;
          @include mobile {
            font-size: 2rem;
          }
        }
        p {
          color: whitesmoke;
          font-size: 1.25rem;
          margin-bottom: 1rem;
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
</style>
