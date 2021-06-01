<template>
  <div>
    <div class="">
      <div class="banner boxed">
        <div class="left">
          <div>
            <h1>
              Welcome to <br />
              CARTA EVIDENCE
            </h1>
            <p>
              Coalition of African Academy of research-oriented change agents
            </p>
            <Link class="link btn" to="/">
              CONTACT US
            </Link>
          </div>
        </div>
        <div class="right"></div>
      </div>
      <div class="boxed counter">
        <div>
          <h2>2179+</h2>
          <p>Number of publications</p>
        </div>
        <div>
          <h2>183+</h2>
          <p>Total authors</p>
        </div>
        <div>
          <h2>24409+</h2>
          <p>Total citations</p>
        </div>
        <div>
          <h2>2.92</h2>
          <p>Media impact factor of journals</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../../styles/global.scss";
.banner {
  min-height: 80vh;
  display: flex;
  background-image: url(../../assets/home/banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom bottom;
  height: 100%;
  @include mobile {
    min-height: 60vh;
    height: 80%;
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
    h1 {
      margin-top: calc(100vh - 80vh);
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
    .btn {
      padding: 0.7rem 2.1rem;
    }
  }
  .right {
    flex: 1;
    @include mobile {
      flex: 0;
    }
  }
}

.counter {
  padding: 1rem 0px;
  background-color: #063063;
  display: flex;
  justify-content: space-between;
  h2 {
    color: white;
    font-size: 2.1rem;
    text-align: center;
  }
  p {
    color: rgb(235, 235, 235);
  }
}
</style>
