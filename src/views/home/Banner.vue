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
      <div class="d-none d-md-block ">
        <div class="boxed counter px-4">
          <div>
            <h1>2179+</h1>
            <p>Number of publications</p>
          </div>
          <div>
            <h1>183+</h1>
            <p>Total authors</p>
          </div>
          <div>
            <h1>24409+</h1>
            <p>Total citations</p>
          </div>
          <div>
            <h1>2.92</h1>
            <p>Media impact factor of journals</p>
          </div>
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
  padding-top: calc(100vh - 80vh);

  @include mobile {
    min-height: 60vh;
    height: 80%;
    background-position: center;
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

h1 {
  margin-bottom: 0.6rem;
  font-size: 3rem;
  font-weight: 800;
  color: whitesmoke;
  @include mobile {
    margin-top: calc(100vh - 80vh);
    font-size: 2rem;
    font-weight: 500;
  }
}

.counter {
  padding: 1rem 0px;
  background-color: #063063;
  display: flex;
  justify-content: space-between;
  h1 {
    color: white;
    font-size: 2.1rem;
    text-align: center;
  }
  p {
    color: rgb(235, 235, 235);
  }
}
</style>
