<template>
  <div>
    <div id="about" class="homeAbout boxed">
      <div class="firstRow">
        <div class="left d-none d-md-block">
          <img
            src="../../assets/home/about.png"
            class="aboutImg"
            alt="aboutImg"
          />
        </div>
        <div class="right">
          <h4>About</h4>
          <h3>Collaborative Environment for Open Research</h3>
          <p>
            The project will create a collaborative environment of African
            scientists and non-scientist consumers of open research working in
            communities of practice and across boundaries and disciplines.
          </p>
          <p>
            Building on available information technology solutions, the project
            will result in increased access to data and speed of discovery and
            scientific advancement.
          </p>
        </div>
      </div>

      <div class="features">
        <div class="feature">
          <img
            src="../../assets/home/knowledge.png"
            class="featureimg"
            alt="Knowledge Management and Impact Optimization"
          />
          <h5>Knowledge Management and Impact Optimization</h5>
        </div>
        <div class="feature">
          <img
            src="../../assets/home/impact.png"
            class="featureimg"
            alt="Optimizing Research Impact"
          />
          <h5>Optimizing Research Impact</h5>
        </div>
        <div class="feature">
          <img
            src="../../assets/home/evidence.png"
            class="featureimg"
            alt="Improving visibility of evidence"
          />
          <h5>Improving visibility of evidence</h5>
        </div>
        <div class="feature">
          <img
            src="../../assets/home/hcd.png"
            class="featureimg"
            alt="Human Capital Development"
          />
          <h5>Human Capital Development</h5>
        </div>
        <div class="feature">
          <img
            src="../../assets/home/open-science.png"
            class="featureimg"
            alt="Promoting open Science"
          />
          <h5>Promoting open Science</h5>
        </div>
        <div class="feature">
          <img
            src="../../assets/home/structure.png"
            class="featureimg"
            alt="Tracking structure of evidence"
          />
          <h5>Tracking structure of evidence</h5>
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
        transition: 1.5s;
        &:hover {
          transform: skewX(5deg) skewY(5deg) scale(0.9)
            rotate3d(2, 1, -5, 10deg);
          transition: 1.5s;
        }
      }
    }
    .right {
      flex: 1;
      padding-right: 1rem;
      @include mobile {
        padding-right: 0px !important;
      }
      h4 {
        color: $mainColor;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
      }
      h3 {
        font-size: 2.3rem;
        margin-bottom: 1rem;
        font-weight: 800;
        width: 80%;
        @include mobile {
          width: 95%;
          margin-bottom: 1.2rem;
        }
      }
      p {
        font-size: 1.02rem;
        line-height: 1.5;
        width: 80%;
        :last-of-type {
          line-height: 1.7;
        }
        @include mobile {
          width: 100%;
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
  .features {
    margin: 5% 10%;
    display: grid;
    grid: repeat(2, 250px) / repeat(3, 250px);
    grid-row-gap: 50px;
    grid-column-gap: 50px;
    padding: 10px;
    justify-content: center;
    @include mobile {
      grid: auto / auto auto;
      grid-row-gap: 10px;
      grid-column-gap: 5px;
      padding: 0;
      .featureimg {
        max-width: 150px;
        margin: auto;
      }
      h5 {
        margin-top: -20px !important;
      }
    }
    .feature {
      transition: 0.5s;
      &:hover {
        transform: scale(1.03);
        transition: 0.5s;
      }
      h5 {
        margin-top: -40px;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
      }
    }
  }
}
</style>
