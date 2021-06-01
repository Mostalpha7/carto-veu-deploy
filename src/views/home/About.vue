<template>
  <div>
    <div class="homeAbout boxed">
      <div class="firstRow">
        <div class="left d-none d-md-block">
          <img
            src="../../assets/home/about.png"
            class="aboutImg"
            alt="aboutImg"
          />
        </div>
        <div class="right ">
          <h4>About</h4>
          <h3>Collaborative environment for open research</h3>
          <p>
            The project will create a collaborative environment of African
            scientists and non-scientist consumers of open research working in
            communities of practice and across boundaries and disciplines.
          </p>
          <br class="d-none d-md-block" />
          <p>
            Building on available information technology solutions, the project
            will result in increased access to data and speed of discovery and
            scientific advancement.
          </p>
          <Link class="btn mt-md-3 link" to="#">
            EXPLORE
          </Link>
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
.homeAbout {
  padding-top: 6rem;
  padding-bottom: 4rem;
  @include mobile {
    padding-top: 3rem;
  }
  .firstRow {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .left {
      flex: 1;
      .aboutImg {
        width: 95%;
        height: 100%;
      }
    }
    .right {
      flex: 1;
      padding-right: 1rem;
      @include mobile {
        padding-right: 0px;
      }
      h4 {
        color: $mainColor;
        font-size: 1.5rem;
        font-weight: normal;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
        width: 90%;
        @include mobile {
          width: 95%;
          margin-bottom: 1.2rem;
        }
      }
      p {
        font-size: 1.02rem;
        line-height: 1.5;
        :last-of-type {
          line-height: 1.7;
        }
      }
      .btn {
        border: 1px solid rgb(205, 184, 224);
        padding: 0.5rem;
        display: inline-block;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-size: 0.8rem;
        color: $mainColor;
        font-weight: 500;
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
      }
    }
  }
  .secondRow {
    padding-top: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .secondInner {
      flex: 1;
    }
  }
}
</style>
