<template>
  <div>
    <div class="boxed">
      <div class="curveBorder py-4">
        <h4 class="text-center mt-5 mb-4">
          Research Priorities and Resources
        </h4>

        <div class="tabs mt-3 row justify-content-center">
          <div class="col-md-10 px-4">
            <b-tabs
              pills
              align="center"
              active-nav-item-class="text-white 
              bg-warning"
            >
              <b-tab title="All" active>
                <!-- <b-card-text>Tab contents 1</b-card-text> -->
              </b-tab>
              <b-tab title="Cancers">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="COVID-19">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Disabilities">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Environment Health">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Food security and nutrition">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Health Systems and policy">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Infectious diseases">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Maternal and child health">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Mental health and substance abuse">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>
              <b-tab title="Non-communicable diseases">
                <!-- <b-card-text>Tab contents 2</b-card-text> -->
              </b-tab>

              <b-tab title="Sexual and reproductive health"> </b-tab>
            </b-tabs>
          </div>
        </div>
        <div class="">
          <div class="mt-4">
            <h4 class="text-center mt-5 mb-4">Policy Briefs</h4>
            <div class="container-fluid px-md-4">
              <div class="row">
                <div class="col-md-4">
                  <BlogCard />
                </div>
                <div class="col-md-4">
                  <BlogCard />
                </div>
                <div class="col-md-4">
                  <BlogCard />
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
import BlogCard from "@/components/home/Blog.vue";
export default {
  components: { BlogCard },
};
</script>

<style lang="scss" scoped>
@import "../../styles/global.scss";
.curveBorder {
  background-color: $mutedBlack;
  border-radius: 1rem;
  h4 {
    color: black;
    font-weight: 600;
  }
}
</style>
