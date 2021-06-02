<template>
  <div>
    <Banner />
    <About />
    <Research />
    <TeamAndFounders />
    <div class="topFooter boxed d-none d-md-block">
      <div class="row justify-content-center">
        <div class="col-md-9">
          <div class="row justify-content-center">
            <div class="innerContainer col-md-10">
              <div class="row justify-content-center py-5">
                <div class="col-md-10">
                  <p class="text-center">CONTACT US</p>
                  <h1 class="text-center font-weight-bold">
                    We will like to <br />
                    hear from you
                  </h1>
                  <form class="py-4">
                    <div class="row">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last name"
                        />
                      </div>
                    </div>

                    <div class="row mt-4">
                      <div class="col">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                        />
                      </div>
                      <div class="col">
                        <select id="inputState" class="form-control">
                          <option selected>Subject...</option>
                          <option>...</option>
                        </select>
                      </div>
                    </div>

                    <div class="form-group mt-4">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div class="row justify-content-center">
                      <button class="btn btn-warning text-white">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./Banner";
import About from "./About";
import Research from "./Research";
import TeamAndFounders from "./TeamAndFounders";
export default {
  name: "Home",
  components: { Banner, About, Research, TeamAndFounders },
};
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";

.topFooter {
  margin-top: -0.6rem;
  background-color: $mainBlue;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding-bottom: 1.5rem;
  .innerContainer {
    background-color: white;
    border-radius: 10px;
    top: -10vh;
    bottom: 10%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
}
</style>
