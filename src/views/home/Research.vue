<template>
  <div>
    <div class="boxed">
      <div class="py-4">
        <h3 class="text-center mt-5 mb-4">
          Research Priorities and Resources
        </h3>

        <div class="py-5 row justify-content-center">
          <div class="priorities">
            <a class="priority" href="/resources">
              <h4>Cancers</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>COVID-19</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Disabilities</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Environment Health</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Food security and nutrition</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Health Systems and policy</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Infectious diseases</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Maternal and child health</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Mental health and substance abuse</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Non-communicable diseases</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>Sexual and reproductive health</h4>
            </a>
            <a class="priority" href="/resources">
              <h4>View More</h4>
            </a>
          </div>
        </div>
        <div class="">
          <div class="mt-4">
            <h3 class="text-center mt-5 mb-5">Policy Briefs</h3>
            <div class="container-fluid px-5">
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

<style lang="scss">
@import "../../styles/global.scss";
.boxed h3 {
    font-size: 2.2rem;
    color: black;
    font-weight: 700;
  
}

 .priorities {
    display: grid;
    grid: repeat(3, 150px) / repeat(4, 200px);
    grid-row-gap: 20px;
    grid-column-gap:20px;
    justify-content: center;
    margin-bottom: 5%;
    @include mobile {
      grid: auto/repeat(2, 150px);
    }
    .priority {
      background-color: #fff;
      text-decoration: none;
      color:#000;
      text-transform: uppercase;
      min-height: 100px;
      justify-content: center;
      padding:30% 20px;
      filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.08));
      border-radius: 5px;
      transition: .5s;
      &:hover {
        background-color: $mainColor;
        margin-top:-5px;
        transition: .5s;
        h4 {
          color:#fff;
        }
      }
      h4 {
        text-align: center;
        font-size: 0.9rem;
      }
    }
  

}
</style>
